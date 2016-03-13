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





// 'Left Handed' Diagonal Arrays

var leftHandDiagonals = [
0[undefined, undefined, undefined, undefined],
1[undefined, undefined, undefined, undefined, undefined],
2[undefined, undefined, undefined, undefined, undefined, undefined],
3[undefined, undefined, undefined, undefined, undefined, undefined],
4[undefined, undefined, undefined, undefined, undefined],
5[undefined, undefined, undefined, undefined]
]
//Fill Left Hand Diagonals from Rows

leftHandDiagonals[2].push(rows[0][0]);
leftHandDiagonals[3].push(rows[0][1]);
leftHandDiagonals[4].push(rows[0][2]);
leftHandDiagonals[5].push(rows[0][3]);
leftHandDiagonals[1].push(rows[1][0]);
leftHandDiagonals[2].push(rows[1][1]);
leftHandDiagonals[3].push(rows[1][2]);
leftHandDiagonals[4].push(rows[1][3]);
leftHandDiagonals[5].push(rows[1][4]);
leftHandDiagonals[0].push(rows[2][0]);
leftHandDiagonals[1].push(rows[2][1]);
leftHandDiagonals[2].push(rows[2][2]);
leftHandDiagonals[3].push(rows[2][3]);
leftHandDiagonals[4].push(rows[2][4]);
leftHandDiagonals[5].push(rows[2][5]);
leftHandDiagonals[0].push(rows[3][1]);
leftHandDiagonals[1].push(rows[3][2]);
leftHandDiagonals[2].push(rows[3][3]);
leftHandDiagonals[3].push(rows[3][4]);
leftHandDiagonals[4].push(rows[3][5]);
leftHandDiagonals[5].push(rows[3][6]);
leftHandDiagonals[0].push(rows[4][2]);
leftHandDiagonals[1].push(rows[4][3]);
leftHandDiagonals[2].push(rows[4][4]);
leftHandDiagonals[3].push(rows[4][5]);
leftHandDiagonals[4].push(rows[4][6]);
leftHandDiagonals[0].push(rows[5][3]);
leftHandDiagonals[1].push(rows[5][4]);
leftHandDiagonals[2].push(rows[5][5]);
leftHandDiagonals[3].push(rows[5][6]);


// var lDiag0 = new Array(4)
// var lDiag1 = new Array(5)
// var lDiag2 = new Array(6)
// var lDiag3 = new Array(6)
// var lDiag4 = new Array(5)
// var lDiag5 = new Array(4)

// 'Right Handed' Diagonal Arrays

var rightHandDiagonals = [
0[undefined, undefined, undefined, undefined],
1[undefined, undefined, undefined, undefined, undefined],
2[undefined, undefined, undefined, undefined, undefined, undefined],
3[undefined, undefined, undefined, undefined, undefined, undefined],
4[undefined, undefined, undefined, undefined, undefined],
5[undefined, undefined, undefined, undefined]
]
// Fill Right Hand Diagonals
rightHandDiagonals[0].push(rows[0][3]);
rightHandDiagonals[1].push(rows[0][4]);
rightHandDiagonals[2].push(rows[0][5]);
rightHandDiagonals[3].push(rows[0][6]);
rightHandDiagonals[0].push(rows[1][2]);
rightHandDiagonals[1].push(rows[1][3]);
rightHandDiagonals[2].push(rows[1][4]);
rightHandDiagonals[3].push(rows[1][5]);
rightHandDiagonals[4].push(rows[1][6]);
rightHandDiagonals[0].push(rows[2][1]);
rightHandDiagonals[1].push(rows[2][2]);
rightHandDiagonals[2].push(rows[2][3]);
rightHandDiagonals[3].push(rows[2][4]);
rightHandDiagonals[4].push(rows[2][5]);
rightHandDiagonals[5].push(rows[2][6]);
rightHandDiagonals[0].push(rows[3][0]);
rightHandDiagonals[1].push(rows[3][1]);
rightHandDiagonals[2].push(rows[3][2]);
rightHandDiagonals[3].push(rows[3][3]);
rightHandDiagonals[4].push(rows[3][4]);
rightHandDiagonals[5].push(rows[3][5]);
rightHandDiagonals[1].push(rows[4][0]);
rightHandDiagonals[2].push(rows[4][1]);
rightHandDiagonals[3].push(rows[4][2]);
rightHandDiagonals[4].push(rows[4][3]);
rightHandDiagonals[5].push(rows[4][4]);
rightHandDiagonals[2].push(rows[5][0]);
rightHandDiagonals[3].push(rows[5][1]);
rightHandDiagonals[4].push(rows[5][2]);
rightHandDiagonals[5].push(rows[5][3]);

// var rDiag0 = new Array(4)
// var rDiag1 = new Array(5)
// var rDiag2 = new Array(6)
// var rDiag3 = new Array(6)
// var rDiag4 = new Array(5)
// var rDiag5 = new Array(4)
