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
    marginRight: 16,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 4,
    borderRadius: 8,
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
    color: '#282828',
  },
  dateSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    width: 150,
    marginLeft: 4,
  },
});

export default styles;
