const config = require("./../chessConfig.json");

const placePawns = (board, whitePawn, blackPawn) => {
  for (let j = 0; j < config.ChessBoardSize; j++) {
    board.placePiece(whitePawn, config.ChessBoardSize - 2, j);
    board.placePiece(blackPawn, 1, j);
  }
};
const placeKing = (board, whiteKing, blackKing) => {
  board.placePiece(whiteKing, 7, 4);
  board.placePiece(blackKing, 0, 4);
};
const placeQueen = (board, whiteQueen, blackQueen) => {
  board.placePiece(whiteQueen, 7, 3);
  board.placePiece(blackQueen, 0, 3);
};
const placeRooks = (board, whiteRook, blackRook) => {
  board.placePiece(whiteRook, 7, 0);
  board.placePiece(whiteRook, 7, 7);
  board.placePiece(blackRook, 0, 0);
  board.placePiece(blackRook, 0, 7);
};
const placeBishops = (board, whiteBishop, blackBishop) => {
  board.placePiece(whiteBishop, 7, 5);
  board.placePiece(whiteBishop, 7, 2);
  board.placePiece(blackBishop, 0, 5);
  board.placePiece(blackBishop, 0, 2);
};
const placeKnights = (board, whiteKnight, blackKnight) => {
  board.placePiece(whiteKnight, 7, 1);
  board.placePiece(whiteKnight, 7, 6);
  board.placePiece(blackKnight, 0, 1);
  board.placePiece(blackKnight, 0, 6);
};
// board.placePiece(whiteKing, 0, 4);
// board.placePiece(blackQueen, 7, 3);

module.exports = {
  placePawns,
  placeKing,
  placeBishops,
  placeKnights,
  placeQueen,
  placeRooks,
};
