/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a board (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  
  var permutate = function(row) {
    var rows = board.rows();
    if (row === n) {
      var resultArr = [];
      for (var key in board.attributes) {
        resultArr.push(board.attributes[key]);
      }
      resultArr.pop();
      return resultArr;
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        return permutate(row + 1);
      }
      board.togglePiece(row, col);
    }
  };
  
  var solution = permutate(0);
  
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  
  var board = new Board({n:n});
  
  var permutate = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyRooksConflicts()) {
        permutate(row + 1);
      }
      board.togglePiece(row, col);
    }
  };
  
  permutate(0);
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a board (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var permutate = function(row) {
    var rows = board.rows();
    if (row === n) {
      var resultArr = [];
      for (var key in board.attributes) {
        resultArr.push(board.attributes[key]);
      }
      resultArr.pop();
      return resultArr;
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        return permutate(row + 1);
      }
      board.togglePiece(row, col);
    }
  };
  
  var solution = permutate(0);
  
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 2 || n === 3) {
    return 0;
  }
  var solutionCount = 0; //fixme
  
  var board = new Board({n:n});
  
  var permutate = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < n; col++) {
      board.togglePiece(row, col);
      if (!board.hasAnyQueensConflicts()) {
        permutate(row + 1);
      }
      board.togglePiece(row, col);
    }
  };
  
  permutate(0);
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
