import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';

import ScreenWrapper from '../../components/layout/ScreenWrapper';
import AppText from '../../components/text/AppText';
import IconButton from '../../components/buttons/IconButton';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import CreditScoreCard from './components/CreditScore';
// import BankCard from './components/BankCard';
import RewardsCard from './components/RewardCard';
import FloatingCTA from './components/FloatingCTA';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AnimatedBankCard } from './components/BankCard';
// import AnimatedBankCard from './components/BankCard';

/* 🔁 Reusable Cards */

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;


// Add parallax effect to header
const headerOpacity = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [1, 0.8],
  extrapolate: 'clamp',
});

const headerTranslate = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [0, -20],
  extrapolate: 'clamp',
});
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <Animated.View
  style={{
    opacity: headerOpacity,
    transform: [{ translateY: headerTranslate }],
  }}
>

  {/* Header content */}
      <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={styles.profileContainer}
              // onPress={handleDrawerToggle}
            >
              <Image
                source={{
                  uri: 'https://i.pravatar.cc/300',
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
            <View>
              <AppText style={styles.greeting}>good evening</AppText>
              <AppText style={styles.userName}>rahul sharma</AppText>
            </View>
          </View>

          <View style={styles.headerIcons}>
            {/* <IconButton icon="bell" onPress={() => {}} /> */}
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#FFFFFF"
              />
            </TouchableOpacity>
            {/* <IconButton icon="user" onPress={() => {}} /> */}
            <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
              <Ionicons name="person-outline" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
</Animated.View>
    

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          //   { useNativeDriver: true }
          // )}
          scrollEventThrottle={16}
        >
          {/* ✅ Credit Score Card (COMMON) */}
          <CreditScoreCard />

          {/* Quick Actions (AS-IT-IS) */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>quick actions</AppText>

            <View style={styles.quickActions}>
              {[
                { emoji: '💳', label: 'pay bills' },
                { emoji: '📊', label: 'statements' },
                { emoji: '🎁', label: 'rewards' },
                { emoji: '📱', label: 'scan' },
              ].map((item, index) => (
                <TouchableOpacity key={index} style={styles.actionCard}>
                  <View style={styles.actionIcon}>
                    <AppText style={styles.actionEmoji}>{item.emoji}</AppText>
                  </View>
                  <AppText style={styles.actionText}>{item.label}</AppText>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Cards Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <AppText style={styles.sectionTitle}>your cards</AppText>
              <TouchableOpacity>
                <AppText style={styles.seeAll}>see all</AppText>
              </TouchableOpacity>
            </View>

            <View style={{ gap: 15 }}>
              {/* ✅ Bank Cards (COMMON) */}
              <AnimatedBankCard
      bank="hdfc bank"
      type="platinum"
      number="•••• 4567"
      amount="₹12,450"
      due="5 days"
      primary
      index={0}
    />

    <AnimatedBankCard
      bank="axis bank"
      type="platinum"
      number="•••• 8901"
      amount="₹8,230"
      due="12 days"
      
      index={1}
    />
            </View>
          </View>

          {/* ✅ Rewards Card (COMMON) */}
          <View style={styles.section}>
            <RewardsCard />
          </View>

          {/* Offers Section (AS-IT-IS) */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <AppText style={styles.sectionTitle}>exclusive offers</AppText>
              <TouchableOpacity>
                <AppText style={styles.seeAll}>see all</AppText>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.offersScroll}
            >
              {[
                {
                  brand: 'zomato',
                  text: 'get 30% off on orders above ₹500',
                },
                {
                  brand: 'amazon',
                  text: 'flat ₹200 cashback on shopping',
                },
                {
                  brand: 'swiggy',
                  text: 'free delivery on first order',
                },
              ].map((offer, index) => (
                <View key={index} style={styles.offerCard}>
                  <AppText style={styles.offerBrand}>{offer.brand}</AppText>
                  <AppText style={styles.offerText}>{offer.text}</AppText>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={{ height: 40 }} />
        </ScrollView>

        {/* ✅ Floating CTA (COMMON) */}
        <FloatingCTA />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black
  },
    profileContainer: {
    marginRight: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 16,
  },
    actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2a2a2a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  offerText: {
    fontSize: 13,
    color: '#999',
    lineHeight: 18,
    textTransform: 'lowercase',
  },
  actionEmoji: {
    fontSize: 24,
  },
  actionText: {
    fontSize: 11,
    color: '#fff',
    textTransform: 'lowercase',
    textAlign: 'center',
  },
  greeting: {
    fontSize: 14,
    color: '#8F8F8F', // Lighter gray
    textTransform: 'lowercase',
    letterSpacing: 0.5,
  },
     section: {
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
    headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
    offersScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'lowercase',
    marginBottom: 15,
  },
  seeAll: {
    fontSize: 14,
    color: '#A3FF12',
    textTransform: 'lowercase',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 28, // Bigger
    color: '#FFFFFF',
    fontWeight: '700', // Bolder
    textTransform: 'lowercase',
    marginTop: 4,
    letterSpacing: -0.5,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0F0F0F',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1C1C1C',
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#A3FF12',
    borderWidth: 2,
    borderColor: '#1C1C1C',
  },
  actionCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0F0F0F',
    padding: 18,
    borderRadius: 16,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#1C1C1C',
  },
  offerCard: {
    backgroundColor: '#0F0F0F',
    borderRadius: 16,
    padding: 24,
    width: 240,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#1C1C1C',
  },
  offerBrand: {
    fontSize: 18,
    color: '#A3FF12',
    fontWeight: '700',
    marginBottom: 12,
    textTransform: 'lowercase',
  },
    scrollView: {
    flex: 1,
  },
});