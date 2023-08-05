const config = require("./../chessConfig.json");

const isValidHorizontalVerticalMove = (
  currentI,
  currentJ,
  toGridI,
  toGridJ,
  board
) => {
  // For Horizontal move
  const currentColor = board.getPiece(currentI, currentJ).color;
  if (currentI == toGridI) {
    // Forward Horizontal Move
    if (currentJ < toGridJ) {
      while (currentJ++ < toGridJ) {
        if (board.grid[currentI][currentJ] != null) {
          return false;
        }
      }
      return true;
    }
    // Backward Horizontal move
    if (currentJ > toGridJ) {
      while (currentJ-- > toGridJ) {
        if (board.grid[currentI][currentJ] != null) {
          return false;
        }
        currentJ--;
      }
      return true;
    }
  }

  // For Vertical Move
  if (currentJ == toGridJ) {
    // Forward Vertical Move
    if (currentI < toGridI) {
      while (currentI++ < toGridI) {
        if (board.grid[currentI][currentJ] != null) {
          return false;
        }
      }
      return true;
    }
    // Backward Vertical move
    if (currentI > toGridI) {
      while (currentI-- > toGridI) {
        if (board.grid[currentI][currentJ] != null) {
          return false;
        }
      }
      return true;
    }
  }
};

const isValidDiagonalMove = (currentI, currentJ, toGridI, toGridJ, board) => {
  const currentColor = board.getPiece(currentI, currentJ).color;
  // For Diagonal Move
  if (Math.abs(currentI - toGridI) != Math.abs(currentJ - toGridJ)) {
    return false;
  }
  if (currentI < toGridI) {
    ++currentI;
    ++currentJ;
    while (
      currentI < config.ChessBoardSize &&
      currentJ < config.ChessBoardSize
    ) {
      if (board.grid[currentI][currentJ] != null) {
        return false;
      }
      ++currentI;
      ++currentJ;
    }
    return true;
  } else {
    --currentI;
    --currentJ;
    while (currentI > 0 && currentJ > 0) {
      if (board.grid[currentI][currentJ] != null) {
        return false;
      }
      --currentI;
      --currentJ;
    }
    return true;
  }
};

const validQueenMove = (currentI, currentJ, toGridI, toGridJ, board) => {
  // if Horizontal or Vertical move
  if (currentI == toGridI || currentJ == toGridJ)
    return isValidHorizontalVerticalMove(
      currentI,
      currentJ,
      toGridI,
      toGridJ,
      board
    );
  // if Diagonal Move
  return isValidDiagonalMove(currentI, currentJ, toGridI, toGridJ, board);
};

const validRookMove = (currentI, currentJ, toGridI, toGridJ, board) => {
  return isValidHorizontalVerticalMove(
    currentI,
    currentJ,
    toGridI,
    toGridJ,
    board
  );
};

const validBishopMove = (currentI, currentJ, toGridI, toGridJ, board) => {
  return isValidDiagonalMove(currentI, currentJ, toGridI, toGridJ, board);
};

const validKnightMove = (currentI, currentJ, toGridI, toGridJ, board) => {
  if (Math.abs(currentI - toGridI) + Math.abs(currentJ - toGridJ) != 3) {
    return false;
  }
  const currentColor = board.getPiece(currentI, currentJ).color;
  // Check for 8 conditions
  if (currentI + 2 == toGridI && currentJ + 2 == toGridJ) {
    return true;
  }
  if (currentI + 2 == toGridI && currentJ - 1 == toGridJ) {
    return true;
  }
  if (currentI - 2 == toGridI && currentJ + 1 == toGridJ) {
    return true;
  }
  if (currentI - 2 == toGridI && currentJ - 1 == toGridJ) {
    return true;
  }
  if (currentI + 1 == toGridI && currentJ + 2 == toGridJ) {
    return true;
  }
  if (currentI + 1 == toGridI && currentJ - 2 == toGridJ) {
    return true;
  }
  if (currentI - 1 == toGridI && currentJ + 2 == toGridJ) {
    return true;
  }
  if (currentI - 1 == toGridI && currentJ - 2 == toGridJ) {
    return true;
  }
  return false;
};

const validPawnMove = (currentI, currentJ, toGridI, toGridJ, board, color) => {
  if (color == "White") {
    if (toGridI >= currentI) {
      return false;
    }
    if (toGridI + 1 == currentI) {
      if (currentJ == toGridJ) {
        return true;
      }
      if (toGridJ + 1 == currentJ && board.grid[toGridI][toGridJ] != null) {
        return true;
      } else if (
        toGridJ - 1 == currentJ &&
        board.grid[toGridI][toGridJ] != null
      ) {
        return true;
      }
      return false;
    }
    if (toGridI + 2 == currentI && currentI == 6) {
      return true;
    }
  } else {
    if (toGridI <= currentI) {
      return false;
    }
    if (toGridI == currentI + 1) {
      if (currentJ == toGridJ) {
        return true;
      }
      if (toGridJ == currentJ + 1 && board.grid[toGridI][toGridJ] != null) {
        return true;
      } else if (
        toGridJ - 1 == currentJ &&
        board.grid[toGridI][toGridJ] != null
      ) {
        return true;
      }
      return false;
    }
    if (toGridI == currentI + 2 && currentI == 1) {
      return true;
    }
  }
  return false;
};

const isValidMove = (currentI, currentJ, toGridI, toGridJ, user, board) => {
  // Add toGrid color check here for all (generic)
  if (
    board.getPiece(toGridI, toGridJ) != null &&
    currentColor == board.getPiece(toGridI, toGridJ).color
  ) {
    return false;
  }

  const piece = board.getPiece(currentI, currentJ);

  // Check if user is moving his piece color only
  if (piece.color != user.color) {
    return false;
  }

  // Check if the move place is not taken by a king
  if (
    board.grid[toGridI][toGridJ] != null &&
    board.grid[toGridI][toGridJ].name == "King"
  ) {
    return false;
  }
  if (piece.name == "King") {
    return validKingMove(currentI, currentJ, toGridI, toGridJ, board);
  }
  if (piece.name == "Queen") {
    return validQueenMove(currentI, currentJ, toGridI, toGridJ, board);
  }
  if (piece.name == "Bishop") {
    return validBishopMove(currentI, currentJ, toGridI, toGridJ, board);
  }
  if (piece.name == "Knight") {
    return validKnightMove(currentI, currentJ, toGridI, toGridJ, board);
  }
  if (piece.name == "Pawn") {
    return validPawnMove(currentI, currentJ, toGridI, toGridJ, board);
  }
  if (piece.name == "Rook") {
    return validRookMove(currentI, currentJ, toGridI, toGridJ, board);
  }
};

module.exports = { isValidMove };
