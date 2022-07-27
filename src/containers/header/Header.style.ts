import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
  },
  headerProfile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 20,
    color: '#000'
  },
  headerUsername: {
    marginVertical: 4
  },
  headerNotification: {
    borderWidth: 2,
    borderColor: '#cdcdcd',
    borderStyle: 'solid',
    borderRadius: 50,
    padding: 7,
    backgroundColor: '#fff',
    marginRight:4,
  },
});
