import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  icon: React.ReactNode;
  onPress: () => void;
  size?: number;
  style?: ViewStyle;
}

export default function IconButton({
  icon,
  onPress,
  size = 44,
  style,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
        style,
      ]}
    >
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
