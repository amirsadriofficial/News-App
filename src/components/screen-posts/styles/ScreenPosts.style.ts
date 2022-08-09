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
    marginBottom: 12,
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
    marginHorizontal: 8,
  },
  title: {
    fontSize: 17,
    width: 202,
    height: 65,
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
  spinnerText: {
    color: '#fff',
    fontWeight: '800',
  },
});

export default styles;
