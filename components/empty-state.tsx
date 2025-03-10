import { router } from 'expo-router';
import { View, Text } from 'react-native';

import CustomButton from './custom-button';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const EmptyState = ({ title }: { title: string }) => {
  return (
    <View className='flex justify-center items-center px-4'>
      <FontAwesome name='search' size={48} color='white' />

      <Text className='text-sm font-pmedium text-gray-100 mt-5'>{title}</Text>

      <CustomButton
        title='Back to Explore'
        handlePress={() => router.push('/home')}
        containerStyles='w-full my-5'
      />
    </View>
  );
};

export default EmptyState;
