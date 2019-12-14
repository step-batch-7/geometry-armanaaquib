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
});
