function fibonacci(num) {
// your code here
	  let a = 0;
	  let b = 1;
	  let next;
	  let i = 1;
	if(num === 0){
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
