// 1. commonjs
const {add, mul} = require('./js/mathUtils.js')

console.log(add(5, 6));
console.log(mul(7, 8));

// 2. es6
import {name, age, height} from "./js/info";
console.log(name);
console.log(age);
console.log(height);

// 3. depend normal.css
require('./css/normal.css')

// 4. depend special.less
require('./css/special.less')
document.writeln('<h2>webpack learning</h2>')