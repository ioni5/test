const app = require("./app")

describe("sum let two factors a and b", () => {
    it("should return a + b", () => {
        const expected = app.sum(4, 6);
        expect(expected).toBe(10);

    })
})

describe("sum let two factors a and b failed", () => {
    it("should return failed", () => {

        expect(app.sum(6, 6)).toBe(12);

    })
})