import { View, Text, FlatList } from 'react-native';
import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Products } from '@/data/products';
import ProductCard from '@/components/product-card';
import EmptyState from '@/components/empty-state';
import useFavorite from '@/hooks/use-favorite';

const FavoritesScreen = () => {
  const { favorites } = useFavorite();
  return (
    <SafeAreaView className='bg-black h-full px-4'>
      <View className='flex my-6 space-y-6'>
          <Text className='color-white'>Favorites</Text>
        </View>
        <FlatList
          className='w-full flex-1 '
          data={favorites ?? []}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
          }}
          keyExtractor={(item) => item.productId.toString()}
          renderItem={({ item }) => {
            if (!item) return null;
            const product = Products.find(
              (product) => product.id === item.productId
            );
            return product ? (
              <ProductCard product={product} containerStyles='w-full my-2' />
            ) : null;
          }}
          ListEmptyComponent={() => <EmptyState title='No Favorite Found' />}
        />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
