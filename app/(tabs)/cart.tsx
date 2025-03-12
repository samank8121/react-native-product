import EmptyState from '@/components/empty-state';
import IncreaseDecrease from '@/components/increase-decrease';
import { euro } from '@/constants';
import { Products } from '@/data/products';
import { useCart } from '@/hooks/use-cart';
import { View, Text, FlatList, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
  const { carts, changeProduct } = useCart();

  const getCartList = () => {
    const cartList =
      carts &&
      carts.products &&
      Object.entries(carts.products).map((p) => {
        const currProductId = Number(p[0]);
        const productInfo = Products.filter(
          (product) => product.id === currProductId
        );
        const { id, caption, price, imageSrc } = productInfo[0];
        return {
          id,
          caption,
          price: `${p[1] * price} ${euro}`,
          quantity: p[1],
          imageSrc,
        };
      });
    return cartList;
  };

  return (
    <SafeAreaView className='bg-black h-full px-4'>
      <View className='flex my-6 space-y-6'>
        <Text className='color-white'>Cart</Text>
      </View>
      <FlatList
        className='w-full flex-1 '
        data={getCartList()}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 70,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          if (!item) return null;
          return (
            <View className='flex flex-row gap-4 items-top my-2 border border-gray-200 p-4 rounded-lg overflow-hidden'>
              <Image
                source={item.imageSrc}
                className='w-32 h-32 rounded-lg'
                resizeMode='contain'
              />
              <View className='flex flex-column gap-3 '>
                <View className='flex flex-row gap-4'>
                  <Text className='color-white font-bold'>{item.caption}</Text>
                  <Text className='color-white font-bold'>|</Text>
                  <Text className='color-white font-bold'>{item.price}</Text>
                </View>
                <IncreaseDecrease
                  value={item.quantity}
                  onChange={(value) => {
                    changeProduct(item.id, value);
                  }}
                />
              </View>
            </View>
          );
        }}
        ListEmptyComponent={() => <EmptyState title='No Favorite Found' />}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
