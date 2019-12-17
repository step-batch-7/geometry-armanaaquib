const assert = require("assert");
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");
const Line = require("../src/line");

describe("Rectangle", function() {
    it("should not change vertices", function() {
        const rectangle = new Rectangle(new Point(1, 1), new Point(5, 4));
        rectangle.diagonal = new Line(new Point(2, 2), new Point(6, 5));
        assert.deepStrictEqual(rectangle, new Rectangle(new Point(1, 1), new Point(5, 4)));
    });

    describe("#toString()", function() {
        it("should return printable string for rectangle", function() {
            const rectangle = new Rectangle(new Point(1, 1), new Point(2, 3));
            assert.deepStrictEqual(rectangle.toString(), "[Rectangle (1,1) to (2,3)]");
        });
    });
});
