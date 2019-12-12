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

    describe("isEqual", function() {
        it("should return true if lines are same", function() {
            const startPoint = { x: 1, y: 2 };
            const endPoint = { x: 2, y: 3 };

            const lineOne = new Line(startPoint, endPoint);
            const lineTwo = new Line(startPoint, endPoint);

            assert.strictEqual(lineOne.isEqual(lineTwo), true);
        });

        it("should return false if lines are not same", function() {
            const startPoint = { x: 1, y: 2 };
            const endPoint = { x: 2, y: 3 };

            const lineOne = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
            const lineTwo = new Line({ x: 2, y: 2 }, { x: 2, y: 4 });

            assert.strictEqual(lineOne.isEqual(lineTwo), false);
        });
    });
});
