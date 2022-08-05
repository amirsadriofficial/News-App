import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 40,
    marginTop: 16,
    marginLeft: 18,
    width: 350,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginLeft: 18,
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    marginLeft: 8,
    color: '#282828',
  },
});

export default styles;
