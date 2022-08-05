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
    marginTop: 2,
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
  tagsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tags: {
    fontSize: 12,
    marginLeft: 4,
  },
  moreIcon: {
    marginTop: 4,
  },
});

export default styles;
