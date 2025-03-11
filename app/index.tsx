import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/custom-button';

const index = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className='flex my-6 px-4 space-y-6'>
          <Text className='color-white'>Welcome to Product App</Text>
        </View>
        
        <View className='w-full flex justify-center items-center  px-4'>
          <CustomButton
            title='Explore Products'
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
