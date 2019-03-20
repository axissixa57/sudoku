module.exports = function solveSudoku(matrix) { 
  function tryToSolveSudoku(matrix, length) {
    let row;
    let col;
    let isEmpty = true;

    for (let i = 0; i < length; i++) 
    {
        for (let j = 0; j < length; j++) 
        {
            if (matrix[i][j] == 0) 
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

    for (let num = 1; num <= length; num++) 
    {
        if (isSuitableValue(matrix, row, col, num))
        {
            matrix[row][col] = num; 
            if (tryToSolveSudoku(matrix, length))  
            {
                return matrix;
            }   
            else
            {
                matrix[row][col] = 0; 
            }
        }
    }
    return false;
  }

  function isSuitableValue(matrix, row, col, num) {
    for (let d = 0; d < matrix.length; d++) 
    {
        if (matrix[row][d] == num)
        {
            return false;
        }
    }

    for (let r = 0; r < matrix.length; r++) 
    {
        if (matrix[r][col] == num)
        {
            return false;
        }
    }

    let sqrt = Math.sqrt(matrix.length);
    let boxRowStart = row - row % sqrt;
    let boxColStart = col - col % sqrt;

    for (let r = boxRowStart; r < boxRowStart + sqrt; r++) 
    {
        for (let d = boxColStart; d < boxColStart + sqrt; d++)
        {
            if (matrix[r][d] == num) 
            {
                return false;
            }
        }
    }

    return true;  
  }

  let length = matrix.length;
  let result = tryToSolveSudoku(matrix, length);

  return result;
}