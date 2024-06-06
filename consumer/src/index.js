import { test } from 'dep'
// import { foo, bar } from 'nested-dep';
import { foo } from 'nested-dep';

console.log("Hello World!");
console.log(test(1, 2))
console.log(foo())
// console.log(bar())
