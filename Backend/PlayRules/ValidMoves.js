const config = require("./../chessConfig.json");

const validQueenMove = (currentI, currentJ, toGridI, toGridJ, board) => {
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
      if (
        board.getPiece(currentI, currentJ) != null &&
        currentColor == board.getPiece(toGridI, toGridJ).color
      ) {
        return false;
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
      if (
        board.getPiece(currentI, currentJ) != null &&
        currentColor == board.getPiece(toGridI, toGridJ).color
      ) {
        return false;
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
      if (
        board.getPiece(currentI, currentJ) != null &&
        currentColor == board.getPiece(toGridI, toGridJ).color
      ) {
        return false;
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
      if (
        board.getPiece(currentI, currentJ) != null &&
        currentColor == board.getPiece(toGridI, toGridJ).color
      ) {
        return false;
      }
      return true;
    }
  }

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
    if (
      board.getPiece(currentI, currentJ) != null &&
      currentColor == board.getPiece(toGridI, toGridJ).color
    ) {
      return false;
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
    if (
      board.getPiece(currentI, currentJ) != null &&
      currentColor == board.getPiece(toGridI, toGridJ).color
    ) {
      return false;
    }
    return true;
  }
};
const validRookMove = (currentI, currentJ, toGridI, toGridJ, board) => {};
const validBishopMove = (currentI, currentJ, toGridI, toGridJ, board) => {};
const validKnightMove = (currentI, currentJ, toGridI, toGridJ, board) => {};
const validPawnMove = (currentI, currentJ, toGridI, toGridJ, board) => {};
const isValidMove = (currentI, currentJ, toGridI, toGridJ, user, board) => {
  const piece = board.getPiece(currentI, currentJ);
  if (piece.color != user.color) {
    return false;
  }
  if (piece.name == "Queen") {
    return validQueenMove(currentI, currentJ, toGridI, toGridJ, board);
  }
  if (piece.name == "King") {
    return validKingMove(currentI, currentJ, toGridI, toGridJ, board);
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
};

module.exports = { isValidMove };
