import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchInput from '@/components/search-input';
import EmptyState from '@/components/empty-state';
import ProductCard from '@/components/product-card';
import { Products } from '@/data/products';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@/constants';
import { ProductType } from '@/types/product-type';

const ProductsScreen = () => {
  const { data: products, isLoading } = useQuery<ProductType[]>({
    queryKey: [queryKeys.products],
    initialData: Products,
  });
  if (isLoading) return <Text>Loading...</Text>;
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={products}
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

export default ProductsScreen;
