// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { CardItem } from './CardItem';
// import { Card } from '../../../types/card.type';
// // import { Card } from '../types/card.types';

// interface CardStackProps {
//   cards: Card[];
//   selectedIndex: number;
//   onCardSelect: (index: number) => void;
// }

// export const CardStack: React.FC<CardStackProps> = ({
//   cards,
//   selectedIndex,
//   onCardSelect,
// }) => {
//   return (
//     <View style={styles.stackContainer}>
//       {cards.map((card, index) => {
//         const offset = (index - selectedIndex) * 10;
//         const scale = index === selectedIndex ? 1 : 0.95;
//         const opacity = index === selectedIndex ? 1 : 0.6;

//         return (
//           <View
//             key={card.id}
//             style={[
//               index > 0 && styles.stackedCard,
//               {
//                 transform: [{ translateY: offset }, { scale }],
//                 opacity,
//                 zIndex: cards.length - Math.abs(index - selectedIndex),
//               },
//             ]}
//           >
//             <CardItem
//               card={card}
//               onPress={() => onCardSelect(index)}
//               isActive={index === selectedIndex}
//             />
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   stackContainer: {
//     marginBottom: 24,
//     position: 'relative',
//   },
//   stackedCard: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//   },
// });
/////3
// import React, { useRef, useEffect, useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   Animated,
//   Dimensions,
//   PanResponder,
// } from 'react-native';
// import { CardItem } from './CardItem';
// import { Card } from '../../../types/card.type';

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SWIPE_THRESHOLD = 120;
// const CARD_OFFSET = 15;

// interface CardStackProps {
//   cards: Card[];
//   selectedIndex: number;
//   onCardSelect: (index: number) => void;
// }

// export const CardStack: React.FC<CardStackProps> = ({
//   cards,
//   selectedIndex,
//   onCardSelect,
// }) => {
//   const pan = useRef(new Animated.ValueXY()).current;
//   const [isAnimating, setIsAnimating] = useState(false);

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => !isAnimating,
//       onMoveShouldSetPanResponder: (_, gesture) => {
//         return !isAnimating && Math.abs(gesture.dx) > 5;
//       },
//       onPanResponderMove: (_, gesture) => {
//         if (!isAnimating) {
//           pan.setValue({ x: gesture.dx, y: 0 });
//         }
//       },
//       onPanResponderRelease: (_, gesture) => {
//         if (isAnimating) return;

//         if (gesture.dx < -SWIPE_THRESHOLD) {
//           // Swipe Left
//           handleSwipe('left');
//         } else if (gesture.dx > SWIPE_THRESHOLD) {
//           // Swipe Right
//           handleSwipe('right');
//         } else {
//           // Snap back
//           Animated.spring(pan, {
//             toValue: { x: 0, y: 0 },
//             useNativeDriver: true,
//             friction: 7,
//           }).start();
//         }
//       },
//     })
//   ).current;

//   const handleSwipe = (direction: 'left' | 'right') => {
//     setIsAnimating(true);
//     const toValue = direction === 'left' ? -SCREEN_WIDTH : SCREEN_WIDTH;

//     Animated.timing(pan, {
//       toValue: { x: toValue, y: 0 },
//       duration: 250,
//       useNativeDriver: true,
//     }).start(() => {
//       pan.setValue({ x: 0, y: 0 });

//       if (direction === 'left') {
//         const nextIndex = (selectedIndex + 1) % cards.length;
//         onCardSelect(nextIndex);
//       } else {
//         const prevIndex = (selectedIndex - 1 + cards.length) % cards.length;
//         onCardSelect(prevIndex);
//       }

//       setIsAnimating(false);
//     });
//   };

//   const getCardPosition = (cardIndex: number) => {
//     let position = cardIndex - selectedIndex;
//     if (position < 0) {
//       position += cards.length;
//     }
//     return position;
//   };

//   return (
//     <View style={styles.stackContainer}>
//       {cards.map((card, index) => {
//         const position = getCardPosition(index);
//         const isActive = position === 0;
//         const isVisible = position < 3;

//         if (!isVisible) return null;

//         const translateY = position * CARD_OFFSET;
//         const scale = 1 - position * 0.05;
//         const opacity = Math.max(0.3, 1 - position * 0.3);
//         const zIndex = cards.length - position;

//         return (
//           <Animated.View
//             key={card.id}
//             {...(isActive ? panResponder.panHandlers : {})}
//             style={[
//               styles.cardWrapper,
//               {
//                 transform: [
//                   { translateY },
//                   { scale },
//                   ...(isActive
//                     ? [
//                         { translateX: pan.x },
//                       ]
//                     : []),
//                 ],
//                 opacity,
//                 zIndex,
//               },
//             ]}
//           >
//             <CardItem
//               card={card}
//               isActive={isActive}
//               onPress={() => {}}
//             />
//           </Animated.View>
//         );
//       })}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   stackContainer: {
//     height: 220,
//     marginBottom: 32,
//     position: 'relative',
//   },
//   cardWrapper: {
//     position: 'absolute',
//     width: '100%',
//   },
// });
import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import { CardItem } from './CardItem';
import { Card } from '../../../types/card.type';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 120;
const CARD_OFFSET = 15;

interface CardStackProps {
  cards: Card[];
  selectedIndex: number;
  onCardSelect: (index: number) => void;
}

export const CardStack: React.FC<CardStackProps> = ({
  cards,
  selectedIndex,
  onCardSelect,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [isAnimating, setIsAnimating] = useState(false);
  const currentIndexRef = useRef(selectedIndex);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !isAnimating,
      onMoveShouldSetPanResponder: (_, gesture) => {
        return !isAnimating && Math.abs(gesture.dx) > 10;
      },
      onPanResponderMove: (_, gesture) => {
        if (!isAnimating) {
          pan.setValue({ x: gesture.dx, y: 0 });
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (isAnimating) return;

        if (gesture.dx < -SWIPE_THRESHOLD) {
          handleSwipe('left');
        } else if (gesture.dx > SWIPE_THRESHOLD) {
          handleSwipe('right');
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
            friction: 7,
          }).start();
        }
      },
    }),
  ).current;
  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return;

    setIsAnimating(true);
    const toValue =
      direction === 'left' ? -SCREEN_WIDTH * 1.5 : SCREEN_WIDTH * 1.5;
    const currentIndex = currentIndexRef.current;
    // Calculate next index BEFORE animation

    const nextIndex =
      direction === 'right'
        ? (currentIndex + 1) % cards.length
        : (currentIndex - 1 + cards.length) % cards.length;
    // let nextIndex;
    // if (direction === 'left') {
    //   nextIndex = (selectedIndex + 1) % cards.length;
    // } else {
    //   nextIndex = selectedIndex - 1;
    //   if (nextIndex < 0) {
    //     nextIndex = cards.length - 1;
    //   }
    // }

    console.log(
      `🔄 Swipe ${direction}: Card ${selectedIndex} → ${nextIndex} (Total: ${cards.length})`,
    );

    Animated.timing(pan, {
      toValue: { x: toValue, y: 0 },
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      requestAnimationFrame(() => {
        pan.setValue({ x: 0, y: 0 });
        currentIndexRef.current = nextIndex;
        onCardSelect(nextIndex);

        requestAnimationFrame(() => {
          setIsAnimating(false);
          console.log(`✅ Animation complete - Now showing card ${nextIndex}`);
        });
      });
    });
  };
  // const handleSwipe = (direction: 'left' | 'right') => {
  //   if (isAnimating) return;

  //   setIsAnimating(true);

  //   const currentIndex = currentIndexRef.current;

  //   const nextIndex =
  //     direction === 'right'
  //       ? (currentIndex + 1) % cards.length
  //       : (currentIndex - 1 + cards.length) % cards.length;

  //   console.log(
  //     `🔄 Swipe ${direction}: Card ${currentIndex} → ${nextIndex}`
  //   );

  //   Animated.timing(pan, {
  //     toValue: { x: direction === 'right' ? 80 : -80, y: 0 },
  //     duration: 180,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     pan.setValue({ x: 0, y: 0 });

  //     currentIndexRef.current = nextIndex;
  //     onCardSelect(nextIndex);

  //     setIsAnimating(false);

  //     console.log(`✅ Now showing card ${nextIndex}`);
  //   });
  // };

  const getCardPosition = (cardIndex: number) => {
    let position = cardIndex - selectedIndex;

    if (position < 0) {
      position += cards.length;
    }

    return position;
  };

  return (
    <View style={styles.stackContainer}>
      {cards.map((card, index) => {
        const position = getCardPosition(index);
        const isActive = position === 0;
        const isVisible = position <= 3;

        const translateY = position * CARD_OFFSET;
        const scale = 1 - position * 0.05;
        const opacity = isVisible ? Math.max(0.2, 1 - position * 0.25) : 0;
        const zIndex = isVisible ? cards.length - position : -1;

        return (
          <Animated.View
            key={card.id}
            {...(isActive ? panResponder.panHandlers : {})}
            style={[
              styles.cardWrapper,
              {
                transform: [
                  { translateY },
                  { scale },
                  ...(isActive ? [{ translateX: pan.x }] : []),
                ],
                opacity,
                zIndex,
              },
            ]}
            pointerEvents={isActive && !isAnimating ? 'auto' : 'none'}
          >
            <CardItem card={card} isActive={isActive} onPress={() => {}} />
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  stackContainer: {
    height: 220,
    marginBottom: 32,
    position: 'relative',
  },
  cardWrapper: {
    position: 'absolute',
    width: '100%',
  },
});
