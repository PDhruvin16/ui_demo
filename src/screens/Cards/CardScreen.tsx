// import { CardDetailSheet } from './components/CardDetailsSheet';
// import { CardStack } from './components/CardStack';
// // import { colors } from '../../theme/colors';

// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';

// // Types
// interface Card {
//   id: string;
//   name: string;
//   bankName: string;
//   type: 'visa' | 'mastercard' | 'amex';
//   lastFour: string;
//   outstanding: number;
//   creditLimit: number;
//   rewardPoints: number;
//   cashback: number;
//   dueDate: string;
//   minimumDue: number;
// }

// const colors = {
//   background: '#0A0E27',
//   textPrimary: '#FFFFFF',
//   textSecondary: '#8F92A1',
//   cardBg: '#1A1F3A',
//   accent: '#6C5CE7',
// };

// export default function CardScreen() {
//   const [selectedCard, setSelectedCard] = useState(0);
//   const scrollY = useRef(new Animated.Value(0)).current;

//   const handleCardSelect = (index: number) => {
//     console.log('🎯 handleCardSelect called with:', index);
//     setSelectedCard(index);
//   };

//   const cards: Card[] = [
//     {
//       id: '1',
//       name: 'HDFC Regalia',
//       bankName: 'HDFC Bank',
//       type: 'visa',
//       lastFour: '4532',
//       outstanding: 45230,
//       creditLimit: 500000,
//       rewardPoints: 12500,
//       cashback: 2340,
//       dueDate: '25 Dec 2025',
//       minimumDue: 4523,
//     },
//     {
//       id: '2',
//       name: 'ICICI Amazon Pay',
//       bankName: 'ICICI Bank',
//       type: 'mastercard',
//       lastFour: '8901',
//       outstanding: 18900,
//       creditLimit: 300000,
//       rewardPoints: 8900,
//       cashback: 1890,
//       dueDate: '28 Dec 2025',
//       minimumDue: 1890,
//     },
//     {
//       id: '3',
//       name: 'Amex Platinum',
//       bankName: 'American Express',
//       type: 'amex',
//       lastFour: '1005',
//       outstanding: 67800,
//       creditLimit: 1000000,
//       rewardPoints: 45000,
//       cashback: 6780,
//       dueDate: '30 Dec 2025',
//       minimumDue: 6780,
//     },
//   ];

//   // Animation values
//   const HEADER_MAX_HEIGHT = 120;
//   const HEADER_MIN_HEIGHT = 60;
//   const CARD_MAX_HEIGHT = 220;
//   const CARD_MIN_HEIGHT = 180;

//   // Header height animation
//   const headerHeight = scrollY.interpolate({
//     inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
//     outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
//     extrapolate: 'clamp',
//   });

//   // Title opacity animation
//   const titleOpacity = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: [1, 0],
//     extrapolate: 'clamp',
//   });

//   // Subtitle opacity animation
//   const subtitleOpacity = scrollY.interpolate({
//     inputRange: [0, 30],
//     outputRange: [1, 0],
//     extrapolate: 'clamp',
//   });

//   // Card height animation
//   const cardHeight = scrollY.interpolate({
//     inputRange: [0, 120],
//     outputRange: [CARD_MAX_HEIGHT, CARD_MIN_HEIGHT],
//     extrapolate: 'clamp',
//   });

//   // Card scale animation
//   const cardScale = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [1, 0.9],
//     extrapolate: 'clamp',
//   });

//   return (
//     <View style={styles.container}>
//       {/* Animated Header */}
//       <Animated.View style={[styles.header, { height: headerHeight }]}>
//         <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>
//           Your Cards
//         </Animated.Text>
//         <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
//           Manage all your credit cards in one place
//         </Animated.Text>
//       </Animated.View>

//       {/* Animated Card Stack */}
//       <Animated.View
//         style={[
//           styles.cardContainer,
//           {
//             height: cardHeight,
//             transform: [{ scale: cardScale }],
//           },
//         ]}
//       >
//         <CardStack
//           cards={cards}
//           selectedIndex={selectedCard}
//           onCardSelect={handleCardSelect}
//         />
//       </Animated.View>

