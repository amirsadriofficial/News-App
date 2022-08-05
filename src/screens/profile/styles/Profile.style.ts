import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
  },
  image: {
    borderRadius: 100,
  },
  name: {
    fontSize: 32,
    fontWeight: '500',
    color: '#282828',
    marginTop: 16,
  },
  username: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default styles;
