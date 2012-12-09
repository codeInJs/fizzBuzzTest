/* unit test cases for problem-1 */ 


var convertRangeTest = new YAHOO.tool.TestCase({

	name : convertRangeTest,

	testArray : function(){
		var result = convertRange({test: 'return false'});
		YAHOO.util.Assert.areEqual('ERROR! Expects an array', result, "Expects an Array");
	},

	testEmptyArray : function(){
		var result = convertRange([]);
		YAHOO.util.Assert.areEqual('ERROR! Array is Empty', result, "Expects a range");
	},

	testFizzBuzzNum : function(){
		var result = convertRange([10, 11, 12, 13, 14, 15, 16]);
		console.log(result);
		YAHOO.util.Assert.areEqual('Buzz 11 Fizz 13 14 FizzBuzz Bazz ', result, "");
	}
})


var getStringTest = new YAHOO.tool.TestCase({

		name: getStringTest,
	
		testNumber : function(){
			var result = getString('3', 2);	
			YAHOO.util.Assert.areEqual('ERROR! Expects a number', result, "Expects a number");
		},

		testFizzBuzz : function(){
			var result = getString(15, 2);
			YAHOO.util.Assert.areEqual('FizzBuzz', result, "should return 'FizzBuzz'");
		},

		testFizz : function(){
			var result = getString(3, 2);
			YAHOO.util.Assert.areEqual('Fizz', result, "should return 'Fizz'");
		},

		testBuzz : function(){
			var result = getString(5, 2);
			YAHOO.util.Assert.areEqual('Buzz', result, "should return 'Buzz'");
		},

		testFizz_BuzzBazz : function(){
			var result = getString(11, 2);
			YAHOO.util.Assert.areEqual('Bazz', result, "should return 'Bazz'");
		},

		testFizz_BuzzNum : function(){
			var result = getString(11, 1);
			YAHOO.util.Assert.areEqual(11, result, "should return 11");
		},

		testBuzz_FizzBazz : function(){
			var result = getString(7, 2);
			YAHOO.util.Assert.areEqual('Bazz', result, "should return 'Bazz'");
		},

		testFizzBuzzBazz : function(){
			var result = getString(16, 1);
			YAHOO.util.Assert.areEqual('Bazz', result, "should return 'Bazz'");
		},

		testBazzFirstItem : function(){
			var result = getString(16, 0);
			YAHOO.util.Assert.areEqual(16, result, "should return 16");
		},


		testOriginal : function(){
			var result = getString(2, 1);	
			YAHOO.util.Assert.areEqual(2, result, "should return the original num");
		}
		

})	
	
YAHOO.util.Event.onDOMReady(function (){
	//create the logger
	var logger = new YAHOO.tool.TestLogger("testLogger");
	YAHOO.tool.TestRunner.add(convertRangeTest);
	YAHOO.tool.TestRunner.add(getStringTest);
    //run the tests
	YAHOO.tool.TestRunner.run();
});
	

