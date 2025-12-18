// import React, { useRef, useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   Animated,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// import AppText from '../../../components/text/AppText';

// const { width } = Dimensions.get('window');

// export default function AnimatedBankCard({
//   bank,
//   type,
//   number,
//   amount,
//   due,
//   primary,
//   index = 0,
// }: any) {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const flipAnimation = useRef(new Animated.Value(0)).current;
//   const scaleAnim = useRef(new Animated.Value(1)).current;

//   // Flip animation
//   const handleFlip = () => {
//     Animated.spring(flipAnimation, {
//       toValue: isFlipped ? 0 : 180,
//       friction: 8,
//       tension: 10,
//       useNativeDriver: true,
//     }).start();
//     setIsFlipped(!isFlipped);
//   };

//   // Scale animation on press
//   const handlePressIn = () => {
//     Animated.spring(scaleAnim, {
//       toValue: 0.98,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1,
//       friction: 3,
//       useNativeDriver: true,
//     }).start();
//   };

//   // Interpolate for flip
//   const frontInterpolate = flipAnimation.interpolate({
//     inputRange: [0, 180],
//     outputRange: ['0deg', '180deg'],
//   });

//   const backInterpolate = flipAnimation.interpolate({
//     inputRange: [0, 180],
//     outputRange: ['180deg', '360deg'],
//   });

//   const frontOpacity = flipAnimation.interpolate({
//     inputRange: [0, 90, 90.1, 180],
//     outputRange: [1, 1, 0, 0],
//   });

//   const backOpacity = flipAnimation.interpolate({
//     inputRange: [0, 89.9, 90, 180],
//     outputRange: [0, 0, 1, 1],
//   });

//   const frontAnimatedStyle = {
//     transform: [{ rotateY: frontInterpolate }],
//     opacity: frontOpacity,
//   };

//   const backAnimatedStyle = {
//     transform: [{ rotateY: backInterpolate }],
//     opacity: backOpacity,
//   };

//   return (
//     <View style={styles.cardWrapper}>
//       <TouchableOpacity
//         activeOpacity={1}
//         onPress={handleFlip}
//         onPressIn={handlePressIn}
//         onPressOut={handlePressOut}
//         style={styles.touchableContainer}
//       >
//         <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
//           <View style={styles.flipContainer}>
//             {/* FRONT CARD */}
//             <Animated.View
//               style={[styles.card, styles.cardFront, frontAnimatedStyle]}
//               pointerEvents={isFlipped ? 'none' : 'auto'}
//             >
//               {/* Gradient overlay effect using View */}
//               <View style={styles.gradientOverlay} />

//               <View style={styles.header}>
//                 <View>
//                   <AppText style={styles.bank}>{bank}</AppText>
//                   <AppText style={styles.type}>{type}</AppText>
//                 </View>

//                 {primary && (
//                   <View style={styles.badge}>
//                     <AppText style={styles.badgeText}>primary</AppText>
//                   </View>
//                 )}
//               </View>

//               <AppText style={styles.number}>{number}</AppText>

//               <View style={styles.footer}>
//                 <View style={styles.amountContainer}>
//                   <AppText style={styles.label}>due amount</AppText>
//                   <AppText style={styles.amount} numberOfLines={1}>
//                     {amount}
//                   </AppText>
//                 </View>

//                 <View style={styles.dueContainer}>
//                   <AppText style={styles.label}>due in</AppText>
//                   <AppText style={styles.due} numberOfLines={1}>
//                     {due}
//                   </AppText>
//                 </View>
//               </View>

//               {/* Shimmer effect line */}
//               <View style={styles.shimmerLine} />
//             </Animated.View>

//             {/* BACK CARD */}
//             {/* <Animated.View
//               style={[styles.card, styles.cardBack, backAnimatedStyle]}
//               pointerEvents={isFlipped ? 'auto' : 'none'}
//             >
//               <View style={styles.backContent}>
//                 <View style={styles.detailsSection}>
//                   <AppText style={styles.backTitle}>card details</AppText>

//                   <View style={styles.detailRow}>
//                     <AppText style={styles.detailLabel}>card limit</AppText>
//                     <AppText style={styles.detailValue}>₹2,50,000</AppText>
//                   </View>

//                   <View style={styles.detailRow}>
//                     <AppText style={styles.detailLabel}>
//                       available limit
//                     </AppText>
//                     <AppText style={styles.detailValue}>₹2,37,550</AppText>
//                   </View>

//                   <View style={styles.detailRow}>
//                     <AppText style={styles.detailLabel}>statement date</AppText>
//                     <AppText style={styles.detailValue}>
//                       15th every month
//                     </AppText>
//                   </View>
//                 </View>

