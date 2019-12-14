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
});
