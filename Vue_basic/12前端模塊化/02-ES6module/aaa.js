var name = 'atom'
var age = 22
var flag = true

function sum(num1, num2){
	return num1+num2;
}

if(flag){
	console.log(sum(20, 30));
}
// export method 1
export{
	flag, sum
}

// export method 2
export var num1 = 1000
export var height = 180

// export function/ class
export function mul(num1, num2){
	return num2*num2;
}

export class Person{
	run(){
		console.log('running');
	}
}

// export default
// one module only can has one 
const bookILike = 'The sound of color'
export default bookILike