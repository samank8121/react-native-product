import { FC, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnUI,
} from 'react-native-reanimated';

interface ScalableItemProps {
  isActive: boolean;
  children: React.ReactNode;
}
const ScalableItem: FC<ScalableItemProps> = ({ isActive, children }) => {
  const scale = useSharedValue(1);

  const scaleOperation = () => {
    'worklet';
    scale.value = withTiming(isActive ? 1 : 0.9, { duration: 300 });
  };
  useEffect(() => {
    runOnUI(scaleOperation)();
  }, [isActive]);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  return <Animated.View style={[animatedStyle]}>{children}</Animated.View>;
};
export default ScalableItem;
