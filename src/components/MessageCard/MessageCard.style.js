import {StyleSheet} from 'react-native';
import {colors} from '../../configs/Colors';
export default StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    margin: 2,
    shadowColor: 'black',
    shadowRadius: 5,
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
});
