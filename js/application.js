turn_count = 0

$(document).ready(function(){
  $('#button-1').on('click', chipPlayed1);
  $('#button-2').on('click', chipPlayed2);
  $('#button-3').on('click', chipPlayed3);
  $('#button-4').on('click', chipPlayed4);
  $('#button-5').on('click', chipPlayed5); 
  $('#button-6').on('click', chipPlayed6);
  $('#button-7').on('click', chipPlayed7);
});


var chipPlayed1 = function() {
	
	return ["column-0", colorPlayed()];
}
var chipPlayed2 = function() {
	return ["column-1", colorPlayed()];
}
var chipPlayed3 = function() {
	return ["column-2", colorPlayed()];
}
var chipPlayed4 = function() {
	return ["column-3", colorPlayed()];
}
var chipPlayed5 = function() {
	return ["column-4", colorPlayed()];
}
var chipPlayed6 = function() {
	return ["column-5", colorPlayed()];
}
var chipPlayed7 = function() {
	return ["column-6", colorPlayed()];
}

var colorPlayed = function(){
	turn_count++;
	if(turn_count % 2 == 0){
		console.log('black')
		return "black";
	} else {
		console.log('red')
		return "red";
	}
}

var win_array = [
  "black",
  "red",
  "black",
  "black",
  "black",
  "black"
];

var lose_array = [
  "black",
  "red",
  "black",
  "white",
  "red",
  "black"
];



var check_win = function(array) {

var red_count = 0;
var black_count = 0;

var win_check = function() {
		if (red_count == 4) {
			console.log("red win");
		}
		else if (black_count == 4) {
			console.log("black win");
		}
}

	for (i=0; i < array.length; i++) {

		if (array[i] == "black") {
			black_count++;
			red_count = 0;
			win_check();
		}
		else if (array[i] == "red") {
			red_count++;
			black_count = 0;

			win_check();
		}
		else if (array[i] == "white" ) {
			red_count = 0;
			black_count = 0;
		}
		else {
			console.log("not working");
		}
	}
}

check_win(win_array);















