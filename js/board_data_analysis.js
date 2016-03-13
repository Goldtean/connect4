// Column Arrays


var column0 = [];
var column1 = [];
var column2 = [];
var column3 = [];
var column4 = [];
var column5 = [];
var column6 = [];

// Row Arrays

var rows = new Array(6);
for (var i = 0; i < 6; i++) {
  row[i] = new Array(7);
}
// [
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0],
// ]


// Fill rows from columns

var fillRowsFromCol = function(column, rows){
	var rowIndexOffset = 1
	for (var i = 0; i < column.length; i++){
		var rowIndex = rows.length - rowIndexOffset;
		rows[rowIndex][0] = column[i];
		rowIndexOffset += 1;
	};
};

}

//Fill Left Hand Diagonals from Rows

var fillLeftHandDiags = function(leftHandDiagonals, rows){
	for (var row = 0; row < rows.length; row++){
		for (var element = 0; x < rows[element].length; element++) {
			if (row === 0 && element < 3){
				rows[element]
			}
		};
	};
};


// 'Left Handed' Diagonal Arrays

var leftHandDiagonals = [
[undefined, undefined, undefined, undefined],
[undefined, undefined, undefined, undefined, undefined],
[undefined, undefined, undefined, undefined, undefined, undefined],
[undefined, undefined, undefined, undefined, undefined, undefined],
[undefined, undefined, undefined, undefined, undefined],
[undefined, undefined, undefined, undefined]
]

var lDiag0 = new Array(4)
var lDiag1 = new Array(5)
var lDiag2 = new Array(6)
var lDiag3 = new Array(6)
var lDiag4 = new Array(5)
var lDiag5 = new Array(4)

// 'Right Handed' Diagonal Arrays

var rDiag0 = new Array(4)
var rDiag1 = new Array(5)
var rDiag2 = new Array(6)
var rDiag3 = new Array(6)
var rDiag4 = new Array(5)
var rDiag5 = new Array(4)
