describe("pow", function () {

    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} в степени 3 будет ${expected}`, function () {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }
    it("для отрицательных n возвращает NaN", function () {
        assert.isNaN(pow(2, -1));
    });

    it.only("для дробных n возвращает NaN", function () {
        assert.isNaN(pow(6, 1.5));
    });
    it("1 в степени 4 вернет 1 ", function () {
        assert.equal(pow(1, 4), 1);
    });
});