// import React, { useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Animated,
//   Dimensions,
//   StatusBar,
//   Easing,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { colors } from '../../theme/colors';

// const { width } = Dimensions.get('window');

// interface SplashScreenProps {
//   onAnimationEnd: () => void;
// }

// const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
//   const logoScale = useRef(new Animated.Value(0)).current;
//   const logoRotate = useRef(new Animated.Value(0)).current;
//   const logoOpacity = useRef(new Animated.Value(0)).current;
//   const textOpacity = useRef(new Animated.Value(0)).current;
//   const textTranslateY = useRef(new Animated.Value(30)).current;
//   const glowPulse = useRef(new Animated.Value(0)).current;
//   const particleAnims = useRef(
//     Array.from({ length: 50 }, () => ({
//       translateY: new Animated.Value(10),
//       translateX: new Animated.Value(10),
//       opacity: new Animated.Value(10),
//       scale: new Animated.Value(0),
//     }))
//   ).current;

//   useEffect(() => {
//     StatusBar.setHidden(true);

//     const particleAnimations = particleAnims.map((anim, index) => {
//       const angle = (index / particleAnims.length) * Math.PI * 10;
//       const distance = 100 + Math.random() * 100;
//       const duration = 1200 + Math.random() * 400;

//       return Animated.parallel([
//         Animated.timing(anim.translateX, {
//           toValue: Math.cos(angle) * distance,
//           duration,
//           easing: Easing.out(Easing.quad),
//           useNativeDriver: true,
//         }),
//         Animated.timing(anim.translateY, {
//           toValue: Math.sin(angle) * distance,
//           duration,
//           easing: Easing.out(Easing.quad),
//           useNativeDriver: true,
//         }),
//         Animated.sequence([
//           Animated.timing(anim.opacity, {
//             toValue: 1,
//             duration: 300,
//             delay: 400,
//             useNativeDriver: true,
//           }),
//           Animated.timing(anim.opacity, {
//             toValue: 0,
//             duration: 600,
//             useNativeDriver: true,
//           }),
//         ]),
//         Animated.sequence([
//           Animated.timing(anim.scale, {
//             toValue: 1,
//             duration: 300,
//             delay: 400,
//             useNativeDriver: true,
//           }),
//           Animated.timing(anim.scale, {
//             toValue: 0,
//             duration: 600,
//             useNativeDriver: true,
//           }),
//         ]),
//       ]);
//     });

//     const glowAnimation = Animated.loop(
//       Animated.sequence([
//         Animated.timing(glowPulse, {
//           toValue: 1,
//           duration: 1000,
//           easing: Easing.inOut(Easing.ease),
//           useNativeDriver: true,
//         }),
//         Animated.timing(glowPulse, {
//           toValue: 0,
//           duration: 1000,
//           easing: Easing.inOut(Easing.ease),
//           useNativeDriver: true,
//         }),
//       ])
//     );

//     glowAnimation.start();

//     Animated.sequence([
//       Animated.parallel([
//         Animated.spring(logoScale, {
//           toValue: 1,
//           tension: 50,
//           friction: 7,
//           useNativeDriver: true,
//         }),
//         Animated.timing(logoOpacity, {
//           toValue: 1,
//           duration: 400,
//           useNativeDriver: true,
//         }),
//         Animated.timing(logoRotate, {
//           toValue: 1,
//           duration: 800,
//           easing: Easing.out(Easing.back(1.5)),
//           useNativeDriver: true,
//         }),
//       ]),
//       Animated.parallel(particleAnimations),
//       Animated.parallel([
//         Animated.timing(textOpacity, {
//           toValue: 1,
//           duration: 600,
//           useNativeDriver: true,
//         }),
//         Animated.spring(textTranslateY, {
//           toValue: 0,
//           tension: 50,
//           friction: 8,
//           useNativeDriver: true,
//         }),
//       ]),
//       Animated.delay(800),
//       Animated.parallel([
//         Animated.timing(logoOpacity, {
//           toValue: 0,
//           duration: 400,
//           useNativeDriver: true,
//         }),
//         Animated.timing(textOpacity, {
//           toValue: 0,
//           duration: 400,
//           useNativeDriver: true,
//         }),
//       ]),
//     ]).start(() => {
//       glowAnimation.stop();
//       StatusBar.setHidden(false);
//       if (onAnimationEnd && typeof onAnimationEnd === 'function') {
//         onAnimationEnd();
//       }
//     });

//     return () => {
//       glowAnimation.stop();
//     };
//   }, []);

//   const spin = logoRotate.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   const glowScale = glowPulse.interpolate({
//     inputRange: [0, 1],
//     outputRange: [1, 1.3],
//   });

//   const glowOpacity = glowPulse.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0.3, 0.8],
//   });

