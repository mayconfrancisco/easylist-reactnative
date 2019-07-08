import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

const { height, width } = Dimensions.get('window');
const statusBarMargin = Platform.OS === 'android' ? 0 : getStatusBarHeight();
const bottomSpace = Platform.OS === 'android' ? 0 : getBottomSpace();

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const defaultHeaderHeight = 54 + statusBarMargin;

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 5,
  screenWidth,
  screenHeight,
  statusBarMargin,
  defaultHeaderHeight,
  utilScreenWidth: screenWidth,
  utilScreenHeight: screenHeight - (defaultHeaderHeight + bottomSpace),
};
