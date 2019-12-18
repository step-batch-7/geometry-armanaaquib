const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", function() {
    it("should not change vertices", function() {
        const rectangle = new Rectangle(new Point(1, 1), new Point(5, 4));
        rectangle.vertexA = new Point(2, 2);
        rectangle.vertexC = new Point(6, 5);

        assert.deepStrictEqual(rectangle, new Rectangle(new Point(1, 1), new Point(5, 4)));
    });

    describe("#toString()", function() {
        it("should return printable string for rectangle", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(2, 3));

            assert.deepStrictEqual(rectangle.toString(), "[Rectangle (1,1) to (2,3)]");
        });
    });

    describe("#area", function() {
        it("should return area 0 if diagonal is parallel to x-axis", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(5, 1));

            assert.strictEqual(rectangle.area, 0);
        });

        it("should return area 0 if diagonal is parallel to y-axis", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(1, 5));

            assert.strictEqual(rectangle.area, 0);
        });

        it("should return area if diagonal is incline", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(5, 5));

            assert.strictEqual(rectangle.area, 16);
        });
    });

    describe("#perimeter", function() {
        it("should return perimeter if diagonal is parallel to x-axis", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(5, 1));

            assert.strictEqual(rectangle.perimeter, 8);
        });

        it("should return perimeter if diagonal is parallel to y-axis", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(1, 5));

            assert.strictEqual(rectangle.perimeter, 8);
        });

        it("should return perimeter if diagonal is incline", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(4, 5));

            assert.strictEqual(rectangle.perimeter, 14);
        });
    });

    describe("#isEqualTo()", function() {
        it("should return false if Rectangle is not passed", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(4, 5));
            const other = { vertexA: new Point(1, 1), vertexC: new Point(4, 5) };

            assert.deepStrictEqual(rectangle.isEqualTo(other), false);
        });

        it("should return true if diagonal is same", function() {
            const rectangleOne = new Rectangle(new Point(1, 1), new Point(4, 5));
            const rectangleTwo = new Rectangle(new Point(1, 1), new Point(4, 5));

            assert.deepStrictEqual(rectangleOne.isEqualTo(rectangleTwo), true);
        });

        it("should return true if diagonal's points are alternate same", function() {
            const rectangleOne = new Rectangle(new Point(1, 1), new Point(4, 5));
            const rectangleTwo = new Rectangle(new Point(4, 5), new Point(1, 1));

            assert.deepStrictEqual(rectangleOne.isEqualTo(rectangleTwo), true);
        });

        it("should return true if second diagonal is given", function() {
            const rectangleOne = new Rectangle(new Point(1, 1), new Point(5, 5));
            const rectangleTwo = new Rectangle(new Point(1, 5), new Point(5, 1));

            assert.deepStrictEqual(rectangleOne.isEqualTo(rectangleTwo), true);
        });

        it("should return false if diagonal is not same", function() {
            const rectangleOne = new Rectangle(new Point(1, 1), new Point(4, 5));
            const rectangleTwo = new Rectangle(new Point(3, 1), new Point(1, 5));

            assert.deepStrictEqual(rectangleOne.isEqualTo(rectangleTwo), false);
        });
    });
});
