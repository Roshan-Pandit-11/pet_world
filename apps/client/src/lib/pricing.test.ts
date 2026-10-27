import { describe, expect, it } from "vitest";
import { nightsBetween, priceBreakdown } from "./pricing";

describe("pricing", () => {
  it("counts nights between dates", () => {
    expect(nightsBetween(new Date(2026, 10, 1), new Date(2026, 10, 4))).toBe(3);
  });
  it("single pet: 3 nights at 1000 plus 8% fee", () => {
    expect(priceBreakdown(1000, 3, 1)).toEqual({ perNight: 1000, subtotal: 3000, serviceFee: 240, total: 3240 });
  });
  it("second pet is 20% off", () => {
    expect(priceBreakdown(1000, 1, 2).perNight).toBe(1800);
  });
});
