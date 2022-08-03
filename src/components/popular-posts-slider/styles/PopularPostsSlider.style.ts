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
    // fontSize: 24,
    marginBottom: 8,
    // paddingLeft: 4,
  },
  headerTitle: {
    fontSize: 24,
    // marginBottom: 8,
    paddingLeft: 4,
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
  },
  date: {
    fontSize: 12,
    width: 150,
  },
});

export default styles;
