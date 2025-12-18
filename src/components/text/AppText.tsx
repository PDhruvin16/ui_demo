import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface Props extends TextProps {
  variant?: 'title' | 'body' | 'caption';
}

export default function AppText({
  variant = 'body',
  style,
  ...props
}: Props) {
  return (
    <Text
      {...props}
      style={[styles[variant], style]}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  body: {
    color: '#E0E0E0',
    fontSize: 16,
  },
  caption: {
    color: '#9A9A9A',
    fontSize: 13,
  },
});
