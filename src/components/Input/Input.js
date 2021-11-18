import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
export default function Input(props) {
  const {placeHolderText} = props;
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          onChangeText={() => {}}
          placeholder={placeHolderText}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}