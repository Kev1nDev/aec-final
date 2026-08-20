import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Header } from "./Header";

function setScrollY(value: number) {
  Object.defineProperty(window, "scrollY", { value, configurable: true, writable: true });
}

describe("Header", () => {
  afterEach(() => {
    setScrollY(0);
    vi.restoreAllMocks();
    document.body.style.overflow = "";
  });

  it("renders the logo and both navigation link sets", () => {
    // Arrange & Act
    render(<Header />);

    // Assert
    expect(screen.getByText("AUTOPARTES")).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Productos" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Ver Catálogo" }).length).toBeGreaterThan(0);
  });

  it("toggles the mobile menu and its aria state", () => {
    // Arrange
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Abrir menú" });

    // Act
    fireEvent.click(toggle);

    // Assert
    expect(screen.getByRole("button", { name: "Cerrar menú" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    // Act
    fireEvent.click(screen.getByRole("button", { name: "Cerrar menú" }));

    // Assert
    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("locks body scroll while the mobile menu is open", () => {
    // Arrange
    render(<Header />);

    // Act
    fireEvent.click(screen.getByRole("button", { name: "Abrir menú" }));

    // Assert
    expect(document.body.style.overflow).toBe("hidden");

    // Act
    fireEvent.click(screen.getByRole("button", { name: "Cerrar menú" }));

    // Assert
    expect(document.body.style.overflow).toBe("");
  });

  it("switches from plain to floating pill when the scroll threshold is passed", async () => {
    // Arrange
    render(<Header />);
    const banner = screen.getByRole("banner");

    expect(banner.className).toContain("bg-gradient-to-r");
    expect(banner.className).not.toContain("lg:top-4");

    // Act
    setScrollY(50);
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
    });

    // Assert
    expect(banner.className).toContain("lg:top-4");
    expect(banner.className).toContain("border-white/20");
  });
});
