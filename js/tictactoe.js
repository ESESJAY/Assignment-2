var checkwins = ''
var checker = 0
var turn = "X";
var board = document.getElementById("board").getElementsByTagName("td");
for (var i = 0; i < board.length; i++) {
  board[i].addEventListener("click", function() {
    if (this.innerHTML == "") {
      this.innerHTML = turn;
      checker += 1;
      checkWin();
      if (turn == "X") {
        turn = "O";
      } else {
        turn = "X";
      }
    }
    if (checker == 9)
    {
      checkWin();
      if (checkwins != 'Win')
        {
          alert("Draw!!");
          reset();
        }

    }
  });
}
function checkWin() {
  var winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var i = 0; i < winCombinations.length; i++) {
    if (board[winCombinations[i][0]].innerHTML == turn && board[winCombinations[i][1]].innerHTML == turn && board[winCombinations[i][2]].innerHTML == turn) {
      checkwins = 'Win';
      if (checkwins == 'Win')
      {
        alert(turn + " wins!");
        reset();
      }
      
    }
  }
}
function reset() {
  for (var i = 0; i < board.length; i++) {
    board[i].innerHTML = "";
    checkwins = '';
    checker = 0
  }
}