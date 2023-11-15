function fibonacci(num) {
// your code here
	  let a = 0;
	  let b = 1;
	  let next;
	  let i = 2;
	if(num === 0 || num === 1){
		return a;
	}
	while(i <= num){
		next = a + b;
		a = b;
		b = next;
		i++;
	}
	return b;
}

module.exports = fibonacci;
