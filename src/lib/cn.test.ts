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
});
