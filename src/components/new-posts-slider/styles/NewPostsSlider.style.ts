import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginLeft: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 4,
    color: '#282828',
  },
  headerButton: {
    fontSize: 14,
    marginRight: 14,
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
    height: 75,
    fontSize: 18,
    marginBottom: 8,
    color: '#282828',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    marginLeft: 4,
  },
});

export default styles;
