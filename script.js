$(document).ready(function(){
	//grab the value of break length
	var breakNumber = Number(document.getElementsByClassName('numberBreak')[0].innerHTML);
	//grab the value of session length
	var sessionNumber = Number(document.getElementsByClassName('numberSession')[0].innerHTML);
	console.log('current break #: ' + breakNumber);
	console.log('current session #: ' + sessionNumber);

	// function to increase timer by 1
	function incrementByOne(number){
		return number + 1;
	}
	// function to decrease timer by 1
	function decrementByOne(number){
		return number - 1;
	}
	// function to reset timer back to default
	function resetTimer(){
		breakNumber = 5;
		sessionNumber = 5;
		$('.numberBreak').text(breakNumber);
		$('.numberSession').text(sessionNumber);
	}
	//click handler on break length's add button; increments by 1
	$('.addBreak').on('click',function(){
		var incrementedBreakNumber = incrementByOne(breakNumber);
		breakNumber = incrementedBreakNumber;
		//change current number to new incremented break number
		$('.numberBreak').text(breakNumber);

		console.log('incremented break #: ');
		console.log(breakNumber);
	});
	//click handler on session length's add button; increments by 1
	$('.addSession').on('click',function(){
		var incrementedSessionNumber = incrementByOne(sessionNumber);
		sessionNumber = incrementedSessionNumber;
		//change current number to new incremented session number
		$('.numberSession').text(sessionNumber);

		console.log('incremented session #: ');
		console.log(sessionNumber);
	});

	//click handler on break length's subtract button; decrements by 1
	$('.subtractBreak').on('click',function(){
		if(breakNumber !== 0){
			//prevents break number from decrementing passed 0
			var decrementedBreakNumber = decrementByOne(breakNumber);
			breakNumber = decrementedBreakNumber;
			$('.numberBreak').text(breakNumber);

			console.log('decremented break #: ');
			console.log(breakNumber);
		}
	});
	//click handler on break length's subtract button; decrements by 1
	$('.subtractSession').on('click',function(){
		//prevents session number from decrementing passed 0
		if(sessionNumber !== 0){
			var decrementedSessionNumber = decrementByOne(sessionNumber);
			sessionNumber = decrementedSessionNumber;
			$('.numberSession').text(sessionNumber);

			console.log('decremented session #: ');
			console.log(sessionNumber);
		}
	});

	//reset click handler to set clock back to default settings
	$('#reset').on('click',function(){
		resetTimer();
		console.log('reset to default break #: ' + breakNumber);
		console.log('reset to default session #: ' + sessionNumber);
	});
});