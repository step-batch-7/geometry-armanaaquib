const assert = require("assert");
const Line = require("../src/line");

describe("line", function() {
    describe("toString", function() {
        it("should return points which is passed", function() {
            const expectedValue = "Start Point(x,y): (1,2)\nEnd Point(x,y): (2,3)";
            const actualValue = new Line({ x: 1, y: 2 }, { x: 2, y: 3 }).toString();

            assert.strictEqual(actualValue, expectedValue);
        });
    });
});
