import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  Animated,
  TouchableOpacity,
  StyleSheet 
} from 'react-native';
import { Star, Gift, Trophy, Sparkles } from 'lucide-react-native';

// Color Palette - Replace with your colors
const COLORS = {
  primary: '#A3FF12',
  secondary: '#0E0E0E',
  accent: '#FD79A8',
  background: '#0F0F1E',
  cardBg: '#0F0F0F',
  text: '#FFFFFF',
  textSecondary: '#A0A0B8',
  success: '#00D9A3',
  gold: '#FFD700',
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

// RewardItem Component
const RewardItem: React.FC<{
  reward: Reward;
  onPress: () => void;
  index: number;
}> = ({ reward, onPress, index }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        delay: index * 100,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        delay: index * 100,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const getIcon = () => {
    const iconProps = { size: 32, color: COLORS.gold };
    switch (reward.icon) {
      case 'star': return <Star {...iconProps} />;
      case 'gift': return <Gift {...iconProps} />;
      case 'trophy': return <Trophy {...iconProps} />;
      case 'sparkles': return <Sparkles {...iconProps} />;
    }
  };

  return (
    <Animated.View
      style={[
        styles.rewardItem,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.rewardContent}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          {getIcon()}
        </View>
        
        <View style={styles.rewardInfo}>
          <Text style={styles.rewardTitle}>{reward.title}</Text>
          <Text style={styles.rewardPoints}>{reward.points} points</Text>
          
          {reward.progress !== undefined && (
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <Animated.View
                  style={[
                    styles.progressFill,
                    { width: `${reward.progress}%` },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>{reward.progress}%</Text>
            </View>
          )}
        </View>

        <View
          style={[
            styles.statusBadge,
            reward.claimed && styles.claimedBadge,
          ]}
        >
          <Text style={styles.statusText}>
            {reward.claimed ? 'Claimed' : 'Claim'}
          </Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rewardItem: {
    marginBottom: 16,
  },
  rewardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.secondary + '20',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rewardInfo: {
    flex: 1,
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  rewardPoints: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: COLORS.background,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.success,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    width: 40,
  },
  statusBadge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  claimedBadge: {
    backgroundColor: COLORS.textSecondary + '30',
  },
  statusText: {
    color: COLORS.text,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default RewardItem;
