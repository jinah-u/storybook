export type EventUColorKey =
  | 'white'
  | 'black100'
  | 'black90'
  | 'black80'
  | 'black70'
  | 'black60'
  | 'black50'
  | 'black40'
  | 'black30'
  | 'black20'
  | 'black10'
  | 'black8'
  | 'black6'
  | 'black4'
  | 'black2'
  | 'red50'
  | 'green50'
  | 'blue50'
  | 'brand90'
  | 'brand70'
  | 'brand50'
  | 'brand40'
  | 'brand20'
  | 'brand5'
  | 'brandBlue'
  | 'brandYellow'
  | 'progressBar';
export type EventUColors = Record<EventUColorKey, string>;
type TransparentKey =
  | 'blackAlpha80'
  | 'blackAlpha60'
  | 'blackAlpha40'
  | 'blackAlpha20'
  | 'blackAlpha5';
type EventUTransparentRecord = Record<TransparentKey, string>;
type GradientKey = 'black-gradient-100';
type EventUGradientRecord = Record<GradientKey, string>;
export const eventUColor: EventUColors = {
  white: '#FFFFFF',
  black100: '#000000',
  black90: '#1A1A1A',
  black80: '#333333',
  black70: '#4D4D4D',
  black60: '#666666',
  black50: '#808080',
  black40: '#999999',
  black30: '#B3B3B3',
  black20: '#CCCCCC',
  black10: '#E6E6E6',
  black8: '#EBEBEB',
  black6: '#F0F0F0',
  black4: '#F5F5F5',
  black2: '#FAFAFA',
  red50: '#F2373E',
  green50: '#00A256',
  blue50: '#00A3FF',
  brand90: '#3D0871',
  brand70: '#550B9E',
  brand50: '#7910E1',
  brand40: '#C99FF3',
  brand20: '#E4CFF9',
  brand5: '#F8F3FD',
  brandBlue: '#00C0B5',
  brandYellow: '#FFC247',
  progressBar: `linear-gradient(90deg, #7910E1 0%, #42097B 100%)`,
};
export const eventUTransparent: EventUTransparentRecord = {
  blackAlpha80: 'rgba(0, 0, 0, 0.8)',
  blackAlpha60: 'rgba(0, 0, 0, 0.6)',
  blackAlpha40: 'rgba(0, 0, 0, 0.4)',
  blackAlpha20: 'rgba(0, 0, 0, 0.2)',
  blackAlpha5: 'rgba(0, 0, 0, 0.05)',
};
export const eventUGradient: EventUGradientRecord = {
  'black-gradient-100': `linear-gradient(180deg, #000000 0%, #000000 100%)`,
};
