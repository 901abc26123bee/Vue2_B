// import {} 中定義的變量
import {flag, sum} from "./aaa.js";
if(flag){
	console.log('I am mmm.js');
	console.log('sum : '+sum(8, 7));
}

// 直接導入 export 中定義的變量
import {num1, height} from "./aaa.js";
console.log('num1: ' + num1 +', height : '+ height);

// import function
import {mul} from "./aaa.js";
console.log('mul : '+ mul(7,5));

import {Person} from "./aaa.js";
const p = new Person();
p.run();

// import defsult
import book from "./aaa.js";
console.log(book)

// import all
import * as aaa from "./aaa.js";
console.log(aaa.flag);
console.log(aaa.height);