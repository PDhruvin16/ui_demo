// import React, { useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   Animated, 
//   Dimensions,
//   TouchableOpacity,
//   StyleSheet 
// } from 'react-native';
// import { Trophy } from 'lucide-react-native';

// const { width } = Dimensions.get('window');

// // Color Palette - Replace with your colors
// const COLORS = {
//   primary: '#A3FF12',
//   secondary: '#0E0E0E',
//   accent: '#FD79A8',
//   background: '#0F0F1E',
//   cardBg: '#0F0F0F',
//   text: '#FFFFFF',
//   textSecondary: '#A0A0B8',
//   success: '#00D9A3',
//   gold: '#FFD700',
// };

// // Types
// interface Reward {
//   id: string;
//   title: string;
//   points: number;
//   icon: 'star' | 'gift' | 'trophy' | 'sparkles';
//   claimed: boolean;
//   progress?: number;
// }

// // CarouselCard Component
// const CarouselCard: React.FC<{
//   reward: Reward;
//   onPress: () => void;
//   scrollX: Animated.Value;
//   index: number;
// }> = ({ reward, onPress, scrollX, index }) => {
//   const inputRange = [
//     (index - 1) * width * 0.85,
//     index * width * 0.85,
//     (index + 1) * width * 0.85,
//   ];

//   const scale = scrollX.interpolate({
//     inputRange,
//     outputRange: [0.9, 1, 0.9],
//     extrapolate: 'clamp',
//   });

//   const opacity = scrollX.interpolate({
//     inputRange,
//     outputRange: [0.6, 1, 0.6],
//     extrapolate: 'clamp',
//   });

//   return (
//     <Animated.View
//       style={[
//         styles.carouselCard,
//         {
//           transform: [{ scale }],
//           opacity,
//         },
//       ]}
//     >
//       <TouchableOpacity
//         style={styles.carouselCardContent}
//         onPress={onPress}
//         activeOpacity={0.9}
//       >
//         <View style={styles.carouselIconContainer}>
//           <Trophy size={48} color={COLORS.gold} />
//         </View>
//         <Text style={styles.carouselTitle}>{reward.title}</Text>
//         <Text style={styles.carouselPoints}>{reward.points} Points</Text>
//         <View style={styles.carouselButton}>
//           <Text style={styles.carouselButtonText}>View Details</Text>
//         </View>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// };

// // RewardCarousel Component
// const RewardCarousel: React.FC<{
//   rewards: Reward[];
//   onRewardPress: (reward: Reward) => void;
// }> = ({ rewards, onRewardPress }) => {
//   const scrollX = useRef(new Animated.Value(0)).current;

//   return (
//     <View style={styles.carouselContainer}>
//       <Text style={styles.sectionTitle}>Featured Rewards</Text>
//       <Animated.ScrollView
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//         contentContainerStyle={styles.carouselContent}
//       >
//         {rewards.map((reward, index) => (
//           <CarouselCard
//             key={reward.id}
//             reward={reward}
//             onPress={() => onRewardPress(reward)}
//             scrollX={scrollX}
//             index={index}
//           />
//         ))}
//       </Animated.ScrollView>

//       <View style={styles.pagination}>
//         {rewards.map((_, index) => {
//           const inputRange = [
//             (index - 1) * width * 0.85,
//             index * width * 0.85,
//             (index + 1) * width * 0.85,
//           ];

//           const dotWidth = scrollX.interpolate({
//             inputRange,
//             outputRange: [8, 24, 8],
//             extrapolate: 'clamp',
//           });

//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.3, 1, 0.3],
//             extrapolate: 'clamp',
//           });

