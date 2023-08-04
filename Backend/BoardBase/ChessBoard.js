class ChessBoard {
  constructor(size) {
    this.size = size;
    this.grid = this.createGrid(size);
  }

  createGrid(size) {
    const grid = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(null);
      }
      grid.push(row);
    }
    return grid;
  }

  print() {
    for (let i = 0; i < this.size; i++) {
      let rowStr = "";
      for (let j = 0; j < this.size; j++) {
        const piece = this.grid[i][j];
        rowStr += piece ? piece.symbol : " - ";
      }
      console.log(rowStr);
    }
  }

  placePiece(piece, row, col) {
    this.grid[row][col] = piece;
  }

  getPiece(row, col) {
    return this.grid[row][col];
  }
}
module.exports = { ChessBoard };
