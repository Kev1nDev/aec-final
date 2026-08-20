import { describe, it, expect } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("should join truthy string classes with a space", () => {
    // Arrange
    const classes = ["foo", "bar", "baz"];

    // Act
    const result = cn(...classes);

    // Assert
    expect(result).toBe("foo bar baz");
  });

  it("should filter out falsy values", () => {
    // Arrange & Act
    const result = cn("foo", false, "bar", undefined, null, "baz", "");

    // Assert
    expect(result).toBe("foo bar baz");
  });

  it("should return an empty string when all values are falsy", () => {
    // Arrange & Act
    const result = cn(false, undefined, null, "");

    // Assert
    expect(result).toBe("");
  });

  it("should handle a single class", () => {
    // Arrange
    const classes = ["single"];

    // Act
    const result = cn(...classes);

    // Assert
    expect(result).toBe("single");
  });

  it("should resolve conflicting tailwind classes keeping the last one", () => {
    // Arrange & Act
    const result = cn("px-4 py-2", "px-6");

    // Assert
    expect(result).toBe("py-2 px-6");
  });

  it("should merge conditional tailwind classes", () => {
    // Arrange & Act
    const result = cn("bg-bg-primary", false && "bg-bg-secondary", "md:px-4");

    // Assert
    expect(result).toBe("bg-bg-primary md:px-4");
  });
});
