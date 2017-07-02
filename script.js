$(document).ready(function(){
	//grab the value of break length
	var breakNumber = document.getElementsByClassName('numberBreak')[0].innerHTML;
	//grab the value of session length
	var sessionNumber = document.getElementsByClassName('numberSession')[0].innerHTML;
	//logging break/session number to see what those values are currently
	//console.log(breakNumber);
	//console.log(sessionNumber);
	console.log('break Number: ' + breakNumber);
	console.log('session number: ' + sessionNumber);

	// function to increase timer by 1
	function incrementByOne(number){
		return Number(number) + 1;
	}
	// function to decrementByOne
	function decrementByOne(number){
		return Number(number) - 1;
	}

	//click handler on break length's add button; increments by 1
	$('.addBreak').on('click',function(){
		// var addBreak = document.getElementsByClassName('addBreak')[0].innerHTML;
		var incrementedBreakNumber = incrementByOne(breakNumber);
		breakNumber = incrementedBreakNumber;
		//change current number to new incremented break number
		$('.numberBreak').text(breakNumber);

		console.log('incremented break #: ' + incrementedBreakNumber);
	});
	//click handler on session length's add button; increments by 1
	$('.addSession').on('click',function(){
		// var addSession = document.getElementsByClassName('addSession')[0].innerHTML;
		var incrementedSessionNumber = incrementByOne(sessionNumber);
		sessionNumber = incrementedSessionNumber;
		//change current number to new incremented session number
		$('.numberSession').text(sessionNumber);

		console.log('incremented session #: ' + incrementedSessionNumber);
	});

	//click handler on break length's subtract button; decrements by 1
	$('.subtractBreak').on('click',function(){
		// var subtractBreak = document.getElementsByClassName('subtractBreak')[0].innerHTML;
		if(breakNumber !== 0){
			var decrementedBreakNumber = decrementByOne(breakNumber);
			breakNumber = decrementedBreakNumber;
			$('.numberBreak').text(breakNumber);

			console.log('decremented break #: ' + decrementedBreakNumber);
		}
	});
	//click handler on break length's subtract button; decrements by 1
	$('.subtractSession').on('click',function(){
		// var subtractBreak = document.getElementsByClassName('subtractBreak')[0].innerHTML;
		if(sessionNumber !== 0){
			var decrementedSessionNumber = decrementByOne(sessionNumber);
			sessionNumber = decrementedSessionNumber;
			$('.numberSession').text(sessionNumber);

			console.log('decremented session #: ' + decrementedSessionNumber);
		}
	});
});