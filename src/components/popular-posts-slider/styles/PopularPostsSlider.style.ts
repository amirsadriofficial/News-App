import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    height: 200,
    width: 300,
  },
  title: {
    fontSize: 32,
  },
});

export default styles;
