import {StyleSheet} from 'react-native';
import {colors} from '../../configs/Colors';
const base_style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 5,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.green,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: colors.green,
    },
    title: {
      ...base_style.title,
      color: colors.green,
    },
  }),
};
