import fromConstants, {Constants} from './fromConstants';

const constantColor = <Type extends 'primary' | 'error'>(
  type: Type,
  variant: keyof Constants['THEME']['colors'][Type],
) => fromConstants().THEME.colors[type][variant];

export default constantColor;
