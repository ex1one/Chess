import Colors from './Colors';
import Cell from './Cell';
import Pawn from './figures/Pawn';
import King from './figures/King';
import Knight from './figures/Knight';
import Queen from './figures/Queen';
import Rook from './figures/Rook';
import Bishop from './figures/Bishop';
import Figure from './figures/Figure';

export default class Board {
  cells: Cell[][] = [];

  lostBlackFigures: Figure[] = [];

  lostWhiteFigures: Figure[] = [];

  public initCells() {
    for (let i = 0; i < 8; i += 1) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j += 1) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null));
        }
      }
      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostWhiteFigures = this.lostWhiteFigures;
    newBoard.lostBlackFigures = this.lostBlackFigures;
    return newBoard;
  }

  public highlightCell(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i += 1) {
      const row = this.cells[i];

      for (let j = 0; j < row.length; j += 1) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addBishops() {
    for (let i = 0; i < 8; i += 1) {
      new Bishop(Colors.BLACK, this.getCell(2, 0));
      new Bishop(Colors.BLACK, this.getCell(5, 0));
      new Bishop(Colors.WHITE, this.getCell(2, 7));
      new Bishop(Colors.WHITE, this.getCell(5, 7));
    }
  }

  private addKings() {
    for (let i = 0; i < 8; i += 1) {
      new King(Colors.BLACK, this.getCell(4, 0));
      new King(Colors.WHITE, this.getCell(4, 7));
    }
  }

  private addKnights() {
    for (let i = 0; i < 8; i += 1) {
      new Knight(Colors.BLACK, this.getCell(1, 0));
      new Knight(Colors.BLACK, this.getCell(6, 0));
      new Knight(Colors.WHITE, this.getCell(1, 7));
      new Knight(Colors.WHITE, this.getCell(6, 7));
    }
  }

  private addPawns() {
    for (let i = 0; i < 8; i += 1) {
      new Pawn(Colors.BLACK, this.getCell(i, 1));
      new Pawn(Colors.WHITE, this.getCell(i, 6));
    }
  }

  private addQueens() {
    for (let i = 0; i < 8; i += 1) {
      new Queen(Colors.BLACK, this.getCell(3, 0));
      new Queen(Colors.WHITE, this.getCell(3, 7));
    }
  }

  private addRooks() {
    for (let i = 0; i < 8; i += 1) {
      new Rook(Colors.BLACK, this.getCell(0, 0));
      new Rook(Colors.BLACK, this.getCell(7, 0));
      new Rook(Colors.WHITE, this.getCell(0, 7));
      new Rook(Colors.WHITE, this.getCell(7, 7));
    }
  }

  public addFigures() {
    this.addBishops();
    this.addKings();
    this.addKnights();
    this.addPawns();
    this.addQueens();
    this.addRooks();
  }
}
