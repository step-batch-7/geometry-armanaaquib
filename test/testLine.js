const assert = require("chai").assert;
const Line = require("../src/line");

describe("Line", function() {
    describe("#toString()", function() {
        it("should return printable string for line", function() {
            const expectedValue = "Line start(1,2),end(2,3)";
            const actualValue = new Line({ x: 1, y: 2 }, { x: 2, y: 3 }).toString();

            assert.strictEqual(actualValue, expectedValue);
        });
    });

    describe("#isEqual()", function() {
        it("should return false if otherOne is not a line", function() {
            const lineOne = new Line({ x: 1, y: 2 }, { x: 4, y: 3 });
            const something = {};

            assert.strictEqual(lineOne.isEqualTo(something), false);
        });

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
    });

    describe("#length", function() {
        it("should return length of line if both ends are in center", function() {
            const line = new Line({ x: 0, y: 0 }, { x: 0, y: 0 });
            assert.strictEqual(line.length, 0);
        });

        it("should return length of line if line is on x-axis", function() {
            const line = new Line({ x: 1, y: 0 }, { x: -1, y: 0 });
            assert.strictEqual(line.length, 2);
        });

        it("should return length of line if line is on y-axis", function() {
            const line = new Line({ x: 0, y: -1 }, { x: 0, y: 1 });
            assert.strictEqual(line.length, 2);
        });

        it("should return length of line if line is horizontal", function() {
            const line = new Line({ x: 1, y: 1 }, { x: -1, y: 1 });
            assert.strictEqual(line.length, 2);
        });

        it("should return length of line if line is vertical", function() {
            const line = new Line({ x: 1, y: 1 }, { x: 1, y: 2 });
            assert.deepStrictEqual(line.length, 1);
        });

        it("should return length of line if line is going up from left to right", function() {
            const line = new Line({ x: -1, y: -1 }, { x: 1, y: 1 });
            assert.approximately(line.length, 2.828, 0.001);
        });

        it("should return length of line if line is going down from left to right", function() {
            const line = new Line({ x: -1, y: 1 }, { x: 1, y: -1 });
            assert.approximately(line.length, 2.828, 0.001);
        });
    });

    describe("#slope", function() {
        it("should return 0 if line is horizontal", function() {
            const line = new Line({ x: 1, y: 1 }, { x: -1, y: 1 });
            assert.deepStrictEqual(line.slope, -0);
        });

        it("should return Infinity if line is vertical", function() {
            const line = new Line({ x: 1, y: 1 }, { x: 1, y: 2 });
            assert.deepStrictEqual(line.slope, Infinity);
        });

        it("should return positive slope if line is going up from left to right", function() {
            const line = new Line({ x: -1, y: -1 }, { x: 1, y: 1 });
            assert.deepStrictEqual(line.slope, 1);
        });

        it("should return negative slope if line is going down from left to right", function() {
            const line = new Line({ x: -1, y: 1 }, { x: 1, y: -1 });
            assert.deepStrictEqual(line.slope, -1);
        });
    });

    describe("#isParallelTo()", function() {
        it("should return false if other one is not a line", function() {
            const lineOne = new Line({ x: 1, y: 1 }, { x: -1, y: 1 });
            const other = { start: { x: 5, y: 1 }, end: { x: -5, y: 1 } };

            assert.deepStrictEqual(lineOne.isParallelTo(other), false);
        });

        it("should return true if both lines are horizontal", function() {
            const lineOne = new Line({ x: 1, y: 1 }, { x: -1, y: 1 });
            const lineTwo = new Line({ x: 5, y: 1 }, { x: -5, y: 1 });

            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), true);
        });

        it("should return true if both lines are vertical", function() {
            const lineOne = new Line({ x: 1, y: 1 }, { x: 1, y: -1 });
            const lineTwo = new Line({ x: 1, y: 5 }, { x: 1, y: -5 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), true);
        });

        it("should return true if both lines are going up from left to right and are parallel", function() {
            const lineOne = new Line({ x: -1, y: -1 }, { x: 1, y: 1 });
            const lineTwo = new Line({ x: -5, y: -5 }, { x: 5, y: 5 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), true);
        });

        it("should return false if both lines are going up from left to right and are not parallel", function() {
            const lineOne = new Line({ x: -1, y: -1 }, { x: 1, y: 1 });
            const lineTwo = new Line({ x: -5, y: -5 }, { x: 1, y: 2 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), false);
        });

        it("should return true if both lines are going down from left to right and are parallel", function() {
            const lineOne = new Line({ x: -1, y: 1 }, { x: 1, y: -1 });
            const lineTwo = new Line({ x: -5, y: 5 }, { x: 5, y: -5 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), true);
        });

        it("should return false if both lines are going down from left to right and are not parallel", function() {
            const lineOne = new Line({ x: -1, y: 1 }, { x: 1, y: -1 });
            const lineTwo = new Line({ x: -5, y: 5 }, { x: 1, y: -2 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), false);
        });
    });
});
