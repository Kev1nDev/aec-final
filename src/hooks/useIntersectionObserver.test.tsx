import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { useEffect } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

function TestComponent({
  threshold = 0.15,
  triggerOnce = true,
  onVisible,
}: {
  threshold?: number;
  triggerOnce?: boolean;
  onVisible?: (v: boolean) => void;
}) {
  const { ref, visible } = useIntersectionObserver({ threshold, triggerOnce });

  useEffect(() => {
    if (onVisible) {
      onVisible(visible);
    }
  }, [visible, onVisible]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement> | undefined} data-testid="observable">
      {visible ? "visible" : "hidden"}
    </div>
  );
}

describe("useIntersectionObserver", () => {
  let observeMock: ReturnType<typeof vi.fn>;
  let disconnectMock: ReturnType<typeof vi.fn>;
  let intersectionCallback: IntersectionObserverCallback | null = null;

  beforeEach(() => {
    observeMock = vi.fn();
    disconnectMock = vi.fn();

    const MockIntersectionObserver = vi.fn(function (
      this: IntersectionObserver,
      callback: IntersectionObserverCallback,
    ) {
      intersectionCallback = callback;
      return {
        observe: observeMock,
        disconnect: disconnectMock,
      };
    });

    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("should observe the referenced element", () => {
    // Arrange & Act
    render(<TestComponent />);
    const div = screen.getByTestId("observable");

    // Assert
    expect(observeMock).toHaveBeenCalledWith(div);
  });

  it("should disconnect the observer on unmount", () => {
    // Arrange
    const { unmount } = render(<TestComponent />);

    // Act
    unmount();

    // Assert
    expect(disconnectMock).toHaveBeenCalled();
  });

  it("should set visible to true when the element intersects", async () => {
    // Arrange
    render(<TestComponent />);
    const div = screen.getByTestId("observable");

    // Act
    await act(async () => {
      if (intersectionCallback) {
        intersectionCallback(
          [
            {
              isIntersecting: true,
              target: div,
            } as unknown as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      }
    });

    // Assert
    expect(screen.getByText("visible")).toBeInTheDocument();
  });

  it("should disconnect after first intersection when triggerOnce is true", async () => {
    // Arrange
    render(<TestComponent triggerOnce />);
    const div = screen.getByTestId("observable");

    // Act
    await act(async () => {
      if (intersectionCallback) {
        intersectionCallback(
          [
            {
              isIntersecting: true,
              target: div,
            } as unknown as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      }
    });

    // Assert
    expect(disconnectMock).toHaveBeenCalled();
  });

  it("should not disconnect after first intersection when triggerOnce is false", async () => {
    // Arrange
    render(<TestComponent triggerOnce={false} />);
    const div = screen.getByTestId("observable");

    // Act
    await act(async () => {
      if (intersectionCallback) {
        intersectionCallback(
          [
            {
              isIntersecting: true,
              target: div,
            } as unknown as IntersectionObserverEntry,
          ],
          {} as IntersectionObserver,
        );
      }
    });

    // Assert
    expect(disconnectMock).not.toHaveBeenCalled();
  });
});
