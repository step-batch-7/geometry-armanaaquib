const assert = require("chai").assert;
const Point = require("../src/point.js");

describe("Point", function() {
    describe("#toString()", function() {
        it("should return printable string for point", function() {
            const point = new Point(2, 3);
            assert.deepStrictEqual(point.toString(), "[Point @(2,3)]");
        });
    });

    describe("#visit()", function() {
        it("should work for add function", function() {
            const point = new Point(2, 3);
            assert.strictEqual(
                point.visit((x, y) => x + y),
                5
            );
        });

        it("should work for multiply function", function() {
            const point = new Point(2, 3);
            assert.strictEqual(
                point.visit((x, y) => x * y),
                6
            );
        });
    });

    describe("#clone()", function() {
        it("should return object with same co-ordinates", function() {
            const point = new Point(2, 3);
            const newPoint = point.clone();
            assert.notStrictEqual(point, newPoint);
            assert.deepStrictEqual(point, newPoint);
        });
    });

    describe("#isEqualTo()", function() {
        it("should return true if both are points and co-ordinates are same", function() {
            const pointOne = new Point(2, 3);
            const pointTwo = new Point(2, 3);

            assert.strictEqual(pointOne.isEqualTo(pointTwo), true);
        });

        it("should return false if both are points and co-ordinates are not same", function() {
            const pointOne = new Point(1, 3);
            const pointTwo = new Point(2, 5);

            assert.strictEqual(pointOne.isEqualTo({ pointTwo }), false);
        });

        it("should return false if otherOne is not a point and co-ordinates are equal", function() {
            const pointOne = new Point(1, 2);
            const something = { x: 1, y: 2 };

            assert.strictEqual(pointOne.isEqualTo(something), false);
        });

        it("should return false if otherOne is not a point and co-ordinates are not equal", function() {
            const pointOne = new Point(2, 3);
            const something = { x: 1, y: 5 };

            assert.strictEqual(pointOne.isEqualTo(something), false);
        });
    });

    describe("#findDistanceTo()", function() {
        it("should return NaN if other is not point", function() {
            const point = new Point(1, 1);
            const other = { x: 1, x: 2 };
            assert.deepStrictEqual(point.findDistanceTo(other), NaN);
        });

        it("should return 0 distance between points if both points are same", function() {
            const pointOne = new Point(0, 0);
            const pointTwo = new Point(0, 0);

            assert.strictEqual(pointOne.findDistanceTo(pointTwo), 0);
        });

        it("should work for integer distance between points", function() {
            const pointOne = new Point(3, 9);
            const pointTwo = new Point(6, 5);

            assert.strictEqual(pointOne.findDistanceTo(pointTwo), 5);
        });

        it("should work for decimal distance between points", function() {
            const pointOne = new Point(1, 1);
            const pointTwo = new Point(2, 2);

            assert.approximately(pointOne.findDistanceTo(pointTwo), 1.414, 0.001);
        });
    });
});
