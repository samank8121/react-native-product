import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView className='bg-black h-full'>
      <View className='bg-blue-400 flex-1'>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
}
export default ProfileScreen;

