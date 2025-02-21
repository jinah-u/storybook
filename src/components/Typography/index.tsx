import { Typography as MuiTypography } from '@mui/material';
import { COLORS } from 'constants/theme';
import { PropsWithChildren } from 'react';
import { ColorKey } from 'types/theme';

/* typographyKey */
type TypographyKey =
  | 'display1'
  | 'display2'
  | 'heading1'
  | 'heading2'
  | 'heading2B'
  | 'heading3'
  | 'heading3B'
  | 'subHeading'
  | 'subHeadingB'
  | 'body1'
  | 'body1M'
  | 'body1B'
  | 'body2'
  | 'body2M'
  | 'body2B'
  | 'body3'
  | 'body3M'
  | 'body3B'
  | 'description'
  | 'descriptionB'
  | 'number1'
  | 'number1B'
  | 'number2'
  | 'number2B'
  | 'number3'
  | 'number3B'
  | 'number3ST'
  | 'number4'
  | 'number4B'
  | 'number4ST'
  | 'number5'
  | 'number5B'
  | 'number5ST'
  | 'number6';

export interface TypographyProps {
  colorKey?: ColorKey;
  typographyKey: TypographyKey;
}

const Typography = ({
  colorKey = 'BLACK_90',
  typographyKey,
  children,
}: PropsWithChildren<TypographyProps>) => {
  return (
    <MuiTypography color={COLORS[colorKey]} variant={typographyKey}>
      {children}
    </MuiTypography>
  );
};
export default Typography;
