var test = require('tape');

test('timing test', function (t) {
    t.equal(typeof Date.now, 'function', 'ok');

    t.end()
}); 