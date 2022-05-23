import Figure, { FigureNames } from './Figure';
import Colors from '../Colors';
import Cell from '../Cell';
import blackLogo from '../../assets/figures/black/black-king.png';
import whiteLogo from '../../assets/figures/white/white-king.png';

class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return Math.abs(target.x - this.cell.x) <= 1 && Math.abs(target.y - this.cell.y) <= 1;
  }
}

export default King;
