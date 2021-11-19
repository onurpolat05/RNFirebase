import {StyleSheet} from 'react-native';
import {colors} from '../../../configs/Colors';
import {h, w} from '../../../utiles/dimensions';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body_container: {
    flex: 1,
  },
  header: {
    color: colors.green,
    margin: 5 ,
    fontSize: 160,
  },
});
