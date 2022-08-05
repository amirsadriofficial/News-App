import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderBottomColor: '#999',
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 32,
    fontWeight: '500',
    color: '#282828',
  },
});

export default styles;
