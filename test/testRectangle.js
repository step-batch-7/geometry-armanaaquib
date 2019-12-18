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
});
