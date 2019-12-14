const assert = require("chai").assert;
const Point = require("../src/point.js");

describe("Point", function() {
    describe("#toString()", function() {
        it("should return printable string for point", function() {
            const point = new Point(2, 3);
            assert.deepStrictEqual(point.toString(), "[Point @(2,3)]");
        });
    });
});
