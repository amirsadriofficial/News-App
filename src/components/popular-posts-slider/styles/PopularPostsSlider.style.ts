import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  image: {
    height: 200,
    width: 300,
  },
  title: {
    fontSize: 24,
    width: 300,
  },
});

export default styles;
