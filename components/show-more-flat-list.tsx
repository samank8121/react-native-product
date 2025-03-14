import { FlatList, Pressable, Text } from 'react-native';
import React, { FC } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome5';

interface ShowMoreFlatListProps {
  items: () => (JSX.Element | null)[];
  onViewableItemsChanged?: ({ viewableItems }: any) => void;
  emptyState?: JSX.Element;
  onShowMorePress?: () => void;
}
const ShowMoreFlatList: FC<ShowMoreFlatListProps> = ({
  items,
  onViewableItemsChanged,
  emptyState,
  onShowMorePress,
}) => {
  const getItems = () => {
    const passedItems = items();
    const result = passedItems.filter(Boolean);
    result.length > 0 &&
      result.push(
        <Pressable
          onPress={onShowMorePress}
          className='flex flex-col justify-center items-center h-[350px] p-3 w-64 mx-2'
        >
          <FontAwesome name='arrow-alt-circle-right' size={50} color='white' />
          <Text className='color-white text-center mt-5'>
            See more favorites
          </Text>
        </Pressable>
      );
    return result;
  };
  return (
    <FlatList
      className='w-full'
      data={getItems()}
      horizontal={true}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 80,
      }}
      renderItem={({ item }) => {
        return item;
      }}
      onViewableItemsChanged={onViewableItemsChanged}
      ListEmptyComponent={emptyState}
    />
  );
};

export default ShowMoreFlatList;
