var test = require('tape');

test('timing test 3', function (t) {
    const foo = 900;
    t.equal(foo, (foo - 0), 'should be equal to ok')

    t.end()
}); 