//       {/* Scrollable Detail Sheet */}
//       <Animated.ScrollView
//         showsVerticalScrollIndicator={false}
//         scrollEventThrottle={10}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//         contentContainerStyle={styles.scrollContent}
//       >
//         <CardDetailSheet card={cards[selectedCard]} />
//       </Animated.ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//     paddingHorizontal: 20,
//   },
//     scrollContent: {
//     paddingBottom: 40,
//   },
//   cardContainer: {
//     paddingHorizontal: 20,
//     marginVertical: 20,
//   },
//   header: {
//     paddingTop: 20,
//     paddingBottom: 24,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: '800',
//     color: colors.textPrimary,
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: colors.textSecondary,
//   },
// });
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import { CardDetailSheet } from './components/CardDetailsSheet';
import { CardStack } from './components/CardStack';

// Types
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

const colors = {
  cardBg: '#1A1F3A',
  background: '#000000',
  surface: '#0E0E0E',
  textPrimary: '#FFFFFF',
  textSecondary: '#9A9A9A',
  accent: '#A3FF12',
};

export default function CardScreen() {
  const [selectedCard, setSelectedCard] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleCardSelect = (index: number) => {
    console.log('🎯 handleCardSelect called with:', index);
    setSelectedCard(index);
  };

  const cards: Card[] = [
    {
      id: '1',
      name: 'HDFC Regalia',
      bankName: 'HDFC Bank',
      type: 'visa',
      lastFour: '4532',
      outstanding: 45230,
      creditLimit: 500000,
      rewardPoints: 12500,
      cashback: 2340,
      dueDate: '25 Dec 2025',
      minimumDue: 4523,
    },
    {
      id: '2',
      name: 'ICICI Amazon Pay',
      bankName: 'ICICI Bank',
      type: 'mastercard',
      lastFour: '8901',
      outstanding: 18900,
      creditLimit: 300000,
      rewardPoints: 8900,
      cashback: 1890,
      dueDate: '28 Dec 2025',
      minimumDue: 1890,
    },
    {
      id: '3',
      name: 'Amex Platinum',
      bankName: 'American Express',
      type: 'amex',
      lastFour: '1005',
      outstanding: 67800,
      creditLimit: 1000000,
      rewardPoints: 45000,
      cashback: 6780,
      dueDate: '30 Dec 2025',
      minimumDue: 6780,
    },
  ];

  // Animation configurations
  const HEADER_MAX_HEIGHT = 120;
  const HEADER_MIN_HEIGHT = 0;
  const CARD_MAX_HEIGHT = 220;
  const CARD_MIN_HEIGHT = 120; // Card visible rahega but chhota

  // Header height animation - fades out completely
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  // Header opacity
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  // Card height animation - thoda chhota but visible
  const cardHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [CARD_MAX_HEIGHT, CARD_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  // Card top position - upar move hoga
  const cardTranslateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* Fixed Animated Header */}
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            opacity: headerOpacity,
          },
        ]}
      >
        <Text style={styles.title}>Your Cards</Text>
        <Text style={styles.subtitle}>
          Manage all your credit cards in one place
        </Text>
      </Animated.View>

      {/* Fixed Animated Card Stack - Always visible */}
      <Animated.View
        style={[
          styles.cardContainer,
          {
            height: cardHeight,
            transform: [{ translateY: cardTranslateY }],
          },
        ]}
      >
        <CardStack
          cards={cards}
          selectedIndex={selectedCard}
          onCardSelect={handleCardSelect}
        />
      </Animated.View>

      {/* Scrollable Card Detail Sheet */}
      <View style={styles.detailSheetContainer}>
        <CardDetailSheet card={cards[selectedCard]} scrollY={scrollY} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    overflow: 'hidden',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  cardContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  detailSheetContainer: {
    flex: 1,
    marginTop: 20,
  },
});
