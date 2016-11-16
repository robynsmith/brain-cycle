var timeMin = 0;
var timeSec = 3;
var timerIntervalID = null;

function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}


function updateTimer() {
	var displayString = "";

	console.log("Update timer()");
	if (timeSec === 0) {
		timeSec = 59;
		timeMin--;
	} else {
		timeSec--;
	}

	displayString = timeMin + ":" + pad(timeSec, 2);


	$(".timer").html(displayString);
  $("").html(displayString);
	if (timeMin < 1 && timeSec < 1) {
		$(".timer").css('color', 'red');
		clearInterval(timerIntervalID);
		alert("Cycle complete!");
    cyclesComplete++;
    $(".data-cycles-complete").html("Cycles Complete: " + cyclesComplete);
	}
}

function test() {
	console.log("Test");
}

$(document).ready(function() {
  timeMin = parseInt($("#min").val());
  timeSec = 0;
  cyclesComplete = 0;

	$("button").click(function() {
		var whichButton = $(this).attr("value");
		console.log("Button pressed");

		switch(whichButton) {
			case "start":
				if (timeMin > -1) {
          clearInterval(timerIntervalID);
					timerIntervalID = setInterval(updateTimer, 1000);
				} else {
					$(".timer").html("Error: Timer minutes required.");
				}

				break;
			case "reset":
				if (timerIntervalID !== null) {
					clearInterval(timerIntervalID);
          timeMin = parseInt($("#min").val());
          timeSec = 0;
				}

				$(".timer").css('color', 'black');
				displayString = timeMin + ":" + pad(timeSec, 2);
				$(".timer").html(displayString);
				break;
      case "pause":
        clearInterval(timerIntervalID);
        break;
		}
	});
});
