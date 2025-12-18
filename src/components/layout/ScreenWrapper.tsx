
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function ScreenWrapper({ children }: any) {
  return (
    <SafeAreaView style={styles.safe}>
      <BottomSheetModalProvider>
        <View style={styles.container}>{children}</View>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});