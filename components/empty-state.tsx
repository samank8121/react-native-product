import { View, Text } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome5';

const EmptyState = ({ title }: { title: string }) => {
  return (
    <View className='flex justify-center items-center px-4'>
      <FontAwesome name='search' size={48} color='white' />

      <Text className='text-sm text-gray-100 mt-5'>{title}</Text>
    </View>
  );
};

export default EmptyState;
