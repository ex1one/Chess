import Figure, { FigureNames } from './Figure';
import Colors from '../Colors';
import Cell from '../Cell';
import blackLogo from '../../assets/figures/black/black-knight.png';
import whiteLogo from '../../assets/figures/white/white-knight.png';

class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
}

export default Knight;