//                 <TouchableOpacity
//                   style={styles.statementButton}
//                   onPress={() => console.log('View statement')}
//                 >
//                   <AppText style={styles.statementButtonText}>
//                     view full statement
//                   </AppText>
//                 </TouchableOpacity>
//               </View>
//             </Animated.View> */}
//             {/* BACK CARD */}
// <Animated.View
//   style={[styles.card, styles.cardBack, backAnimatedStyle]}
//   pointerEvents={isFlipped ? 'auto' : 'none'}
// >
//   <View style={styles.backContent}>
//     <View style={styles.detailsSection}>
//       <AppText style={styles.backTitle}>card details</AppText>

//       <View style={styles.detailRow}>
//         <AppText style={styles.detailLabel}>card limit</AppText>
//         <AppText style={styles.detailValue}>₹2,50,000</AppText>
//       </View>

//       <View style={styles.detailRow}>
//         <AppText style={styles.detailLabel}>
//           available limit
//         </AppText>
//         <AppText style={styles.detailValue}>₹2,37,550</AppText>
//       </View>

//       <View style={styles.detailRow}>
//         <AppText style={styles.detailLabel}>statement date</AppText>
//         <AppText style={styles.detailValue}>
//           15th every month
//         </AppText>
//       </View>
//     </View>
//   </View>
// </Animated.View>

//           </View>
//         </Animated.View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // Main wrapper with proper spacing
//   cardWrapper: {
//     marginBottom: 15,
//     // Add extra space to prevent overlap
//     zIndex: 1,
//   },
//   touchableContainer: {
//     // Ensure touch area is contained
//   },
//   flipContainer: {
//     width: width - 40,
//     height: 200,
//     // Important: prevent children from overflowing
//     overflow: 'visible',
//   },
//   // card: {
//   //   position: 'absolute',
//   //   width: '100%',
//   //   height: 200,
//   //   borderRadius: 20,
//   //   padding: 20,
//   //   backgroundColor: '#0F0F0F',
//   //   borderWidth: 1,
//   //   borderColor: '#1C1C1C',
//   //   // Shadow for depth
//   //   shadowColor: '#000',
//   //   shadowOffset: { width: 0, height: 8 },
//   //   shadowOpacity: 0.6,
//   //   shadowRadius: 16,
//   //   elevation: 8,
//   //   backfaceVisibility: 'hidden',
//   // },
//   cardFront: {
//     // Front specific styles
//   },
//   cardBack: {
//     // Back specific styles
//   },
//   card: {
//   position: 'absolute',
//   width: '100%',
//   height: 200,
//   borderRadius: 20,
//   padding: 20,
//   backgroundColor: '#0F0F0F',
//   borderWidth: 1,
//   borderColor: '#1C1C1C',
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 8 },
//   shadowOpacity: 0.6,
//   shadowRadius: 16,
//   elevation: 8,
//   backfaceVisibility: 'hidden',
//   overflow: 'hidden', // ✅ IMPORTANT: prevents content going outside
// },

// backContent: {
//   flex: 1,
//   justifyContent: 'flex-start', // ✅ avoid pushing content down
// },

// detailsSection: {
//   flexShrink: 1, // ✅ keeps content inside card
// },
//   gradientOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     borderRadius: 20,
//     backgroundColor: 'rgba(163, 255, 18, 0.03)',
//   },
//   shimmerLine: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 2,
//     backgroundColor: '#A3FF12',
//     opacity: 0.3,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   bank: {
//     fontSize: 20,
//     color: '#FFFFFF',
//     fontWeight: '700',
//     textTransform: 'lowercase',
//     letterSpacing: 0.5,
//   },
//   type: {
//     fontSize: 13,
//     color: '#8F8F8F',
//     marginTop: 4,
//     textTransform: 'lowercase',
//   },
//   badge: {
//     backgroundColor: '#A3FF12',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 12,
//   },
//   badgeText: {
//     fontSize: 11,
//     fontWeight: '700',
//     color: '#000',
//     textTransform: 'lowercase',
//   },
//   number: {
//     fontSize: 18,
//     color: '#666',
//     marginBottom: 28,
//     fontFamily: 'monospace',
//     letterSpacing: 2,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     // Ensure content stays within card
//     paddingRight: 4,
//   },
//   amountContainer: {
//     flex: 1,
//     marginRight: 8,
//   },
//   label: {
//     fontSize: 11,
//     color: '#666',
//     marginBottom: 6,
//     textTransform: 'lowercase',
//   },
//   amount: {
//     fontSize: 24,
//     color: '#FFFFFF',
//     fontWeight: '700',
//     // Prevent text overflow
//     flexShrink: 1,
//   },
//   dueContainer: {
//     alignItems: 'flex-end',
//     // Fixed width to prevent overflow
//     minWidth: 80,
//   },
//   due: {
//     fontSize: 18,
//     color: '#A3FF12',
//     fontWeight: '700',
//     textTransform: 'lowercase',
//   },

