import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { euro } from '@/constants';
import IncreaseDecrease from '@/components/increase-decrease';
import { ProductType } from '@/types/product-type';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import useFavorite from '@/hooks/use-favorite';
import { useCart } from '@/hooks/use-cart';


interface ProductCardProps {
  product: ProductType;
  containerStyles?: string;
  showAdd?: boolean;
  enableDeleteAlert?: boolean;
  showFav?: boolean;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product: { id, caption, imageSrc, rate, price, discount, weight, slug },
  containerStyles,
}) => {
  const { isFavorite, toggleFavorite } = useFavorite();
  const { changeProduct, getProductCount } = useCart();
  const onChangeProduct = (count: number) => {
    changeProduct(id, count);
  };
  const onFavorite = () => {
    toggleFavorite(id);
  };

  return (
    <View
      className={`h-[350px] bg-white relative overflow-hidden rounded-lg p-3 ${containerStyles}`}
    >
      {discount && (
        <View className='absolute top-0 right-0 bg-yellow-800 text-yellow-300 px-2 py-1 rounded-md text-xs font-bold'>
          {`-${discount}%`}
        </View>
      )}
      <TouchableOpacity
        className='relative'
        onPress={() => router.push(`/product/${slug}`)}
      >
        <TouchableOpacity
          onPress={onFavorite}
          className='absolute top-0 left-0 p-2 z-10'
        >
          <FontAwesome
            name='heart'
            size={24}
            color={isFavorite(id) ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <Image
          source={imageSrc}
          resizeMode="contain"
          alt={caption}
          className='w-full h-[175px] object-cover rounded-md'
        />
      </TouchableOpacity>
      <View className='mt-2 flex flex-col items-start gap-1'>
        {price !== 0 ? (
          <IncreaseDecrease
            containerStyles='self-end h-9'
            value={getProductCount(id)}
            addBtnText='Add'
            onChange={onChangeProduct}
          />
        ) : (
          <View className='self-end h-9' />
        )}
        {rate !== 0 && (
          <View className='flex flex-row items-center gap-1'>
            <FontAwesome name='star' size={24} color='#FF9C01' />
            <Text className='text-s font-bold'>{rate}</Text>
          </View>
        )}
        <View className='flex flex-row items-center gap-1'>
          <Text className='text-xl font-bold'>
            {Number(price) === 0 ? 'Out of stock' : price}
          </Text>
          {price !== 0 && <Text className='text-xl font-bold'>{euro}</Text>}
        </View>
        <Text className='text-base font-bold text-gray-700 truncate'>
          {caption}
        </Text>
        {weight && (
          <Text className='text-gray-600 text-xs font-bold'>{weight}</Text>
        )}
      </View>
    </View>
  );
};

export default ProductCard;
