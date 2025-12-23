// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function RewardsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Reward UI</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#A3FF12',
//     fontSize: 18,
//   },
// });
import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Animated,
  StyleSheet 
} from 'react-native';
import { Sparkles } from 'lucide-react-native';
import RewardItem from './components/RewardItem';
import RewardCarousel from './components/RewardCarousel';

// Color Palette - Replace with your colors
const COLORS = {
  primary: '#0F0F0F',
  secondary: '#A29BFE',
 
 
  text: '#FFFFFF',

  success: '#00D9A3',
  gold: '#FFD700',
    cardBg: '#1A1F3A',
  background: '#000000',
  surface: '#0E0E0E',
  textPrimary: '#FFFFFF',
  textSecondary: '#9A9A9A',
  accent: '#A3FF12',
};

// Types
interface Reward {
  id: string;
  title: string;
  points: number;
  icon: 'star' | 'gift' | 'trophy' | 'sparkles';
  claimed: boolean;
  progress?: number;
}




// Main App Component
export default function RewardScreen() {
  const [totalPoints] = useState(2580);
  const [rewards, setRewards] = useState<Reward[]>([
    { id: '1', title: 'Daily Login Bonus', points: 50, icon: 'star', claimed: false, progress: 80 },
    { id: '2', title: 'Complete 5 Tasks', points: 150, icon: 'trophy', claimed: false, progress: 60 },
    { id: '3', title: 'Invite 3 Friends', points: 300, icon: 'gift', claimed: false, progress: 33 },
    { id: '4', title: 'Premium Unlock', points: 500, icon: 'sparkles', claimed: true },
    { id: '5', title: 'Week Streak', points: 200, icon: 'star', claimed: false, progress: 71 },
  ]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleRewardPress = (reward: Reward) => {
    if (!reward.claimed) {
      setRewards(prev =>
        prev.map(r =>
          r.id === reward.id ? { ...r, claimed: true } : r
        )
      );
    }
  };

  const featuredRewards = rewards.slice(0, 3);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.headerTitle}>My Rewards</Text>
          <View style={styles.pointsContainer}>
            <Sparkles size={24} color={COLORS.gold} />
            <Text style={styles.pointsText}>{totalPoints}</Text>
          </View>
        </Animated.View>

        {/* Carousel */}
        <RewardCarousel
          rewards={featuredRewards}
          onRewardPress={handleRewardPress}
        />

        {/* All Rewards List */}
        <View style={styles.listContainer}>
          <Text style={styles.sectionTitle}>All Rewards</Text>
          {rewards.map((reward, index) => (
            <RewardItem
              key={reward.id}
              reward={reward}
              onPress={() => handleRewardPress(reward)}
              index={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  pointsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.gold,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginLeft: 20,
    marginBottom: 16,
  },

  listContainer: {
    padding: 20,
    paddingTop: 32,
  },

});