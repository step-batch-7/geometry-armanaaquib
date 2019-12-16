const { assert } = require("chai");
const { Circle } = require("../src/circle");

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
});
