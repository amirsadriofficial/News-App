import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 150,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    marginLeft: 20,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 24,
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 4,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 4,
  },
  title: {
    fontSize: 18,
    width: 210,
    color: '#282828',
    marginBottom: 8,
  },
});

export default styles;
