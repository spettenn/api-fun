function Counting() {
	for (let i = 1; i <= 20; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

for (let i = 1; i <= e + 10; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('hello');
	} else if (i % 3 === 0) {
		console.log('world');
	} else if (i % 5 === 0) {
		console.log('hello world');
	} else {
		console.log(i);
	}
}

console.log(`====================`);
console.log(a, b, c, d, e);

console.log(`====================`);
console.clear();
console.log(`
      *
     ***
    *****
   *******
  *********
     ***
MERY CHRISTMAS
`);

Counting();
export default Counting;
