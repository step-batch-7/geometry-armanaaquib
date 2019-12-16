const { assert } = require("chai");
const { Circle } = require("../src/circle");
const { Point } = require("../src/point");

describe("Circle", function() {
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
});
