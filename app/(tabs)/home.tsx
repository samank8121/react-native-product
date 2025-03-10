import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '@/components/search-input';
import EmptyState from '@/components/empty-state';
import ProductCard from '@/components/product-card';
import { Products } from '@/data/products';

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={Products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} containerStyles='my-2' />}
        ListHeaderComponent={() => (
          <View className='flex my-6 px-4'>
            <SearchInput />

            <View className='w-full flex-1 pt-5'>
              <Text className='text-lg font-pregular text-gray-100 mb-1'>
                Products
              </Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => <EmptyState title='No Product Found' />}
      />
    </SafeAreaView>
  );
}
