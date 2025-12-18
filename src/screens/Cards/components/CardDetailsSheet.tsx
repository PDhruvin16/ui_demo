
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import {
//   TrendingUp,
//   Sparkles,
//   Gift,
//   ChevronRight,
// } from 'lucide-react-native';
// import { colors } from '../../../theme/colors';
// import { Card } from '../../../types/card.type';

// interface CardDetailSheetProps {
//   card: Card;
// }

// interface Stat {
//   icon: React.ComponentType<any>;
//   label: string;
//   value: string;
//   color: string;
// }

// export const CardDetailSheet: React.FC<CardDetailSheetProps> = ({ card }) => {
//   const stats: Stat[] = [
//     {
//       icon: TrendingUp,
//       label: 'Credit Limit',
//       value: `₹${card?.creditLimit?.toLocaleString()}`,
//       color: colors.accent,
//     },
//     {
//       icon: Sparkles,
//       label: 'Rewards',
//       value: `${card?.rewardPoints} pts`,
//       color: '#F59E0B',
//     },
//     {
//       icon: Gift,
//       label: 'Cashback',
//       value: `₹${card?.cashback}`,
//       color: '#EC4899',
//     },
//   ];

//   return (
//     <View style={styles.sheet}>
//       <View style={styles.sheetHandle} />

//       <Text style={styles.sheetTitle}>Card Details</Text>

//       <View style={styles.statsRow}>
//         {stats.map((stat, index) => {
//           const IconComponent = stat.icon;
//           return (
//             <View key={index} style={styles.statCard}>
//               <IconComponent size={22} color={stat.color} />
//               <Text style={styles.statLabel}>{stat.label}</Text>
//               <Text style={styles.statValue}>{stat.value}</Text>
//             </View>
//           );
//         })}
//       </View>

//       <View style={styles.detailRow}>
//         <Text style={styles.detailLabel}>Payment Due Date</Text>
//         <Text style={styles.detailValue}>{card.dueDate}</Text>
//       </View>

//       <View style={styles.detailRow}>
//         <Text style={styles.detailLabel}>Minimum Due</Text>
//         <Text style={styles.detailValue}>
//           ₹{card.minimumDue.toLocaleString()}
//         </Text>
//       </View>

//       <View style={styles.detailRow}>
//         <Text style={styles.detailLabel}>Available Credit</Text>
//         <Text style={[styles.detailValue, { color: colors.accent }]}>
//           ₹{(card.creditLimit - card.outstanding).toLocaleString()}
//         </Text>
//       </View>

//       <TouchableOpacity style={styles.payButton} activeOpacity={0.8}>
//         <Text style={styles.payButtonText}>Pay Full Amount</Text>
//       </TouchableOpacity>

//       {['View Transactions', 'Card Settings', 'Reward History'].map(
//         (item, index, array) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.menuRow,
//               index === array.length - 1 && styles.menuRowLast,
//             ]}
//             activeOpacity={0.7}
//           >
//             <Text style={styles.menuText}>{item}</Text>
//             <ChevronRight size={18} color={colors.textSecondary} />
//           </TouchableOpacity>
//         ),
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   sheet: {
//     backgroundColor: colors.surface,
//     borderTopLeftRadius: 24,
//     borderTopRightRadius: 24,
//     padding: 24,
//     marginTop: 100,
//     paddingBottom: 40,
//   },
//   sheetHandle: {
//     width: 40,
//     height: 4,
//     backgroundColor: colors.textSecondary,
//     opacity: 0.3,
//     borderRadius: 2,
//     alignSelf: 'center',
//     marginBottom: 24,
//   },
//   sheetTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: colors.textPrimary,
//     marginBottom: 20,
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   statCard: {
//     flex: 1,
//     backgroundColor: 'rgba(255,255,255,0.05)',
//     borderRadius: 16,
//     padding: 16,
//     alignItems: 'center',
//     marginHorizontal: 4,
//   },
//   statLabel: {
//     fontSize: 11,
//     color: colors.textSecondary,
//     marginTop: 8,
//     marginBottom: 4,
//     textAlign: 'center',
//   },
//   statValue: {
//     fontSize: 16,
//     color: colors.textPrimary,
//     fontWeight: '700',
//   },
//   detailRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   detailLabel: {
//     color: colors.textSecondary,
//     fontSize: 14,
//   },
//   detailValue: {
//     color: colors.textPrimary,
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   payButton: {
//     backgroundColor: colors.accent,
//     padding: 16,
//     borderRadius: 12,
//     marginTop: 16,
//     marginBottom: 16,
//   },
//   payButtonText: {
//     textAlign: 'center',
//     fontWeight: '700',
//     fontSize: 16,
//     color: '#000000',
//   },
//   menuRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: 'rgba(255,255,255,0.1)',
//   },
//   menuRowLast: {
//     borderBottomWidth: 0,
//   },
//   menuText: {
//     color: colors.textPrimary,
//     fontSize: 15,
//   },
// });

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native';
import {
  TrendingUp,
  Sparkles,
  Gift,
  ChevronRight,
} from 'lucide-react-native';

const colors = {
    cardBg: '#1A1F3A',
  // accent: '#6C5CE7',
   background: '#000000',
  surface: '#0E0E0E',
  textPrimary: '#FFFFFF',
  textSecondary: '#9A9A9A',
  accent: '#A3FF12',
};

interface Card {
  id: string;
  name: string;
  bankName: string;
  type: 'visa' | 'mastercard' | 'amex';
  lastFour: string;
  outstanding: number;
  creditLimit: number;
  rewardPoints: number;
  cashback: number;
  dueDate: string;
  minimumDue: number;
}

interface CardDetailSheetProps {
  card: Card;
  scrollY: Animated.Value;
}

interface Stat {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  color: string;
}

export const CardDetailSheet: React.FC<CardDetailSheetProps> = ({ card, scrollY }) => {
  const stats: Stat[] = [
    {
      icon: TrendingUp,
      label: 'Credit Limit',
      value: `₹${card?.creditLimit?.toLocaleString()}`,
      color: colors.accent,
    },
    {
      icon: Sparkles,
      label: 'Rewards',
      value: `${card?.rewardPoints} pts`,
      color: '#F59E0B',
    },
    {
      icon: Gift,
      label: 'Cashback',
      value: `₹${card?.cashback}`,
      color: '#EC4899',
    },
  ];

  return (
    <View style={styles.sheetContainer}>
      {/* Sticky Sheet Header with Handle */}
      <View style={styles.stickyHeader}>
        <View style={styles.sheetHandle} />
        <Text style={styles.sheetTitle}>Card Details</Text>
      </View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.statsRow}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <View key={index} style={styles.statCard}>
                <IconComponent size={22} color={stat.color} />
                <Text style={styles.statLabel}>{stat.label}</Text>
                <Text style={styles.statValue}>{stat.value}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Payment Due Date</Text>
          <Text style={styles.detailValue}>{card.dueDate}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Minimum Due</Text>
          <Text style={styles.detailValue}>
            ₹{card.minimumDue.toLocaleString()}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Available Credit</Text>
          <Text style={[styles.detailValue, { color: colors.accent }]}>
            ₹{(card.creditLimit - card.outstanding).toLocaleString()}
          </Text>
        </View>

        <TouchableOpacity style={styles.payButton} activeOpacity={0.8}>
          <Text style={styles.payButtonText}>Pay Full Amount</Text>
        </TouchableOpacity>

        {['View Transactions', 'Card Settings', 'Reward History'].map(
          (item, index, array) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuRow,
                index === array.length - 1 && styles.menuRowLast,
              ]}
              activeOpacity={0.7}
            >
              <Text style={styles.menuText}>{item}</Text>
              <ChevronRight size={18} color={colors.textSecondary} />
            </TouchableOpacity>
          ),
        )}

        {/* Extra content for scrolling demo */}
        <View style={styles.extraContent}>
          <Text style={styles.extraTitle}>Recent Activity</Text>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <View key={item} style={styles.activityItem}>
              <View>
                <Text style={styles.activityTitle}>Transaction {item}</Text>
                <Text style={styles.activityDate}>Dec {10 + item}, 2025</Text>
              </View>
              <Text style={styles.activityAmount}>-₹{item * 1250}</Text>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    flex: 1,
    backgroundColor: colors.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  stickyHeader: {
    backgroundColor: colors.surface,
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: 10,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    backgroundColor: colors.textSecondary,
    opacity: 0.3,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 8,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  statValue: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailLabel: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  detailValue: {
    color: colors.textPrimary,
    fontWeight: '600',
    fontSize: 14,
  },
  payButton: {
    backgroundColor: colors.accent,
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 16,
  },
  payButtonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  menuRowLast: {
    borderBottomWidth: 0,
  },
  menuText: {
    color: colors.textPrimary,
    fontSize: 15,
  },
  extraContent: {
    marginTop: 24,
  },
  extraTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  activityTitle: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  activityDate: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },
  activityAmount: {
    color: '#EF4444',
    fontSize: 16,
    fontWeight: '700',
  },
});