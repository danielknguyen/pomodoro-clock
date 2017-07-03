$(document).ready(function(){
	//grab the value of break length
	var breakNumber = Number(document.getElementsByClassName('numberBreak')[0].innerHTML);

	//grab the value of session length
	var sessionNumber = Number(document.getElementsByClassName('numberSession')[0].innerHTML);

	var totalSecondsRemaining = sessionNumber * 60;

	var isClockPaused = true;
	
	displayNewValues();

	function pad(num, size) {
	    var s = num+"";
	    while (s.length < size) s = "0" + s;
	    return s;
	}

	function displayNewValues () {
		var minutes = Math.floor(totalSecondsRemaining / 60);
		var seconds = totalSecondsRemaining % 60;
		$('.numberBreak').text(breakNumber);
		$('.numberSession').text(sessionNumber);
		$('#countDown').text(pad(minutes, 2) + ':' + pad(seconds, 2));
	}

	// function to reset timer back to default
	function resetTimer(){
		breakNumber = 5;
		sessionNumber = 5;
		displayNewValues();
	}
	//click handler on break length's add button; increments by 1
	$('.addBreak').on('click',function(){
		breakNumber = breakNumber + 1;	
		displayNewValues();
	});
	//click handler on session length's add button; increments by 1
	$('.addSession').on('click',function(){
		sessionNumber += 1;
		totalSecondsRemaining = sessionNumber * 60;
		displayNewValues()
	});

	//click handler on break length's subtract button; decrements by 1
	$('.subtractBreak').on('click',function(){
		if(breakNumber == 1){
			return;
		}
		breakNumber = breakNumber - 1;
		displayNewValues();
	});
	//click handler on break length's subtract button; decrements by 1
	$('.subtractSession').on('click',function(){
		if(sessionNumber == 1){
			return;
		}
		sessionNumber -= 1;
		totalSecondsRemaining = sessionNumber * 60;
		displayNewValues()
	});

	//reset click handler to set clock back to default settings
	$('#reset').on('click',resetTimer);

	var intervalId;
	$('#clock').on('click', function () {

		if(isClockPaused) {
			isClockPaused = false;
			intervalId = setInterval(function () {
				totalSecondsRemaining -= 1;
				displayNewValues();
			}, 1000);
		} else {
			// clear interval by id
			clearInterval(intervalId);
			// set isClockedPaused to true
			isClockPaused = true;
		}
	});
});