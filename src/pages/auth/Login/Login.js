import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utiles/authErrorMessageParser'
const initialFormValues = {
  usermail: '',
  password: '',
};

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  function handleSignUp() {
    navigation.navigate('Sign');
  }
  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>BaNa nE?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('usermail')}
              value={values.usermail}
              placeHolderText="e-postanızı giriniz.."
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeHolderText="şifrenizi giriniz.."
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={handleSignUp} />
    </SafeAreaView>
  );
}
