import { View, Text } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

const FavoritesScreen = () => {
  return (
    <SafeAreaView className='bg-black h-full'>
      <View className='bg-green-300 flex-1'>
        <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;
