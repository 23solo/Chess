const { ChessBoard } = require("./ChessBoard");
const {
  placePawns,
  placeRooks,
  placeKing,
  placeQueen,
  placeBishops,
  placeKnights,
} = require("./FillBoard");
const { Piece } = require("./Piece");

const board = new ChessBoard(8);
const whiteKing = new Piece("white", " ♔ ");
const whiteQueen = new Piece("white", " ♕ ");
const whitePawn = new Piece("white", " ♟︎ ");
const whiteBishop = new Piece("white", " ♝ ");
const whiteKnight = new Piece("white", " ♞ ");
const whiteRook = new Piece("white", " ♜ ");
const blackKing = new Piece("Black", " ♔ ");
const blackQueen = new Piece("Black", " ♕ ");
const blackPawn = new Piece("Black", " ♟︎ ");
const blackRook = new Piece("Black", " ♜ ");
const blackBishop = new Piece("Black", " ♝ ");
const blackKnight = new Piece("Black", " ♞ ");

placePawns(board, whitePawn, blackPawn);
placeRooks(board, whiteRook, blackRook);
placeKing(board, whiteKing, blackKing);
placeQueen(board, whiteQueen, blackQueen);
placeBishops(board, whiteBishop, blackBishop);
placeKnights(board, whiteKnight, blackKnight);
board.print();
