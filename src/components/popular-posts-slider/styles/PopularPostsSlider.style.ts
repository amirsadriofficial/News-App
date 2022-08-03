import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 4,
    marginLeft: 16,
  },
  image: {
    height: 200,
    width: 300,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    width: 300,
    marginVertical: 8,
  },
  date: {
    fontSize: 12,
    width: 150,
  },
});

export default styles;
