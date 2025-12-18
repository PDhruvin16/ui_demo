import React, { useRef, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import ScreenWrapper from '../../components/layout/ScreenWrapper';
import AppText from '../../components/text/AppText';
import PrimaryButton from '../../components/buttons/PrimaryButton';

export default function LoginScreen({ navigation }: any) {
  const sheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['45%'], []);

  return (
    <ScreenWrapper style={styles.container}>
      {/* ----------- MAIN CONTENT ----------- */}
      <View style={styles.content}>
        <View>
          <AppText variant="title" style={styles.heading}>
            pay.
          </AppText>
          <AppText variant="title" style={styles.heading}>
            manage.
          </AppText>
          <AppText variant="title" style={styles.headingAccent}>
            grow.
          </AppText>

          <AppText variant="body" style={styles.subText}>
            One app for all your financial needs
          </AppText>
        </View>

        <View style={styles.footer}>
          <PrimaryButton
            title="CONTINUE"
            onPress={() => sheetRef.current?.present()}
          />
        </View>
      </View>

      {/* ----------- BOTTOM SHEET ----------- */}
      <BottomSheetModal
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={styles.sheetBg}
        handleIndicatorStyle={styles.indicator}
        enablePanDownToClose
      >
        <BottomSheetScrollView contentContainerStyle={styles.sheetContent}>
          <AppText variant="subtitle" style={styles.sheetTitle}>
            Login to continue
          </AppText>

          <AppText variant="body" style={styles.sheetDesc}>
            We’ll never share your details without your permission.
          </AppText>

          <PrimaryButton
            title="CONTINUE WITH MOBILE"
            style={styles.sheetButton}
            onPress={() => navigation.replace('Main')}
          />

          <AppText variant="caption" style={styles.terms}>
            By continuing, you agree to our Terms & Privacy Policy
          </AppText>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 80,
  },

  heading: {
    fontSize: 42,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
  },

  headingAccent: {
    fontSize: 42,
    fontWeight: '800',
    color: '#E8FFD1',
    letterSpacing: 1,
  },

  subText: {
    marginTop: 20,
    color: '#9A9A9A',
    fontSize: 14,
    letterSpacing: 0.5,
  },

  footer: {
    marginBottom: 40,
  },

  /* -------- Bottom Sheet -------- */

  sheetBg: {
    backgroundColor: '#0E0E0E',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  indicator: {
    backgroundColor: '#444',
    width: 40,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 8,
  },

  sheetContent: {
    padding: 24,
  },

  sheetTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  sheetDesc: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 30,
  },

  sheetButton: {
    marginTop: 10,
  },

  terms: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
