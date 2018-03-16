/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var matrix = new Board({n:n});
  
  var permutate = function(row) {
    var rows = matrix.rows();
    if (row === n) {
      var resultArr = [];
      for (var key in matrix.attributes) {
        resultArr.push(matrix.attributes[key]);
      }
      resultArr.pop();
      return resultArr;
    }
    for (var col = 0; col < n; col++) {
      matrix.togglePiece(row, col);
      if (!matrix.hasAnyRooksConflicts()) {
        return permutate(row + 1);
      }
      matrix.togglePiece(row, col);
    }
  };
  
  var solution = permutate(0);
  
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  
  var matrix = new Board({n:n});
  
  var permutate = function(row) {
    var rows = matrix.rows();
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      matrix.togglePiece(row, col);
      if (!matrix.hasAnyRooksConflicts()) {
        permutate(row + 1);
      }
      matrix.togglePiece(row, col);
    }
  };
  
  permutate(0);
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var matrix = new Board({n:n});
  var permutate = function(row) {
    var rows = matrix.rows();
    if (row === n) {
      var resultArr = [];
      for (var key in matrix.attributes) {
        resultArr.push(matrix.attributes[key]);
      }
      resultArr.pop();
      return resultArr;
    }
    for (var col = 0; col < n; col++) {
      matrix.togglePiece(row, col);
      if (!matrix.hasAnyQueensConflicts()) {
        return permutate(row + 1);
      }
      matrix.togglePiece(row, col);
    }
  };
  
  var solution = permutate(0);
  
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var matrix = new Board({n:n});
  
  var permutate = function(row) {
    var rows = matrix.rows();
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      matrix.togglePiece(row, col);
      if (!matrix.hasAnyQueensConflicts()) {
        permutate(row + 1);
      }
      matrix.togglePiece(row, col);
    }
  };
  
  permutate(0);
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
