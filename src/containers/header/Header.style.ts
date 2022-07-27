import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
  },
  headerAvatar: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  headerText: {
    marginHorizontal: 8,
  },
  headerName: {
    fontSize:20,
    color: '#000'
  },
  headerUsername: {
    marginVertical: 4
  },
});
