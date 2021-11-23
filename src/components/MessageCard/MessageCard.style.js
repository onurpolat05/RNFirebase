import {StyleSheet} from 'react-native';
import {colors} from '../../configs/Colors';
export default StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    margin: 2,
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.green,
    shadowOpacity: 5,
    marginTop: 5,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  user: {
    color: 'white',
  },
  date: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    alignItems: 'flex-end',
  },
  dislike_container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
  },
  dislike_count_container: {
    backgroundColor: colors.green,
    padding: 3,
    borderRadius: 20,
    marginRight: 3,
  },
  dislike_count_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  dislike_text: {
    color: colors.green,
    fontWeight: 'bold',
  },
});