//           return (
//             <Animated.View
//               key={index}
//               style={[
//                 styles.paginationDot,
//                 { width: dotWidth, opacity },
//               ]}
//             />
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   carouselContainer: {
//     marginTop: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: COLORS.text,
//     marginLeft: 20,
//     marginBottom: 16,
//   },
//   carouselContent: {
//     paddingLeft: 20,
//     gap: 16,
//   },
//   carouselCard: {
//     width: width * 0.75,
//     marginRight: 16,
//   },
//   carouselCardContent: {
//     backgroundColor: COLORS.cardBg,
//     borderRadius: 20,
//     padding: 24,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: COLORS.secondary + '30',
//   },
//   carouselIconContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     backgroundColor: COLORS.primary + '20',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 16,
//   },
//   carouselTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: COLORS.text,
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   carouselPoints: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: COLORS.primary,
//     marginBottom: 16,
//   },
//   carouselButton: {
//     backgroundColor: COLORS.primary,
//     paddingHorizontal: 24,
//     paddingVertical: 12,
//     borderRadius: 12,
//   },
//   carouselButtonText: {
//     color: COLORS.text,
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//     gap: 8,
//   },
//   paginationDot: {
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: COLORS.primary,
//   },
// });

// export default RewardCarousel;
import React, { useRef } from 'react';
import { 
  View, 
  Text, 
  Animated, 
  Dimensions,
  TouchableOpacity,
  StyleSheet 
} from 'react-native';
import { Trophy } from 'lucide-react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ✅ Perfect centering calculations
const CARD_WIDTH = SCREEN_WIDTH * 0.75;
const SPACING = 16;
const SIDE_SPACING = (SCREEN_WIDTH - CARD_WIDTH) / 2; // ✅ Centers the card

// Color Palette
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

// CarouselCard Component
const CarouselCard: React.FC<{
  reward: Reward;
  onPress: () => void;
  scrollX: Animated.Value;
  index: number;
}> = ({ reward, onPress, scrollX, index }) => {
  // ✅ Correct input range for perfect centering
  const inputRange = [
    (index - 1) * CARD_WIDTH,
    index * CARD_WIDTH,
    (index + 1) * CARD_WIDTH,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.9, 1, 0.9],
    extrapolate: 'clamp',
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.6, 1, 0.6],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.carouselCard,
        {
          transform: [{ scale }],
          opacity,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.carouselCardContent}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <View style={styles.carouselIconContainer}>
          <Trophy size={48} color={COLORS.gold} />
        </View>
        <Text style={styles.carouselTitle}>{reward.title}</Text>
        <Text style={styles.carouselPoints}>{reward.points} Points</Text>
        <View style={styles.carouselButton}>
          <Text style={styles.carouselButtonText}>View Details</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

// RewardCarousel Component
const RewardCarousel: React.FC<{
  rewards: Reward[];
  onRewardPress: (reward: Reward) => void;
}> = ({ rewards, onRewardPress }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.sectionTitle}>Featured Rewards</Text>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH} // ✅ Snap exactly to card width
        decelerationRate="fast"
        contentContainerStyle={styles.carouselContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true } // ✅ Better performance
        )}
        scrollEventThrottle={16}
      >
        {rewards.map((reward, index) => (
          <CarouselCard
            key={reward.id}
            reward={reward}
            onPress={() => onRewardPress(reward)}
            scrollX={scrollX}
            index={index}
          />
        ))}
      </Animated.ScrollView>

      {/* ✅ Fixed Pagination with perfect sync */}
      <View style={styles.pagination}>
        {rewards.map((_, index) => {
          const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            (index + 1) * CARD_WIDTH,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 24, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.paginationDot,
                { width: dotWidth, opacity },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginLeft: 20,
    marginBottom: 16,
  },
  carouselContent: {
    paddingLeft: SIDE_SPACING - SPACING / 2, // ✅ Perfect centering
    paddingRight: SIDE_SPACING - SPACING / 2,
  },
  carouselCard: {
    width: CARD_WIDTH,
    paddingHorizontal: SPACING / 2, // ✅ Equal spacing on both sides
  },
  carouselCardContent: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.secondary + '30',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  carouselIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary + '20',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  carouselPoints: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 16,
  },
  carouselButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  carouselButtonText: {
    color: COLORS.secondary,
    fontSize: 14,
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 8,
  },
  paginationDot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
});

export default RewardCarousel;