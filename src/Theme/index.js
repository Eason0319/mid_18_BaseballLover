import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    light400: '#a8a29e',
    primary700: '#0e7490',
    primary100: '#cffafe',
  },

};

export const lightTheme = {
  background: '#ffffff',
  text: 'black',
  highLightBox: '#D9D9D9',
  ButtonBorder: 'black',
  SegmentedControlBg:'#fffff',
  ActivedSegmentedControlBg: '#7B7B7B',
  SegmentedControlText:'black',
  button:'#9D9D9D',
  settingBar:'#D9D9D9'
};

export const darkTheme = {
  background: '#404040',
  text: '#ffffff',
  highLightBox: '#1A1A1A',
  ButtonBorder: '#ffffff',
  SegmentedControlBg:'gray',
  ActivedSegmentedControlBg: 'black',
  SegmentedControlText:'black',
  SegmentedControlText:'#ffffff',
  button:'#1A1A1A',
  settingBar:'#1A1A1A'
};

export default MyTheme;
