const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", function() {
    describe("#toString()", function() {
        it("should return printable string for line", function() {
            const expectedValue = "[Line (1,2) to (2,3)]";
            const line = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });

            assert.strictEqual(line.toString(), expectedValue);
        });
    });

    describe("#isEqual()", function() {
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
        it("should return length of line if both ends are same", function() {
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
            const lineTwo = new Line({ x: 5, y: 2 }, { x: -5, y: 2 });

            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), true);
        });

        it("should return false if both lines are horizontal and are on same line", function() {
            const lineOne = new Line({ x: 1, y: 1 }, { x: -1, y: 1 });
            const lineTwo = new Line({ x: 0, y: 1 }, { x: -5, y: 1 });

            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), false);
        });

        it("should return true if both lines are vertical", function() {
            const lineOne = new Line({ x: 1, y: 1 }, { x: 1, y: -1 });
            const lineTwo = new Line({ x: 2, y: 5 }, { x: 2, y: -5 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), true);
        });

        it("should return false if both lines are vertical and are on same line", function() {
            const lineOne = new Line({ x: 1, y: 1 }, { x: 1, y: -1 });
            const lineTwo = new Line({ x: 1, y: 5 }, { x: 1, y: -5 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), false);
        });

        it("should return true if both lines are going up from left to right and are parallel", function() {
            const lineOne = new Line({ x: -2, y: 0 }, { x: 0, y: 2 });
            const lineTwo = new Line({ x: 0, y: -2 }, { x: 2, y: 0 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), true);
        });

        it("should return false if both lines are going up from left to right and are not parallel", function() {
            const lineOne = new Line({ x: -1, y: -1 }, { x: 1, y: 1 });
            const lineTwo = new Line({ x: -5, y: -5 }, { x: 1, y: 2 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), false);
        });

        it("should return true if both lines are going down from left to right and are parallel", function() {
            const lineOne = new Line({ x: 0, y: 1 }, { x: 1, y: 0 });
            const lineTwo = new Line({ x: -1, y: 0 }, { x: 0, y: -1 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), true);
        });

        it("should return false if both lines are going down from left to right and are not parallel", function() {
            const lineOne = new Line({ x: 1, y: 1 }, { x: 1, y: -1 });
            const lineTwo = new Line({ x: -5, y: 1 }, { x: 2, y: -2 });
            assert.deepStrictEqual(lineOne.isParallelTo(lineTwo), false);
        });
    });

    describe("#findX()", function() {
        it("should give NaN if y is out of range", function() {
            const line = new Line({ x: 5, y: 1 }, { x: -1, y: 5 });
            assert.deepStrictEqual(line.findX(-3), NaN);
        });

        it("should give x value for given y for horizontal line ", function() {
            const line = new Line({ x: 5, y: 1 }, { x: -1, y: 1 });

            assert.deepStrictEqual(line.findX(1), 5);
        });

        it("should give x value for given y for vertical line", function() {
            const line = new Line({ x: 1, y: 1 }, { x: 1, y: 7 });

            assert.deepStrictEqual(line.findX(5), 1);
        });

        it("should give x value for given y for line is going up from left to right", function() {
            const line = new Line({ x: -1, y: -1 }, { x: 2, y: 5 });

            assert.deepStrictEqual(line.findX(1), 0);
        });

        it("should give x value for given y for line is going down from left to right", function() {
            const line = new Line({ x: -1, y: 1 }, { x: 2, y: -5 });

            assert.deepStrictEqual(line.findX(-1), 0);
        });
    });

    describe("#findY()", function() {
        it("should give NaN if x is out of range", function() {
            const line = new Line({ x: 5, y: 1 }, { x: -1, y: 5 });
            assert.deepStrictEqual(line.findY(7), NaN);
        });

        it("should give y value for given x for horizontal line ", function() {
            const line = new Line({ x: 5, y: 1 }, { x: -1, y: 1 });

            assert.deepStrictEqual(line.findY(1), 1);
        });

        it("should give y value for given x for vertical line", function() {
            const line = new Line({ x: 1, y: 2 }, { x: 1, y: 7 });

            assert.deepStrictEqual(line.findY(1), 2);
        });

        it("should give y value for given x for line is going up from left to right", function() {
            const line = new Line({ x: -1, y: -1 }, { x: 2, y: 5 });

            assert.deepStrictEqual(line.findY(1), 3);
        });

        it("should give y value for given x for line is going down from left to right", function() {
            const line = new Line({ x: -1, y: 1 }, { x: 3, y: -5 });

            assert.deepStrictEqual(line.findY(1), -2);
        });
    });

    describe("#split()", function() {
        it("should return two same lines if length of line is 0", function() {
            const line = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });

            const firstHalf = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });
            const secondHalf = new Line({ x: 1, y: 1 }, { x: 1, y: 1 });

            assert.deepStrictEqual(line.split(), [firstHalf, secondHalf]);
        });

        it("should return two half lines if line is horizontal", function() {
            const line = new Line({ x: 5, y: 1 }, { x: -1, y: 1 });

            const firstHalf = new Line({ x: 5, y: 1 }, { x: 2, y: 1 });
            const secondHalf = new Line({ x: 2, y: 1 }, { x: -1, y: 1 });

            assert.deepStrictEqual(line.split(), [firstHalf, secondHalf]);
        });

        it("should return two half lines if line is vertical", function() {
            const line = new Line({ x: 1, y: 2 }, { x: 1, y: 7 });

            const firstHalf = new Line({ x: 1, y: 2 }, { x: 1, y: 4.5 });
            const secondHalf = new Line({ x: 1, y: 4.5 }, { x: 1, y: 7 });

            assert.deepStrictEqual(line.split(), [firstHalf, secondHalf]);
        });

        it("should return two half lines if line is going up from left to right", function() {
            const line = new Line({ x: -1, y: -1 }, { x: 2, y: 5 });

            const firstHalf = new Line({ x: -1, y: -1 }, { x: 0.5, y: 2 });
            const secondHalf = new Line({ x: 0.5, y: 2 }, { x: 2, y: 5 });

            assert.deepStrictEqual(line.split(), [firstHalf, secondHalf]);
        });

        it("should return two half lines if line is going down from left to right", function() {
            const line = new Line({ x: -1, y: 1 }, { x: 3, y: -5 });

            const firstHalf = new Line({ x: -1, y: 1 }, { x: 1, y: -2 });
            const secondHalf = new Line({ x: 1, y: -2 }, { x: 3, y: -5 });

            assert.deepStrictEqual(line.split(), [firstHalf, secondHalf]);
        });
    });

    describe("#hasPoint()", function() {
        it("should return false if point is not passed", function() {
            const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
            const other = { x: 2, y: 2 };

            assert.strictEqual(line.hasPoint(other), false);
        });

        it("should return true if line is horizontal and point belongs to the line", function() {
            const line = new Line({ x: 5, y: 1 }, { x: -1, y: 1 });
            const point = new Point(4, 1);

            assert.strictEqual(line.hasPoint(point), true);
        });

        it("should return false if line is horizontal and point doesn't belong to the line", function() {
            const line = new Line({ x: 5, y: 1 }, { x: -1, y: 1 });
            const point = new Point(6, 1);

            assert.strictEqual(line.hasPoint(point), false);
        });

        it("should return true if line is vertical and point belongs to the line", function() {
            const line = new Line({ x: 1, y: 2 }, { x: 1, y: 7 });
            const point = new Point(1, 3);

            assert.strictEqual(line.hasPoint(point), true);
        });

        it("should return false if line is vertical and point doesn't belong to the line", function() {
            const line = new Line({ x: 1, y: 2 }, { x: 1, y: 7 });
            const point = new Point(1, 1);

            assert.strictEqual(line.hasPoint(point), false);
        });

        it("should return true if line is line is going up from left to right and point belongs to the line", function() {
            const line = new Line({ x: -1, y: -1 }, { x: 2, y: 2 });
            const point = new Point(1, 1);

            assert.strictEqual(line.hasPoint(point), true);
        });

        it("should return false if line is line is going up from left to right and point doesn't belong to the line", function() {
            const line = new Line({ x: -1, y: -1 }, { x: 2, y: 5 });
            const point = new Point(-2, 1);

            assert.strictEqual(line.hasPoint(point), false);
        });

        it("should return true if line is line is going down from left to right and point belongs to the line", function() {
            const line = new Line({ x: -1, y: 1 }, { x: 2, y: -2 });
            const point = new Point(1, -1);

            assert.strictEqual(line.hasPoint(point), true);
        });

        it("should return false if line is line is going down from left to right and point doesn't belong to the line", function() {
            const line = new Line({ x: -1, y: 1 }, { x: 3, y: -5 });
            const point = new Point(-2, 1);

            assert.strictEqual(line.hasPoint(point), false);
        });
    });
});
