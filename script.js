$(document).ready(function(){
	//grab the value of break length
	var breakNumber = Number(document.getElementsByClassName('numberBreak')[0].innerHTML);
	//grab the value of session length
	var sessionNumber = Number(document.getElementsByClassName('numberSession')[0].innerHTML);
	//converts total session number to seconds
	totalSecondsRemaining = sessionNumber * 60;
	//an off/on switch for the countdown
	var isClockPaused = true;
	//declaring identifier to assign current seconds remaining to
	var intervalId;
	//an off/on switch for session/break 
	var sessionToggle = true;
	
	//adds a zero before a number if number is a single digit
	function pad(num, size){
	    var s = num+"";
	    while (s.length < size) s = "0" + s;
	    return s;
	}
	displayNewValues();
	//displays new updated values for break/session length and countdown
	function displayNewValues(){
		var hours = Math.floor(totalSecondsRemaining / 3600);
		var minutes = Math.floor(totalSecondsRemaining % 3600 / 60);
		var seconds = Math.floor(totalSecondsRemaining % 3600 % 60);
		$('.numberBreak').text(breakNumber);
		$('.numberSession').text(sessionNumber);
		$('#countDown').text(pad(hours,2) + ':' + pad(minutes,2) + ':' + pad(seconds, 2));
	}
	//run break timer
	function startBreak(){
		totalSecondsRemaining = breakNumber * 60;
		$('#description').text('Break');
		$('#countDown').trigger('click');
		displayNewValues();
	}
	//run session timer
	function startSession(){
		totalSecondsRemaining = sessionNumber * 60;
		$('#description').text('Session');
		$('#countDown').trigger('click');
		displayNewValues();
	}
	// function to reset timer back to default
	function resetTimer(){
		breakNumber = 5;
		sessionNumber = 25;
		totalSecondsRemaining = sessionNumber * 60;
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
	$('#reset').on('click',function(){
		clearInterval(intervalId);
		isClockPaused = true;
		resetTimer();
	});

	$('#countDown').on('click',function(){
		//when clock is on decrement total seconds by 1 and assign that value to interval id
		if(isClockPaused){
				isClockPaused = false;
				intervalId = setInterval(function(){
					totalSecondsRemaining -= 1;
					if (totalSecondsRemaining === 0){
						clearInterval(intervalId);
						if(sessionToggle){
							sessionToggle = false;
							isClockPaused = true;
							startBreak();
						} else {
							sessionToggle = true;
							isClockPaused = true;
							startSession();
						}
					}
					displayNewValues();
				}, 1000);
		} else {
			// clear interval by id; stops decrementing
			clearInterval(intervalId);
			// set isClockedPaused to true
			isClockPaused = true;
		}
	});

});