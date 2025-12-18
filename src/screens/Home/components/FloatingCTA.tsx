import React from 'react';
import { View, StyleSheet } from 'react-native';
import PrimaryButton from '../../../components/buttons/PrimaryButton';


export default function FloatingCTA() {
  return (
    <View style={styles.container}>
      <PrimaryButton title="pay credit card bill" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#1a1a1a',
  },
});
