var test = require('tape');

test('timing test', function (t) {
    t.equal([12, 54, 18, 130, 44].every(elem => elem >= 10), true, 'ok');

    t.end()
}); 