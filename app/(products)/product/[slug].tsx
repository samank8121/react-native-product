import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


const ProductScreen = () => {
  const { slug } = useLocalSearchParams();
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View>
        <Text className='text-sm font-pmedium text-gray-100 mt-5'>Product</Text>
        <Text className='text-sm font-pmedium text-gray-100 mt-5'>{slug}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
