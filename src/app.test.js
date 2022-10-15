const app = require("./app")

describe("sum let two factors a and b", () => {
    it("should return a + b", () => {
        const expected = app.sum(4, 6);
        expect(expected).toBe(10);

    })
})