import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input({placeHolderText,value, onType, iconName, isSecure}) {
  return (
    <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          onChangeText={onType}
          placeholder={placeHolderText}
          value={value}
          secureTextEntry={isSecure}
        />
        <Icon name={iconName} size={25} color="gray" />
    </View>
  );
}