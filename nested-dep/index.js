const foo = () => 'foo';

module.exports.foo = foo;
module.exports.bar = require('./double-nested').bar;
