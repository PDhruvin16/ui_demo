// import React, { useEffect, useRef } from 'react';
// import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
// import AppText from '../../../components/text/AppText';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function CreditScoreCard() {
//   const progressAnim = useRef(new Animated.Value(0)).current;
//   const scoreAnim = useRef(new Animated.Value(0)).current;
//   const pulseAnim = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     // Animate progress bar
//     Animated.timing(progressAnim, {
//       toValue: 78,
//       duration: 1500,
//       useNativeDriver: false,
//     }).start();

//     // Animate score number
//     Animated.timing(scoreAnim, {
//       toValue: 782,
//       duration: 1500,
//       useNativeDriver: false,
//     }).start();

//     // Pulse animation for score
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(pulseAnim, {
//           toValue: 1.05,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(pulseAnim, {
//           toValue: 1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, []);

//   const progressWidth = progressAnim.interpolate({
//     inputRange: [0, 100],
//     outputRange: ['0%', '100%'],
//   });

//   return (
//     <View style={styles.creditCard}>
//       {/* Glow effect */}
//       <View style={styles.glowEffect} />

//       <View style={styles.cardHeader}>
//         <AppText style={styles.cardLabel}>credit score</AppText>

//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name="chevron-forward" size={20} color="#A3FF12" />
//         </TouchableOpacity>
//       </View>

//       <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
//         <Animated.Text style={styles.creditScore}>
//           {scoreAnim.interpolate({
//             inputRange: [0, 782],
//             outputRange: ['0', '782'],
//           })}
//         </Animated.Text>
//       </Animated.View>

//       <AppText style={styles.creditStatus}>excellent</AppText>

//       <View style={styles.progressBar}>
//         <Animated.View
//           style={[styles.progressFill, { width: progressWidth }]}
//         />
//       </View>

//       <AppText style={styles.lastUpdated}>updated 2 days ago</AppText>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   creditCard: {
//     backgroundColor: '#0F0F0F',
//     borderRadius: 20,
//     padding: 24,
//     marginBottom: 24,
//     borderWidth: 1,
//     borderColor: '#1C1C1C',
//     overflow: 'hidden',
//     shadowColor: '#A3FF12',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 12,
//     elevation: 8,
//   },
//   glowEffect: {
//     position: 'absolute',
//     top: -50,
//     right: -50,
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: '#A3FF12',
//     opacity: 0.05,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   cardLabel: {
//     fontSize: 13,
//     color: '#8F8F8F',
//     textTransform: 'lowercase',
//     letterSpacing: 0.5,
//   },
//   iconButton: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#1C1C1C',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   creditScore: {
//     fontSize: 56,
//     color: '#A3FF12',
//     fontWeight: '800',
//     letterSpacing: -2,
//   },
//   creditStatus: {
//     fontSize: 18,
//     color: '#A3FF12',
//     marginBottom: 20,
//     textTransform: 'lowercase',
//     fontWeight: '600',
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#1C1C1C',
//     borderRadius: 3,
//     overflow: 'hidden',
//     marginBottom: 12,
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#A3FF12',
//     borderRadius: 3,
//   },
//   lastUpdated: {
//     fontSize: 11,
//     color: '#666',
//     textTransform: 'lowercase',
//   },
// });
import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import AppText from '../../../components/text/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CreditScoreCard() {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const scoreAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    // Animate progress bar
    Animated.timing(progressAnim, {
      toValue: 78,
      duration: 1500,
      useNativeDriver: false,
    }).start();

    // Animate score number
    Animated.timing(scoreAnim, {
      toValue: 782,
      duration: 1500,
      useNativeDriver: false,
    }).start();

    // Listen to score animation and update display
    const listenerId = scoreAnim.addListener(({ value }) => {
      setDisplayScore(Math.floor(value));
    });

    // Pulse animation for score (starts after main animation)
    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.05,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, 1500);

    return () => {
      scoreAnim.removeListener(listenerId);
    };
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.creditCard}>
      {/* Glow effect */}
      <View style={styles.glowEffect} />

      <View style={styles.cardHeader}>
        <AppText style={styles.cardLabel}>credit score</AppText>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chevron-forward" size={20} color="#A3FF12" />
        </TouchableOpacity>
      </View>

      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        <AppText style={styles.creditScore}>
          {displayScore}
        </AppText>
      </Animated.View>

      <AppText style={styles.creditStatus}>excellent</AppText>

      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressFill, { width: progressWidth }]}
        />
      </View>

      <AppText style={styles.lastUpdated}>updated 2 days ago</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  creditCard: {
    backgroundColor: '#0F0F0F',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1C1C1C',
    overflow: 'hidden',
    shadowColor: '#A3FF12',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  glowEffect: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#A3FF12',
    opacity: 0.05,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardLabel: {
    fontSize: 13,
    color: '#8F8F8F',
    textTransform: 'lowercase',
    letterSpacing: 0.5,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1C1C1C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  creditScore: {
    fontSize: 56,
    color: '#A3FF12',
    fontWeight: '800',
    letterSpacing: -2,
  },
  creditStatus: {
    fontSize: 18,
    color: '#A3FF12',
    marginBottom: 20,
    textTransform: 'lowercase',
    fontWeight: '600',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#1C1C1C',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#A3FF12',
    borderRadius: 3,
  },
  lastUpdated: {
    fontSize: 11,
    color: '#666',
    textTransform: 'lowercase',
  },
});