import fromConstants, {Constants} from './fromConstants';

const constantColor = (
  variant: keyof Constants['THEME']['colors']['primary'],
) => fromConstants().THEME.colors.primary[variant];

export default constantColor;
