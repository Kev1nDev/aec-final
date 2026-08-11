import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render the current year in copyright", () => {
    // Arrange
    render(<Footer />);

    // Act
    const copyright = screen.getByText(/© \d{4} AEC/);

    // Assert
    expect(copyright).toBeInTheDocument();
  });

  it("should add target=_blank and rel=noopener noreferrer to external links", () => {
    // Arrange
    render(<Footer />);

    // Act
    const externalLinks = screen.getAllByRole("link", {
      name: /Catálogo Completo/i,
    });

    // Assert
    expect(externalLinks.length).toBeGreaterThan(0);
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("should not add target to internal anchor links", () => {
    // Arrange
    render(<Footer />);

    // Act
    const internalLink = screen.getByRole("link", { name: /Nosotros/i });

    // Assert
    expect(internalLink).not.toHaveAttribute("target");
  });
});
