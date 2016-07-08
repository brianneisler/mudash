import { _hint } from './util';
import compose from './compose';
import iterable from './iterable';

export default compose(_hint('butLast'), iterable);
