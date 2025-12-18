// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function ScannerScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Scanner UI</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#A3FF12',
//     fontSize: 18,
//   },
// });
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated } from 'react-native';
import { Camera, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
// import ScreenWrapper from '.';

export default function ScannerScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const device = useCameraDevice('back');
  
  const scanLineAnim = useRef(new Animated.Value(0)).current;
  const cornerPulseAnim = useRef(new Animated.Value(1)).current;
  const frameScaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    checkCameraPermission();
    startAnimations();
  }, []);

  const startAnimations = () => {
    // Scanning line animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Corner pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(cornerPulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(cornerPulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const checkCameraPermission = async () => {
    const status = await Camera.requestCameraPermission();
    setHasPermission(status === 'granted');
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'ean-8', 'code-128', 'code-39', 'upc-a', 'upc-e'],
    onCodeScanned: (codes) => {
      if (codes.length > 0 && isActive) {
        const code = codes[0];
        setIsActive(false);
        
        // Success animation
        Animated.sequence([
          Animated.timing(frameScaleAnim, {
            toValue: 1.1,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(frameScaleAnim, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }),
        ]).start();
        
        // Direct redirect - Add your navigation logic here
        // Example 1: If QR code contains URL
        // Linking.openURL(code.value);
        
        // Example 2: Navigate to another screen
        // navigation.navigate('Details', { qrData: code.value });
        
        // Example 3: Custom logic
        console.log('Scanned:', code.value);
        
        // Re-enable scanner after 2 seconds for next scan
        setTimeout(() => {
          setIsActive(true);
        }, 2000);
      }
    },
  });

  if (!hasPermission) {
    return (
      <ScreenWrapper>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>Camera permission required</Text>
          <TouchableOpacity style={styles.button} onPress={checkCameraPermission}>
            <Text style={styles.buttonText}>Grant Permission</Text>
          </TouchableOpacity>
        </View>
      </ScreenWrapper>
    );
  }

  if (!device) {
    return (
      <ScreenWrapper>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>No camera device found</Text>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Scan Code</Text>
          <Text style={styles.subtitle}>Position the code within the frame</Text>
        </View>

        <View style={styles.cameraContainer}>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            codeScanner={codeScanner}
          />
          
          {/* Scanning Frame Overlay */}
          <View style={styles.overlay}>
            <View style={styles.overlayTop} />
            <View style={styles.overlayMiddle}>
              <View style={styles.overlaySide} />
              <Animated.View style={[styles.scanFrame, { transform: [{ scale: frameScaleAnim }] }]}>
                {/* Corner Brackets with Pulse */}
                <Animated.View style={[styles.corner, styles.topLeft, { transform: [{ scale: cornerPulseAnim }] }]} />
                <Animated.View style={[styles.corner, styles.topRight, { transform: [{ scale: cornerPulseAnim }] }]} />
                <Animated.View style={[styles.corner, styles.bottomLeft, { transform: [{ scale: cornerPulseAnim }] }]} />
                <Animated.View style={[styles.corner, styles.bottomRight, { transform: [{ scale: cornerPulseAnim }] }]} />
                
                {/* Animated Scanning Line */}
                {isActive && (
                  <Animated.View 
                    style={[
                      styles.scanLine,
                      {
                        transform: [{
                          translateY: scanLineAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 250],
                          }),
                        }],
                      },
                    ]} 
                  />
                )}
              </Animated.View>
              <View style={styles.overlaySide} />
            </View>
            <View style={styles.overlayBottom} />
          </View>
        </View>

        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            {isActive ? 'Point camera at QR code' : 'Processing...'}
          </Text>
          <View style={styles.dotContainer}>
            <View style={[styles.dot, isActive && styles.dotActive]} />
            <View style={[styles.dot, isActive && styles.dotActive]} />
            <View style={[styles.dot, isActive && styles.dotActive]} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    color: '#A3FF12',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    marginTop: 5,
  },
  cameraContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayTop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayMiddle: {
    flexDirection: 'row',
    height: 250,
  },
  overlaySide: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlayBottom: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  scanFrame: {
    width: 250,
    height: 250,
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#A3FF12',
  },
  topLeft: {
    top: -2,
    left: -2,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderTopLeftRadius: 5,
  },
  topRight: {
    top: -2,
    right: -2,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderTopRightRadius: 5,
  },
  bottomLeft: {
    bottom: -2,
    left: -2,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderBottomLeftRadius: 5,
  },
  bottomRight: {
    bottom: -2,
    right: -2,
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderBottomRightRadius: 5,
  },
  scanLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: '#A3FF12',
    shadowColor: '#A3FF12',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  instructionContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  instructionText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
    fontWeight: '500',
  },
  dotContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  dotActive: {
    backgroundColor: '#A3FF12',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionText: {
    color: '#888',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A3FF12',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});