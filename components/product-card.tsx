import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { euro } from '@/constants';
// import IncreaseDecrease from '@/components/increase-decrease/increase-decrease';
import { ProductType } from '@/types/ProductType';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface ProductCardProps {
  product: ProductType;
  containerStyles?: string;
  value?: number;
  showAdd?: boolean;
  enableDeleteAlert?: boolean;
  showFav?: boolean;
  className?: string;
  onChange?: (value: number) => void;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product: { caption, imageSrc, rate, price, discount, weight, slug },
  value,
  containerStyles,
  onChange,
}) => {
  const onChangeProduct = (count: number) => {
    if (onChange) {
      onChange(count);
    }
  };

  return (
    <View
      className={`w-full h-[350px] bg-white relative overflow-hidden rounded-lg p-3 ${containerStyles}`}
    >
      {discount && (
        <View className='absolute top-0 right-0 bg-yellow-800 text-yellow-300 px-2 py-1 rounded-md text-xs font-bold'>
          {`-${discount}%`}
        </View>
      )}
      <TouchableOpacity onPress={() => router.push(`/product/${slug}`)}>
        <Image
          source={imageSrc}
          alt={caption}
          className='w-full h-[175px] object-cover rounded-md'
        />
      </TouchableOpacity>
      <View className='mt-2 flex flex-col items-start gap-1'>
        {price !== 0 ? (
          // <IncreaseDecrease
          //   className='self-end h-9'
          //   value={value}
          //   addBtnText='add'
          //   onChange={onChangeProduct}
          // />
          <View className='self-end h-9' />
        ) : (
          <View className='self-end h-9' />
        )}
        {rate !== 0 && (
          <View className='flex flex-row items-center gap-1'>
            <FontAwesome name='star' size={24} color='black' />
            <Text className='text-blue-400 text-xs font-bold'>{rate}</Text>
          </View>
        )}
        <View className='flex flex-row items-center gap-1'>
          <Text className='text-blue-500 text-xl font-bold'>
            {Number(price) === 0 ? 'Out of stock' : price}
          </Text>
          {price !== 0 && (
            <Text className='text-blue-500 text-xl font-bold'>{euro}</Text>
          )}
        </View>
        <Text className='text-blue-400 text-base font-bold truncate'>
          {caption}
        </Text>
        {weight && (
          <Text className='text-gray-700 text-xs font-bold'>{weight}</Text>
        )}
      </View>
    </View>
  );
};

export default ProductCard;
