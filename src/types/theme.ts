export type ColorKey =
  | 'WHITE'
  | 'BLACK_100'
  | 'BLACK_90'
  | 'BLACK_80'
  | 'BLACK_70'
  | 'BLACK_60'
  | 'BLACK_50'
  | 'BLACK_40'
  | 'BLACK_30'
  | 'BLACK_20'
  | 'BLACK_10'
  | 'BLACK_8'
  | 'BLACK_6'
  | 'BLACK_4'
  | 'BLACK_2'
  | 'RED_50'
  | 'GREEN_50'
  | 'BLUE_50'
  | 'BRAND_90'
  | 'BRAND_70'
  | 'BRAND_50'
  | 'BRAND_40'
  | 'BRAND_20'
  | 'BRAND_5'
  | 'BRAND_BLUE'
  | 'BRAND_YELLOW'
  | 'PROGRESS_BAR';

export type Colors = Record<ColorKey, string>;

export type TransparentKey =
  | 'BLACK_ALPHA_80'
  | 'BLACK_ALPHA_60'
  | 'BLACK_ALPHA_40'
  | 'BLACK_ALPHA_20'
  | 'BLACK_ALPHA_5';

export type TransparentRecord = Record<TransparentKey, string>;

export type GradientKey = 'BLACK_GRADIENT_100';
export type GradientRecord = Record<GradientKey, string>;
