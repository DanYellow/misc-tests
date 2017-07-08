var test = require('tape');

test('timing test 3', function (t) {
    const foo = 90;
    t.equal(foo, (foo - 3), 'should be equal to ok')

    t.end()
}); 