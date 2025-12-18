import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#0B0B0B',
    borderTopWidth: 0,
    height: 72,
  },
  scannerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#A3FF12',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20, // floating effect
    shadowColor: '#A3FF12',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
    left:10
  },
  innerCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#000',
  },
});
