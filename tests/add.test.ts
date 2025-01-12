import { describe, it, expect } from "vitest";
import { add } from "../src/add";

describe("add function", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  // 失敗するテストを検証用に追加
  it("failed test", () => {
    expect(add(1, 3)).toBe(-1);
  })
});
