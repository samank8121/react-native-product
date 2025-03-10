import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/custom-button';
import EmptyState from '@/components/empty-state';
import ProductCard from '@/components/product-card';
import { Products } from '@/data/products';

const index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className='flex my-6 px-4 space-y-6'>
          <Text className='color-white'>Products</Text>
        </View>
        <FlatList
          className='w-full h-max'
          data={Products}
          horizontal={true}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} containerStyles='w-[230px] mx-2' />}
          ListEmptyComponent={() => <EmptyState title='No Product Found' />}
        />
        <View className='w-full flex justify-center items-center  px-4'>
          <CustomButton
            title='See All Products'
            handlePress={() => router.push('/home')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
};

export default index;
