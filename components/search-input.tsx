import { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import commonQueryClient from '@/utils/get-query-client';
import { queryKeys } from '@/constants';
import { Products } from '@/data/products';

const SearchInput = ({ initialQuery }: { initialQuery?: string }) => {
  const [query, setQuery] = useState(initialQuery || '');
  const onSearch = () => {
    if (query === '') {
      commonQueryClient.setQueryData([queryKeys.products], Products);
    } else {
      const filteredProducts = Products.filter((product) =>
        product.caption.toLowerCase().includes(query.toLowerCase())
      );
      commonQueryClient.setQueryData([queryKeys.products], filteredProducts);
    }
  };
  return (
    <View className='flex flex-row items-center w-full h-16 px-4 rounded-2xl border-2 border-white focus:border-secondary'>
      <TextInput
        className='text-base text-white flex-1'
        value={query}
        placeholder='Search a product'
        placeholderTextColor='#CDCDE0'
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity
        onPress={onSearch}
      >
        <FontAwesome name='search' size={16} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
