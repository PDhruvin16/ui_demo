import { StackCardInterpolationProps } from '@react-navigation/stack';

/**
 * Fade + slight scale (CRED login → home feel)
 */
export const fadeTransition = {
  cardStyleInterpolator: ({ current }: StackCardInterpolationProps) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};

/**
 * Bottom sheet like modal transition
 */
export const bottomSheetTransition = {
  cardStyleInterpolator: ({ current, layouts }: StackCardInterpolationProps) => ({
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
          }),
        },
      ],
    },
  }),
};

/**
 * Slight scale + fade (premium feel)
 */
export const scaleFadeTransition = {
  cardStyleInterpolator: ({ current }: StackCardInterpolationProps) => ({
    cardStyle: {
      opacity: current.progress,
      transform: [
        {
          scale: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.95, 1],
          }),
        },
      ],
    },
  }),
};
