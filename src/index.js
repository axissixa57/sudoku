module.exports = function solveSudoku(matrix) {
  function solveSudoku(board, n) {
    let row;
    let col;
    let isEmpty = true;

    for (let i = 0; i < n; i++) 
    {
        for (let j = 0; j < n; j++) 
        {
            if (board[i][j] == 0) 
            {
                row = i;
                col = j;

                isEmpty = false; 
                break;
            }
        }
        if (!isEmpty)
        {
            break;
        }
    }

    
    if (isEmpty)
    { 
        return true; 
    } 

    for (let num = 1; num <= n; num++) 
    {
        if (isSafe(board, row, col, num)) 
        {
            board[row][col] = num; 
            if (solveSudoku(board, n))  
            {
                return board;
            }   
            else
            {
                board[row][col] = 0; 
            }
        }
    }
    return false;
  }

  function isSafe(board, row, col, num) {
    for (let d = 0; d < board.length; d++) 
    {
        if (board[row][d] == num)
        {
            return false;
        }
    }

    for (let r = 0; r < board.length; r++) 
    {
        if (board[r][col] == num)
        {
            return false;
        }
    }

    let sqrt = Math.sqrt(board.length);
    let boxRowStart = row - row % sqrt;
    let boxColStart = col - col % sqrt;

    for (let r = boxRowStart; r < boxRowStart + sqrt; r++) 
    {
        for (let d = boxColStart; d < boxColStart + sqrt; d++)
        {
            if (board[r][d] == num) 
            {
                return false;
            }
        }
    }

    return true;  
  }

  let board = matrix; 
  let n = board.length;
  let result = solveSudoku(board, n);

  return result;
}
