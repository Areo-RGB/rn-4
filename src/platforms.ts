import { Platform } from 'react-native';

/**
 * Platform helpers for cross-platform compatibility.
 * Some Expo packages (expo-blur, expo-haptics, etc.) lack Windows implementations.
 * Use these guards when adding features that use platform-specific modules.
 */
export const isWindows = Platform.OS === 'windows';

/**
 * Safely run code only on platforms that support it.
 * Use for expo-blur, expo-haptics, and other modules without Windows support.
 */
export function whenSupported<T>(
  fn: () => T,
  fallback: T,
  unsupportedPlatforms: string[] = ['windows'],
): T {
  if (unsupportedPlatforms.includes(Platform.OS)) {
    return fallback;
  }
  return fn();
}
