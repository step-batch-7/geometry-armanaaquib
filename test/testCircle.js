const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", function() {
    it("should not change center and radius", function() {
        const circle = new Circle(new Point(1, 1), 5);
        circle.center = new Point(1, 2);
        circle.radius = 10;

        assert.deepStrictEqual(circle, new Circle(new Point(1, 1), 5));
    });

    describe("#toString()", function() {
        it("should return printable String for Circle", function() {
            const circle = new Circle({ x: 1, y: 2 }, 5);
            assert.deepStrictEqual(circle.toString(), "[Circle @(1,2) radius 5]");
        });
    });

    describe("#isEqualTo()", function() {
        it("should return false if circle is not passed", function() {
            const circle = new Circle({ x: 1, y: 2 }, 5);
            const other = { center: { x: 1, y: 2 }, radius: 5 };

            assert.deepStrictEqual(circle.isEqualTo(other), false);
        });

        it("should return true if centers and radiuses both are same", function() {
            const circleOne = new Circle({ x: 1, y: 2 }, 5);
            const circleTwo = new Circle({ x: 1, y: 2 }, 5);

            assert.deepStrictEqual(circleOne.isEqualTo(circleTwo), true);
        });

        it("should return false if centers and radiuses both are not same", function() {
            const circleOne = new Circle({ x: 1, y: 2 }, 5);
            const circleTwo = new Circle({ x: 2, y: 4 }, 4);

            assert.deepStrictEqual(circleOne.isEqualTo(circleTwo), false);
        });

        it("should return false if centers are same and radius are not same", function() {
            const circleOne = new Circle({ x: 1, y: 2 }, 5);
            const circleTwo = new Circle({ x: 1, y: 2 }, 4);

            assert.deepStrictEqual(circleOne.isEqualTo(circleTwo), false);
        });

        it("should return false if centers are not same and radius are same", function() {
            const circleOne = new Circle({ x: 1, y: 2 }, 5);
            const circleTwo = new Circle({ x: 4, y: 2 }, 5);

            assert.deepStrictEqual(circleOne.isEqualTo(circleTwo), false);
        });
    });

    describe("#area", function() {
        it("should return 0 if radius of circle is 0", function() {
            const circle = new Circle(new Point(1, 1), 0);
            assert.deepStrictEqual(circle.area, 0);
        });

        it("should return positive area if radius of circle is positive integer", function() {
            const circle = new Circle(new Point(1, 1), 2);
            assert.approximately(circle.area, 12.56, 0.01);
        });
    });

    describe("#perimeter", function() {
        it("should return 0 if radius of circle is 0", function() {
            const circle = new Circle(new Point(1, 1), 0);
            assert.deepStrictEqual(circle.perimeter, 0);
        });

        it("should return positive area if radius of circle is positive integer", function() {
            const circle = new Circle(new Point(1, 1), 1);
            assert.approximately(circle.perimeter, 6.28, 0.01);
        });
    });

    describe("#hasPoint()", function() {
        it("should return false if Point is not passed", function() {
            const circle = new Circle(new Point(1, 1), 5);
            const other = { x: 1, x: 6 };
            assert.deepStrictEqual(circle.hasPoint(other), false);
        });

        it("should return true if Point is on circumference of the circle", function() {
            const circle = new Circle(new Point(1, 1), 5);
            const point = new Point(1, 6);
            assert.deepStrictEqual(circle.hasPoint(point), true);
        });

        it("should return false if Point is inside of the circle", function() {
            const circle = new Circle(new Point(1, 1), 5);
            const point = new Point(1, 3);
            assert.deepStrictEqual(circle.hasPoint(point), false);
        });

        it("should return false if Point is outside of the circle", function() {
            const circle = new Circle(new Point(1, 1), 5);
            const point = new Point(-7, 1);
            assert.deepStrictEqual(circle.hasPoint(point), false);
        });
    });

    describe("#covers()", function() {
        it("should return false if point is not passed", function() {
            const circle = new Circle(new Point(1, 1), 5);
            const other = { x: 1, y: 2 };

            assert.deepStrictEqual(circle.covers(other), false);
        });

        it("should return false if point is outside the circle", function() {
            const circle = new Circle(new Point(1, 1), 5);
            const other = { x: 1, y: 7 };

            assert.deepStrictEqual(circle.covers(other), false);
        });

        it("should return true if point is on the circumference", function() {
            const circle = new Circle(new Point(1, 1), 5);
            const point = new Point(1, 6);

            assert.deepStrictEqual(circle.covers(point), true);
        });

        it("should return true if point is inside the circle", function() {
            const circle = new Circle(new Point(1, 1), 5);
            const point = new Point(1, 2);

            assert.deepStrictEqual(circle.covers(point), true);
        });
    });

    describe("#moveTo()", function() {
        it("should return new Circle with new center", function() {
            const circle = new Circle(new Point(1, 1), 5);

            assert.deepStrictEqual(circle.moveTo(new Point(2, 2)), new Circle(new Point(2, 2), 5));
        });
    });
});
