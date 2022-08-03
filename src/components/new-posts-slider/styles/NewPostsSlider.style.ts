import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    marginLeft: 4,
  },
  headerButton: {
    fontSize: 14,
    marginRight: 16,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  image: {
    height: 100,
    width: 100,
  },
  description: {
    marginLeft: 8,
  },
  title: {
    width: 185,
    fontSize: 18,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
  },
});

export default styles;
