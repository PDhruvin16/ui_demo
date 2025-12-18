import React from 'react';
import { View, StyleSheet } from 'react-native';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import AppText from '../../../components/text/AppText';
// import AppText from '../text/AppText';
// import PrimaryButton from '../buttons/PrimaryButton';

export default function RewardsCard() {
  return (
    <View style={styles.rewardsCard}>
      <View>
        <AppText style={styles.rewardsLabel}>cred coins</AppText>
        <AppText style={styles.rewardsValue}>2,450</AppText>
      </View>

      <PrimaryButton title="redeem" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  rewardsCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  rewardsLabel: { fontSize: 14, color: '#666', marginBottom: 5 },
  rewardsValue: { fontSize: 32, color: '#A3FF12', fontWeight: 'bold' },
});
