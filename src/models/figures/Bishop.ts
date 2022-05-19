import Figure, { FigureNames } from './Figure';
import Cell from '../Cell';
import Colors from '../Colors';
import blackLogo from '../../assets/figures/black/black-bishop.png';
import whiteLogo from '../../assets/figures/white/white-bishop.png';

class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }
}

export default Bishop;
