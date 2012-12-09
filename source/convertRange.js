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
		output += getString(range[i]) + ' ';
	}
	return output;


}

/*	returns Fizz/Buzz/num for a given number
	@param num <Number>
	return <String / Number>	
*/

function getString(num){
	
	if(typeof(num) !== 'number'){
		return "ERROR! Expects a number";
	}
	/*
	if(num % 3 == 0 && num % 5 == 0){
		return "FizzBuzz";
	}else if(num % 3 == 0 ){
		return 'Fizz'; 
	}else if(num % 5 == 0){
		return 'Buzz';
	}else{
		return num;
	}
	*/
	/*
		do the above logic with a on liner;
	*/

	return !(num % 3) ? !(num % 5) ? 'FizzBuzz' : 'Fizz' : !(num % 5) ? 'Buzz' : num;


}
