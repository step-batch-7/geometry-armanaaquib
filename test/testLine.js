const assert = require("assert");
const Line = require("../src/line");

describe("line", function() {
    describe("toString", function() {
        it("should return printable string for line", function() {
            const expectedValue = "Line start(1,2),end(2,3)";
            const actualValue = new Line({ x: 1, y: 2 }, { x: 2, y: 3 }).toString();

            assert.strictEqual(actualValue, expectedValue);
        });
    });

    describe("isEqual", function() {
        it("should return true if both are lines and points are same", function() {
            const lineOne = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
            const lineTwo = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });

            assert.strictEqual(lineOne.isEqualTo(lineTwo), true);
        });

        it("should return false if both are lines and points are not same", function() {
            const lineOne = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
            const lineTwo = new Line({ x: 2, y: 2 }, { x: 2, y: 4 });

            assert.strictEqual(lineOne.isEqualTo({ lineTwo }), false);
        });

        it("should return false if otherOne is not a line and points are equal", function() {
            const lineOne = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
            const something = { start: { x: 1, y: 2 }, end: { x: 2, y: 3 } };

            assert.strictEqual(lineOne.isEqualTo(something), false);
        });

        it("should return false if otherOne is not a line and points are not equal", function() {
            const lineOne = new Line({ x: 1, y: 2 }, { x: 4, y: 3 });
            const something = { start: { x: 2, y: 2 }, end: { x: 2, y: 3 } };

            assert.strictEqual(lineOne.isEqualTo(something), false);
        });

        it("should return false if otherOne is not a line", function() {
            const lineOne = new Line({ x: 1, y: 2 }, { x: 4, y: 3 });
            const something = {};

            assert.strictEqual(lineOne.isEqualTo(something), false);
        });
    });
});
