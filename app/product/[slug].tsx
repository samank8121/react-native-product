import { View, Text, Image } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductType } from '@/types/product-type';
import { useQuery } from '@tanstack/react-query';
import { Products } from '@/data/products';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import IncreaseDecrease from '@/components/increase-decrease';
import { useCart } from '@/hooks/use-cart';

const ProductScreen = () => {
  const { slug } = useLocalSearchParams();
  const { getProductCount, changeProduct } = useCart();
  const onChangeProduct = (productid: number, value: number) => {
    changeProduct(productid, value);
  };
  const { data, isLoading } = useQuery<ProductType | undefined>({
    queryKey: ['product', slug],
    queryFn: async () => {
      const product = Products.find((product) => product.slug === slug);
      return product;
    },
  });
  if (isLoading || !data) {
    return null;
  }

  const { id, caption, imageSrc, rate, price, weight, description } = data;
  return (
    <SafeAreaView className='bg-primary h-full'>
      <View className='flex flex-col justify-center items-center w-full p-4 overflow-hidden'>
        <Image
          source={imageSrc}
          className='w-64 h-64 rounded-xl'
          resizeMode='contain'
        />
      </View>
      <View className='mt-5 px-3 w-full items-left'>
        <Text className='text-2xl text-white font-bold'>{caption}</Text>
        <View className='flex-row gap-4 items-center mt-2'>
          <Text className='text-white'>{weight}</Text>
          <Text className='text-white'>|</Text>
          {rate !== 0 && (
            <View className='flex-row gap-2 items-center text-white'>
              <FontAwesome name='star' size={24} color='#FF9C01' />
              <Text className='font-bold text-white'>{rate}</Text>
            </View>
          )}
          <Text className='text-white'>|</Text>
          <Text className='font-bold text-lg text-white'>{`${price} €`}</Text>
        </View>
        {price !== 0 && (
          <IncreaseDecrease
            isDark={false}
            value={getProductCount(id)}
            addBtnText='Add'
            onChange={(value) => {
              onChangeProduct(id, value);
            }}
          />
        )}
        <Text className='text-lg mt-5 text-white'>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
