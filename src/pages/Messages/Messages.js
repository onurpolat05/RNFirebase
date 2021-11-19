import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import styles from './Messages.style';
export default function Messages() {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" />
    </SafeAreaView>
  );
}
