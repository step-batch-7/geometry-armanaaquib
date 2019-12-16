const assert = require("chai").assert;
const Circle = require("../src/circle");

describe("Circle", function() {
    describe("#toString()", function() {
        it("should return printable String for Circle", function() {
            const circle = new Circle({ x: 1, y: 2 }, 5);
            assert.deepStrictEqual(circle.toString(), "[Circle @(1,2) radius 5]");
        });
    });
});
