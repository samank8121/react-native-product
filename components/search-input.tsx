import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, TextInput, Alert } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchInput = ({ initialQuery }:{initialQuery?:string}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center w-full h-16 px-4 rounded-2xl border-2 border-white focus:border-secondary">
      <TextInput
        className="text-base text-white flex-1"
        value={query}
        placeholder="Search a product"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "")
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );

          if (pathname.startsWith("/search")) router.setParams({ query });
          //else router.push(`/search/${query}`);
        }}
      >
        <FontAwesome name="search" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
