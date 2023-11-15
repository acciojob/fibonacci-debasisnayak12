function fibonacci(num) {
// your code here
  if(num <= 1){
	  return 0;
  }
	if(num === 2){
		return 1;
	}
	let a = 0;
	let b = 1;
	let next = 0;
	for(let i = 2; i < num; i++){
		next = a + b;
		a = b;
		b = next;
	}
	return next;
}

module.exports = fibonacci;
