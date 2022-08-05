import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  rightHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareIcon: {
    marginRight: 24,
  },
  container: {
    marginLeft: 16,
  },
  image: {
    height: 300,
    width: 350,
    borderRadius: 32,
  },
  title: {
    fontSize: 30,
    color: '#282828',
  },
  description: {
    fontSize: 30,
    color: '#282828',
  },
});

export default styles;
