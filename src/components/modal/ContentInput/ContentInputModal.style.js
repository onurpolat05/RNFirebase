import {StyleSheet} from 'react-native';
import {h, w} from '../../../utiles/dimensions';
export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: h / 3,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input_container: {
    flex: 1,
  }
});
