import { router } from 'expo-router';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/custom-button';
import EmptyState from '@/components/empty-state';
import ProductCard from '@/components/product-card';
import { Products } from '@/data/products';
import useFavorite from '@/hooks/use-favorite';
import { useRef, useState } from 'react';
import ScalableItem from '@/components/scalable-item';

import ShowMoreFlatList from '@/components/show-more-flat-list';

const HomeScreen = () => {
  const { favorites } = useFavorite();
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const getFavorites = () => {
    if (Array.isArray(favorites) && favorites.length > 0) {
      const favoriteItems = favorites.slice(0, 3).map((item, index) => {
        const product = Products.find(
          (product) => product.id === item.productId
        );
        return product ? (
          <ScalableItem isActive={index === activeIndex}>
            <ProductCard product={product} containerStyles='w-64 mx-2' />
          </ScalableItem>
        ) : null;
      });
     
      return favoriteItems;
    }
    return [];
  };
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView
        contentContainerStyle={{
          minHeight: '100%',
        }}
      >
        <View className='flex my-6 px-4 space-y-6'>
          <Text className='color-white'>Favorites</Text>
        </View>
        <ShowMoreFlatList
          items={getFavorites}
          onViewableItemsChanged={onViewableItemsChanged}
          emptyState={
            <EmptyState
              title='No Favorite Found'
              containerStyles='h-[350px]'
            />
          }
          onShowMorePress={() => router.push('/favorites')}
        />
        <View className='flex my-6 px-4 space-y-6'>
          <Text className='color-white'>Product</Text>
        </View>
        <FlatList
          className='w-full flex-1'
          data={Products}
          horizontal={true}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard product={item} containerStyles='w-64 mx-2' />
          )}
          ListEmptyComponent={() => <EmptyState title='No Product Found' />}
        />
        <View className='w-full flex justify-center items-center px-4'>
          <CustomButton
            title='See All Products'
            handlePress={() => router.push('/products')}
            containerStyles='w-full my-7'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
