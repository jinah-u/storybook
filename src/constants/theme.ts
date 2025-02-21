import { Colors, GradientRecord, TransparentRecord } from '../types/theme';

export const COLORS: Colors = {
  WHITE: '#FFFFFF',
  BLACK_100: '#000000',
  BLACK_90: '#1A1A1A',
  BLACK_80: '#333333',
  BLACK_70: '#4D4D4D',
  BLACK_60: '#666666',
  BLACK_50: '#808080',
  BLACK_40: '#999999',
  BLACK_30: '#B3B3B3',
  BLACK_20: '#CCCCCC',
  BLACK_10: '#E6E6E6',
  BLACK_8: '#EBEBEB',
  BLACK_6: '#F0F0F0',
  BLACK_4: '#F5F5F5',
  BLACK_2: '#FAFAFA',
  RED_50: '#F2373E',
  GREEN_50: '#00A256',
  BLUE_50: '#00A3FF',
  BRAND_90: '#3D0871',
  BRAND_70: '#550B9E',
  BRAND_50: '#7910E1',
  BRAND_40: '#C99FF3',
  BRAND_20: '#E4CFF9',
  BRAND_5: '#F8F3FD',
  BRAND_BLUE: '#00C0B5',
  BRAND_YELLOW: '#FFC247',
  PROGRESS_BAR: `linear-gradient(90deg, #7910E1 0%, #42097B 100%)`,
};
export const TRANSPARENT: TransparentRecord = {
  BLACK_ALPHA_80: 'rgba(0, 0, 0, 0.8)',
  BLACK_ALPHA_60: 'rgba(0, 0, 0, 0.6)',
  BLACK_ALPHA_40: 'rgba(0, 0, 0, 0.4)',
  BLACK_ALPHA_20: 'rgba(0, 0, 0, 0.2)',
  BLACK_ALPHA_5: 'rgba(0, 0, 0, 0.05)',
};
export const GRADIENT: GradientRecord = {
  BLACK_GRADIENT_100: `linear-gradient(180deg, #000000 0%, #000000 100%)`,
};
