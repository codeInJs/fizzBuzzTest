/* convert a range to strings 'Fizz', 'Buzz'
	rule 1 : if number divisible by 3 -> output 'Fizz'
	rule 2 : if number divisible by 5 -> ouput 'Buzz'
	rule 3 : if number divisible by both 3 and 5 -> output 'FizzBuzz'
*/

/*
	convert a range to 'fizz/buzz/number' as per the abouve rules
	@param range<Array>
	returns <String>
*/

function convertRange(range){
	// check for array
	if(Object.prototype.toString.call( range ) !== '[object Array]'){
		return "ERROR! Expects an array";
	}

	if(range.length <= 0){
		return "ERROR! Array is Empty";
	}

	var len = range.length,
	    output = '';
	for(var i = 0; i < len; i++){
		output += getString(range[i], i) + ' ';
	}
	return output;


}

/*	returns Fizz/Buzz/num for a given number
	@param num <Number>
	return <String / Number>	
*/

function getString(num, index){
	
	if(typeof(num) !== 'number'){
		return "ERROR! Expects a number";
	}

	/*
		Possible 'Bazz' numbers
		n - 1 % 3 == 0  and n - 2 % 5 == 0 // Fizz Buzz Bazz
		n - 1 % 5 == 0 and n - 2 % 3 == 0 // Buzz Fizz Bazz
		n - 1 % 15 == 0 // FizzBuzz Bazz - A number is divisible by both 3 and 5, when they are multiples of 15.
	*/

	var n1 = num - 1;
	var n2 = num - 2;

	if((index >= 2) && ((n1 % 5 == 0 && n2 % 3 == 0) || (n1 % 3 == 0 && n2 % 5 == 0)) || (index >= 1) && (n1 % 15 == 0)){
		return 'Bazz';
	}

	return !(num % 3) ? !(num % 5) ? 'FizzBuzz' : 'Fizz' : !(num % 5) ? 'Buzz' : num;

}
