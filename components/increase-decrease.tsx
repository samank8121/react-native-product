import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome5';

type IncreaseDecreaseProps = {
  value?: number;
  addBtnText?: string;
  maxValue?: number;
  alternativeText?: string;
  containerStyles?: string;
  onChange?: (value: number) => void;
};

const IncreaseDecrease: React.FC<IncreaseDecreaseProps> = ({
  value = 0,
  addBtnText,
  maxValue = 999,
  alternativeText,
  onChange,
  containerStyles,
}) => {
  const onChanging = (newValue: number) => {
    if (newValue <= maxValue && onChange) {
      onChange(newValue);
    }
  };
  return (
    <View className={`flex flex-row h-9 ${containerStyles}`}>
      {value === 0 ? (
        <Pressable
          className='flex flex-row h-9 w-32 bg-primary rounded-full items-center justify-center'
          onPress={() => onChanging(1)}
        >
          <FontAwesome name='plus' size={22} color='white' />
          {addBtnText && <Text className='ml-2 font-bold text-white'>{addBtnText}</Text>}
        </Pressable>
      ) : (
        <View className='flex flex-row w-32 px-3 justify-between items-center bg-primary rounded-full'>
          <Pressable
            className='w-7 h-7 items-center justify-center '
            onPress={() => onChanging(value - 1)}
          >
            {value === 1 ? (
              <FontAwesome
                name='trash-alt'
                size={20}
                color='white'
              />
            ) : (
              <FontAwesome
                name='minus'
                size={20}
                color='white'
              />
            )}
          </Pressable>
          <Text className='text-white text-lg font-bold px-2'>
            {alternativeText ?? value}
          </Text>
          <Pressable
            className='w-7 h-7 items-center justify-center'
            onPress={() => onChanging(value + 1)}
          >
            <FontAwesome name='plus' size={20} color='white' />
          </Pressable>
        </View>
      )}
    </View>
  );
};

IncreaseDecrease.displayName = 'IncreaseDecrease';
export default IncreaseDecrease;
