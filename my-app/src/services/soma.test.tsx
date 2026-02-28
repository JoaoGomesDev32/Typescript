import { describe, it, expect } from "vitest";
import { soma } from "./soma";

describe("soma", () => {
	it("deve somar 10 ao numero informado", () => {
		const value = soma(5);
		expect(value).toBe(15);
	});
});
