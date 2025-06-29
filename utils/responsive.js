import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export const scale = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size; //Width, horizontal margin/padding
export const verticalScale = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size; //Height, vertical margin/padding
export const moderateScale = (size, factor = 0.5) => //	Fonts, borderRadius, icons (subtle scale)
  size + (scale(size) - size) * factor;
