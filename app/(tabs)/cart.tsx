import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
  return (
    <SafeAreaView className='bg-black h-full'>
      <View className='bg-red-400 flex-1'>
        <Text>Cart</Text>
      </View>
    </SafeAreaView>
  );
}

export default CartScreen
