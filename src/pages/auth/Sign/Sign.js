import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Sign.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../../../utiles/authErrorMessageParser';
const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};
export default function Sign({navigation}) {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    navigation.navigate('Login');
  }
  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
       setLoading(true);
       await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.repassword,
      );
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('Login');
      setLoading(false);
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
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
              values={values.usermail}
              placeHolderText="e-postanızı giriniz.."
            />
            <Input
              onType={handleChange('password')}
              values={values.password}
              placeHolderText="şifrenizi giriniz.."
              isSecure
            />
            <Input
              onType={handleChange('repassword')}
              values={values.repassword}
              placeHolderText="şifrenizi tekrar giriniz.."
              isSecure
            />
            <Button text="Kayıt Ol" loading={loading} onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Geri" theme="secondary" onPress={handleLogin} />
    </SafeAreaView>
  );
}
