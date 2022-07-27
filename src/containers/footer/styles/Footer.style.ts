import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    bottom: -600,
    backgroundColor: '#eee',
    paddingVertical: 10,
  },
  footerItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 27,
  },
});
