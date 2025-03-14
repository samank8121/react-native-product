import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}
const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className='flex items-center justify-center gap-2'>
      {icon}
      {/* <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text> */}
    </View>
  );
};
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          height: '100%',
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<FontAwesome5 name="home" size={16} color="white" />}
              color={color}
              name='Home'
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          title: 'Favorites',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<FontAwesome5 name="heart" size={16} color="white" />}
              color={color}
              name='Favorites'
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='cart'
        options={{
          title: 'Cart',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={<FontAwesome5 name="shopping-cart" size={16} color="white" />}
              color={color}
              name='Cart'
              focused={focused}
            />
          ),
        }}
      />
       <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={<FontAwesome5 name="user" size={16} color="white" />}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
    </Tabs>
  );
}
