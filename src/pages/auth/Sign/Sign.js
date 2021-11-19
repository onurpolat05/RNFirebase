import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Sign.style';
import {Formik} from 'formik';
const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};
export default function Sign({navigation}) {
  function handleLogin() {
    navigation.navigate('Login');
  }
  function handleFormSubmit(formValues) {
    console.log(formValues);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>BaNa nE?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('usermail')}
              values={values.usermail}
              placeHolderText="e-postanızı giriniz.."
            />
            <Input
              onType={handleChange('password')}
              values={values.password}
              placeHolderText="şifrenizi giriniz.."
            />
            <Input
              onType={handleChange('repassword')}
              values={values.repassword}
              placeHolderText="şifrenizi tekrar giriniz.."
            />
            <Button text="Kayıt Ol" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Geri" theme="secondary" onPress={handleLogin} />
    </SafeAreaView>
  );
}
