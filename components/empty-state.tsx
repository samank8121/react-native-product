import { View, Text, useWindowDimensions } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { FC } from 'react';

interface EmptyStateProps {
  title: string
  containerStyles?: string;
}
const EmptyState:FC<EmptyStateProps> = ({ title, containerStyles }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ width: width }}  className={`flex justify-center items-center px-4 ${containerStyles}`}>
      <FontAwesome name='search' size={48} color='white' />

      <Text className='text-lg text-gray-100 mt-5'>{title}</Text>
    </View>
  );
};

export default EmptyState;
