import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Button( {text, onPress, loading, icon, theme="primary"} ) {

  
  return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles[theme].container]}
        disabled={loading}>
        {loading ? (<ActivityIndicator color="white" />):(
          <View style={styles[theme].button_container}>
        <Icon name={icon} color="white" size={18} />
        <Text style={styles[theme].title}>{text}</Text>
        </View>
        )}
        
      </TouchableOpacity>
  );
}

