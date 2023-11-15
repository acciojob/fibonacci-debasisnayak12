function fibonacci(num) {
// your code here
	if(num === 0 || num === 1){
		return num;
	}
	  let a = 0;
	  let b = 1;
	  let next;
	for (let i = 2; i <= num; i++){
		next = a + b;
		a = b;
		b = next;
	}
	return b;
}

module.exports = fibonacci;
