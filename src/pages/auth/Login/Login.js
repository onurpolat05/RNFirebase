import React from 'react';
import {SafeAreaView, SafeArray, StyleSheet, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Login.style';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Input placeHolderText="e-postanızı giriniz.." />
      <Input placeHolderText="şifrenizi giriniz.." />
      <Button text="Giriş Yap" />
    </SafeAreaView>
  );
}