//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['#000000', '#0a0a0a', '#000000']}
//         style={styles.gradient}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       >
//         <View style={styles.bgCirclesContainer}>
//           <Animated.View
//             style={[
//               styles.bgCircle,
//               {
//                 opacity: glowOpacity,
//                 transform: [{ scale: glowScale }],
//               },
//             ]}
//           />
//           <Animated.View
//             style={[
//               styles.bgCircle2,
//               {
//                 opacity: glowOpacity,
//                 transform: [{ scale: glowScale }],
//               },
//             ]}
//           />
//         </View>

//          <View style={styles.particlesContainer}>
//           {particleAnims.map((anim, index) => (
//             <Animated.View
//               key={index}
//               style={[
//                 styles.particle,
//                 {
//                   opacity: anim.opacity,
//                   transform: [
//                     { translateX: anim.translateX },
//                     { translateY: anim.translateY },
//                     { scale: anim.scale },
//                   ],
//                 },
//               ]}
//             />
//           ))}
//         </View> 

//         <View style={styles.logoContainer}>
//           <Animated.View
//             style={[
//               styles.logoWrapper,
//               {
//                 opacity: logoOpacity,
//                 transform: [{ scale: logoScale }, { rotate: spin }],
//               },
//             ]}
//           >
//             <View style={styles.logo}>
//               <View style={styles.logoInner}>
//                 <View style={styles.logoCore} />
//               </View>
//             </View>
//           </Animated.View>

//           <Animated.View
//             style={[
//               styles.textContainer,
//               {
//                 opacity: textOpacity,
//                 transform: [{ translateY: textTranslateY }],
//               },
//             ]}
//           >
//             <Text style={styles.appName}>YOURAPP</Text>
//             <Text style={styles.tagline}>Experience Excellence</Text>
//           </Animated.View>
//         </View>

//         <Animated.View style={[styles.loaderContainer, { opacity: textOpacity }]}>
//           <View style={styles.loader}>
//             <Animated.View
//               style={[
//                 styles.loaderBar,
//                 {
//                   opacity: glowOpacity,
//                 },
//               ]}
//             />
//           </View>
//         </Animated.View>
//       </LinearGradient>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   gradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bgCirclesContainer: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bgCircle: {
//     position: 'absolute',
//     width: 400,
//     height: 400,
//     borderRadius: 200,
//     backgroundColor: '#E8FFD1',
//     opacity: 0.3,
//     top: -100,
//     right: -100,
//   },
//   bgCircle2: {
//     position: 'absolute',
//     width: 300,
//     height: 300,
//     borderRadius: 150,
//     backgroundColor:'#CCFF66',
//     opacity: 0.2,
//     bottom: -50,
//     left: -50,
//   },
//   particlesContainer: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   particle: {
//     position: 'absolute',
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#fff',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logoWrapper: {
//     marginBottom: 40,
//   },
//   logo: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 3,
//     borderColor: '#E8FFD1',
//     shadowColor: '#ffffff',
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 0.8,
//     shadowRadius: 20,
//     elevation: 20,
//   },
//   logoInner: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#CCFF66',
//   },
//   logoCore: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: colors.accent,
//     shadowColor: '#fff',
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 1,
//     shadowRadius: 15,
//     elevation: 15,
//   },
//   textContainer: {
//     alignItems: 'center',
//   },
//   appName: {
//     fontSize: 42,
//     fontWeight: '800',
//     color: '#fff',
//     letterSpacing: 4,
//     textShadowColor: 'rgba(255, 255, 255, 0.5)',
//     textShadowOffset: { width: 0, height: 0 },
//     textShadowRadius: 20,
//   },
//   tagline: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#999999',
//     letterSpacing: 2,
//     marginTop: 8,
//     textTransform: 'uppercase',
//   },
//   loaderContainer: {
//     position: 'absolute',
//     bottom: 80,
//     width: width * 0.4,
//   },
//   loader: {
//     height: 3,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 2,
//     overflow: 'hidden',
//   },
//   loaderBar: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: '#ffffff',
//     shadowColor: '#ffffff',
//     shadowOffset: { width: 0, height: 0 },
//     shadowOpacity: 1,
//     shadowRadius: 10,
//   },
// });

// export default SplashScreen;
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/colors';

