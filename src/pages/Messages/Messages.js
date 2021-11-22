import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInput/ContentInputModal';
import styles from './Messages.style';
export default function Messages() {
  const [inputModalVisible, setIputModalVisible] = useState(false);
  function handleInputToggle() {
    setIputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    console.log(content);
  }
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
}
