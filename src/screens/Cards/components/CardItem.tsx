
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CreditCard } from 'lucide-react-native';
import { Card } from '../../../types/card.type';
import { colors } from '../../../theme/colors';


interface CardItemProps {
  card: Card;
  onPress: () => void;
  isActive: boolean;
}

export const CardItem: React.FC<CardItemProps> = ({ card, onPress, isActive }) => {
  const gradients: Record<string, string> = {
    visa: '#5F6EEA',
    mastercard: '#F5576C',
    amex: '#4FACFE',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: gradients[card.type],
          transform: [{ scale: isActive ? 0.98 : 1 }],
        },
      ]}
    >
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.bank}>{card.bankName}</Text>
          <Text style={styles.cardName}>{card.name}</Text>
        </View>
        <CreditCard size={26} color="#fff" />
      </View>

      <Text style={styles.cardNumber}>•••• {card.lastFour}</Text>

      <View style={styles.cardFooter}>
        <View>
          <Text style={styles.label}>Outstanding</Text>
          <Text style={styles.amount}>₹{card.outstanding.toLocaleString()}</Text>
        </View>

        <View style={styles.payNow}>
          <Text style={styles.payText}>Pay Now</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
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
    color: colors.textPrimary,
    fontWeight: '600',
  },
  cardNumber: {
    fontSize: 20,
    color: colors.textPrimary,
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
    color: colors.textPrimary,
  },
  payNow: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  payText: {
    color: colors.textPrimary,
    fontWeight: '600',
    fontSize: 12,
  },
});

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { CreditCard } from 'lucide-react-native';
// import { Card } from '../../../types/card.type';
// import { colors } from '../../../theme/colors';

// interface CardItemProps {
//   card: Card;
//   onPress: () => void;
//   isActive: boolean;
// }

// export const CardItem: React.FC<CardItemProps> = ({ card, onPress, isActive }) => {
//   const gradients: Record<string, string> = {
//     visa: '#5F6EEA',
//     mastercard: '#F5576C',
//     amex: '#4FACFE',
//   };

//   return (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       onPress={onPress}
//       disabled={isActive} // Disable touch when active (swipe enabled)
//       style={[
//         styles.card,
//         {
//           backgroundColor: gradients[card.type],
//           transform: [{ scale: isActive ? 1 : 0.98 }],
//         },
//       ]}
//     >
//       <View style={styles.cardHeader}>
//         <View>
//           <Text style={styles.bank}>{card.bankName}</Text>
//           <Text style={styles.cardName}>{card.name}</Text>
//         </View>
//         <CreditCard size={26} color="#fff" />
//       </View>

//       <Text style={styles.cardNumber}>•••• {card.lastFour}</Text>

//       <View style={styles.cardFooter}>
//         <View>
//           <Text style={styles.label}>Outstanding</Text>
//           <Text style={styles.amount}>₹{card.outstanding.toLocaleString()}</Text>
//         </View>

//         <View style={styles.payNow}>
//           <Text style={styles.payText}>Pay Now</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 20,
//     padding: 24,
//     marginBottom: 16,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 32,
//   },
//   bank: {
//     fontSize: 12,
//     color: 'rgba(255,255,255,0.8)',
//     marginBottom: 4,
//   },
//   cardName: {
//     fontSize: 18,
//     color: colors.textPrimary,
//     fontWeight: '600',
//   },
//   cardNumber: {
//     fontSize: 20,
//     color: colors.textPrimary,
//     letterSpacing: 2,
//     marginBottom: 20,
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   label: {
//     fontSize: 11,
//     color: 'rgba(255,255,255,0.6)',
//     marginBottom: 2,
//   },
//   amount: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: colors.textPrimary,
//   },
//   payNow: {
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 12,
//   },
//   payText: {
//     color: colors.textPrimary,
//     fontWeight: '600',
//     fontSize: 12,
//   },
// });