const { width } = Dimensions.get('window');

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  // Logo animations
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoRotate = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  // Text animations
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(30)).current;

  // Glow
  const glowPulse = useRef(new Animated.Value(0)).current;

  // Particles
  const particleAnims = useRef(
    Array.from({ length: 50 }, () => ({
      translateX: new Animated.Value(0),
      translateY: new Animated.Value(0),
      opacity: new Animated.Value(0),
      scale: new Animated.Value(0),
    }))
  ).current;

  useEffect(() => {
    StatusBar.setHidden(true);

    /* -------------------- PARTICLES -------------------- */
    const particleAnimations = particleAnims.map((anim, index) => {
      const angle = (index / particleAnims.length) * Math.PI * 2;
      const distance = 100 + Math.random() * 100;
      const duration = 1000 + Math.random() * 500;

      return Animated.parallel([
        Animated.timing(anim.translateX, {
          toValue: Math.cos(angle) * distance,
          duration,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(anim.translateY, {
          toValue: Math.sin(angle) * distance,
          duration,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(anim.opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(anim.opacity, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(anim.scale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(anim.scale, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true,
          }),
        ]),
      ]);
    });

    /* -------------------- GLOW -------------------- */
    const glowAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(glowPulse, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(glowPulse, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );

    glowAnimation.start();

    /* -------------------- MAIN SEQUENCE -------------------- */
    Animated.sequence([
      // 1️⃣ Logo appears
      Animated.parallel([
        Animated.spring(logoScale, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(logoRotate, {
          toValue: 1,
          duration: 800,
          easing: Easing.out(Easing.back(1.5)),
          useNativeDriver: true,
        }),
      ]),

      // 2️⃣ Particles blast
      Animated.parallel(particleAnimations),

      // 3️⃣ Logo disappears
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
          toValue: 0.8,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),

      // 4️⃣ Text appears in SAME position
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(textTranslateY, {
          toValue: 0,
          tension: 50,
          friction: 8,
          useNativeDriver: true,
        }),
      ]),

      Animated.delay(800),
    ]).start(() => {
      glowAnimation.stop();
      StatusBar.setHidden(false);
      onAnimationEnd?.();
    });

    return () => glowAnimation.stop();
  }, []);

  /* -------------------- INTERPOLATIONS -------------------- */
  const spin = logoRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const glowScale = glowPulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.3],
  });

  const glowOpacity = glowPulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.8],
  });

  /* -------------------- UI -------------------- */
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#0a0a0a', '#000000']}
        style={styles.gradient}
      >
        {/* Glow */}
        <View style={styles.bgCirclesContainer}>
          <Animated.View
            style={[
              styles.bgCircle,
              { opacity: glowOpacity, transform: [{ scale: glowScale }] },
            ]}
          />
          <Animated.View
            style={[
              styles.bgCircle2,
              { opacity: glowOpacity, transform: [{ scale: glowScale }] },
            ]}
          />
        </View>

        {/* Particles */}
        <View style={styles.particlesContainer}>
          {particleAnims.map((anim, index) => (
            <Animated.View
              key={index}
              style={[
                styles.particle,
                {
                  opacity: anim.opacity,
                  transform: [
                    { translateX: anim.translateX },
                    { translateY: anim.translateY },
                    { scale: anim.scale },
                  ],
                },
              ]}
            />
          ))}
        </View>

        {/* Logo & Text (same position) */}
        <View style={styles.logoContainer}>
          <Animated.View
            style={[
              styles.logoWrapper,
              {
                opacity: logoOpacity,
                transform: [{ scale: logoScale }, { rotate: spin }],
              },
            ]}
          >
            {/* <View style={styles.logo}>
              <View style={styles.logoInner}>
                <View style={styles.logoCore} />
              </View>
            </View> */}
          </Animated.View>

          <Animated.View
            style={[
              styles.textContainer,
              {
                opacity: textOpacity,
                transform: [{ translateY: textTranslateY }],
              },
            ]}
          >
            <Text style={styles.appName}>CRED</Text>
            <Text style={styles.tagline}>Experience Excellence</Text>
          </Animated.View>
        </View>

        {/* Loader */}
        <Animated.View style={[styles.loaderContainer, { opacity: textOpacity }]}>
          <View style={styles.loader}>
            <Animated.View
              style={[styles.loaderBar, { opacity: glowOpacity }]}
            />
          </View>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

/* -------------------- STYLES -------------------- */
const styles = StyleSheet.create({
  container: { flex: 1 },
  gradient: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  bgCirclesContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgCircle: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: '#E8FFD1',
    position: 'absolute',
    top: -100,
    right: -100,
  },
  bgCircle2: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#CCFF66',
    position: 'absolute',
    bottom: -50,
    left: -50,
  },

  particlesContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  particle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    position: 'absolute',
  },

  logoContainer: { alignItems: 'center', justifyContent: 'center' },
  logoWrapper: { position: 'absolute' },

  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E8FFD1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInner: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#CCFF66',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoCore: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.accent,
  },

  textContainer: { alignItems: 'center' },
  appName: {
    fontSize: 42,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 4,
  },
  tagline: {
    fontSize: 14,
    color: '#999',
    letterSpacing: 2,
    marginTop: 8,
  },

  loaderContainer: {
    position: 'absolute',
    bottom: 80,
    width: width * 0.4,
  },
  loader: {
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
  },
  loaderBar: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default SplashScreen;
