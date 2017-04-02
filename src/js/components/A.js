const B = require('./B')
const foo = B.foo
B.foo = function() {
  console.log('intercepted!')
  foo()
}