//   // Back card styles - properly contained


//   backTitle: {
//     fontSize: 12,
//     color: '#666',
//     marginBottom: 16,
//     textTransform: 'lowercase',
//   },
//   detailRow: {
//     marginBottom: 10,
//   },
//   detailLabel: {
//     fontSize: 11,
//     color: '#8F8F8F',
//     marginBottom: 4,
//     textTransform: 'lowercase',
//   },
//   detailValue: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   statementButton: {
//     backgroundColor: '#A3FF12',
//     paddingVertical: 12,
//     borderRadius: 12,
//     alignItems: 'center',
//     // Ensure button stays within card
//     marginTop: 8,
//   },
//   statementButtonText: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#000',
//     textTransform: 'lowercase',
//   },
// });
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { CreditCard, Calendar, Lock } from 'lucide-react-native';

interface AnimatedBankCardProps {
  bank: string;
  type: string;
  number: string;
  amount: string;
  due: string;
  primary?: boolean;
  index: number;
}

export const AnimatedBankCard: React.FC<AnimatedBankCardProps> = ({ 
  bank,
  type,
  number,
  amount,
  due,
  primary = false,
  index
}) => {
  const flipAnimation = useRef(new Animated.Value(0)).current;
  const [isFlipped, setIsFlipped] = useState(false);

  // Card colors based on type or primary
  const getCardColor = () => {
    if (primary) return '#5F6EEA'; // Visa blue
    
    const colors: Record<string, string> = {
      platinum: '#F5576C', // Mastercard red
      gold: '#4FACFE', // Amex blue
      silver: '#9C27B0', // Purple
      classic: '#FF6B35', // Orange
      premium: '#00BFA5', // Teal
    };
    
    return colors[type.toLowerCase()] || '#5F6EEA';
  };

  const handleFlip = () => {
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 1,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setIsFlipped(!isFlipped);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  // Front Side of Card
  const renderFrontCard = () => (
    <Animated.View
      style={[
        styles.card,
        styles.cardFace,
        frontAnimatedStyle,
        {
          backgroundColor: getCardColor(),
        },
      ]}
    >
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.bank}>{bank}</Text>
          <Text style={styles.cardName}>{type}</Text>
        </View>
        <CreditCard size={26} color="#fff" />
      </View>

      <Text style={styles.cardNumber}>{number}</Text>

      <View style={styles.cardFooter}>
        <View>
          <Text style={styles.label}>Outstanding</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>

        <View style={styles.payNow}>
          <Text style={styles.payText}>Pay Now</Text>
        </View>
      </View>
    </Animated.View>
  );

  // Back Side of Card
  const renderBackCard = () => (
    <Animated.View
      style={[
        styles.card,
        styles.cardFace,
        styles.cardBack,
        backAnimatedStyle,
        {
          backgroundColor: getCardColor(),
        },
      ]}
    >
      <View style={styles.magneticStrip} />

      <View style={styles.backContent}>
        <View style={styles.cvvSection}>
          <Text style={styles.backLabel}>CVV</Text>
          <View style={styles.cvvBox}>
            <Text style={styles.cvvText}>•••</Text>
          </View>
        </View>

        <View style={styles.cardDetails}>
          <View style={styles.detailRow}>
            <Calendar size={16} color="rgba(255,255,255,0.8)" />
            <View style={styles.detailText}>
              <Text style={styles.backLabel}>Valid Thru</Text>
              <Text style={styles.detailValue}>12/28</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <Lock size={16} color="rgba(255,255,255,0.8)" />
            <View style={styles.detailText}>
              <Text style={styles.backLabel}>Card Type</Text>
              <Text style={styles.detailValue}>{type.toUpperCase()}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.backFooter}>
          For customer service call 1800-XXX-XXXX
        </Text>
      </View>
    </Animated.View>
  );

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handleFlip}
      style={styles.cardContainer}
    >
      {renderFrontCard()}
      {renderBackCard()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 16,
    height: 200,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    height: 200,
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    paddingTop: 0,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  bank: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 4,
  },
  cardName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  cardNumber: {
    fontSize: 20,
    color: '#fff',
    letterSpacing: 2,
    marginBottom: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 2,
  },
  amount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  payNow: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  payText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  // Back side styles
  magneticStrip: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginHorizontal: -24,
    marginTop: 16,
    marginBottom: 16,
  },
  backContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  cvvSection: {
    marginBottom: 12,
  },
  backLabel: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.6)',
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  cvvBox: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  cvvText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    letterSpacing: 4,
  },
  cardDetails: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailText: {
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
    marginTop: 2,
  },
  backFooter: {
    fontSize: 8,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    marginTop: 4,
  },
});