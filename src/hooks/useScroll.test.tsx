import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { useScroll } from "./useScroll";

function setScrollY(value: number) {
  Object.defineProperty(window, "scrollY", { value, configurable: true, writable: true });
}

function TestComponent({ threshold = 10 }: { threshold?: number }) {
  const scrolled = useScroll(threshold);
  return <div data-testid="scroll-state">{scrolled ? "scrolled" : "top"}</div>;
}

describe("useScroll", () => {
  afterEach(() => {
    setScrollY(0);
    vi.restoreAllMocks();
  });

  it("returns false when window.scrollY is below the threshold", () => {
    setScrollY(0);
    render(<TestComponent />);
    expect(screen.getByTestId("scroll-state").textContent).toBe("top");
  });

  it("returns true when window.scrollY exceeds the threshold on mount", () => {
    setScrollY(20);
    render(<TestComponent />);
    expect(screen.getByTestId("scroll-state").textContent).toBe("scrolled");
  });

  it("updates state when a scroll event crosses the threshold", async () => {
    setScrollY(0);
    render(<TestComponent />);

    setScrollY(30);
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(screen.getByTestId("scroll-state").textContent).toBe("scrolled");
  });

  it("removes the scroll listener on unmount", () => {
    const removeSpy = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<TestComponent />);

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("scroll", expect.any(Function));
  });
});
