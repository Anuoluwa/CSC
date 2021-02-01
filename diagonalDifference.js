/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal =  1 + 5 + 9 . The right to left diagonal = 3 + 5 + 9 . Their absolute difference is \15 - 17\ .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer. */


// solution : I first solved this on HackerRank

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] ]
// That is, in a 2-D form, the matrix is — [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const matrix = 
function diagonalDifference(matrix) {
    // Write your code here
     let diagonal1 = 0, diagonal2 = 0;
  let result;
  let absValue;

    for (let row = 0; row < matrix.length; row++) {
        diagonal1 += matrix[row][row];
        diagonal2 += matrix[row][matrix.length - row - 1];
    }
  result = diagonal1 - diagonal2;
  absValue = (result < 0) ? (result * -1) : result;
  return absValue;
}

