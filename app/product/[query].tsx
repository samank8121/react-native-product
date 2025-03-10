import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router";

const Product = () => {
    const { query } = useLocalSearchParams();
  return (
    <View>
      <Text>Product</Text>
      <Text>{query}</Text>
    </View>
  )
}

export default Product