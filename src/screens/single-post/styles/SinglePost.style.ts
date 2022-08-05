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
    marginRight: 32,
  },
  container: {
    marginHorizontal: 16,
  },
  image: {
    height: 300,
    width: 350,
    borderRadius: 32,
    marginVertical: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#282828',
    marginVertical: 8,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    marginRight: 4,
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tags: {
    marginLeft: 4,
  },
  date: {
    marginLeft: 4,
  },
  description: {
    fontSize: 16,
    color: '#282828',
    marginVertical: 8,
  },
});

export default styles;
