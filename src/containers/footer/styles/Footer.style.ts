import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#eee',
    paddingVertical: 10,
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 27,
  },
  active: {
    color: '#1DA1F2',
  },
});
