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
  isDark?: boolean;
};

const IncreaseDecrease: React.FC<IncreaseDecreaseProps> = ({
  value = 0,
  addBtnText,
  maxValue = 999,
  alternativeText,
  onChange,
  containerStyles,
  isDark=true,
}) => {
  const onChanging = (newValue: number) => {
    if (newValue <= maxValue && onChange) {
      onChange(newValue);
    }
  };
  const getTextColor = ()=>{
    return isDark? 'text-white' : 'text-primary';
  }
  const getIconColor = ()=>{
    return isDark? 'white' : 'primary';
  }
  return (
    <View className={`flex flex-row h-9 ${containerStyles}`}>
      {value === 0 ? (
        <Pressable
          className={`flex flex-row h-9 w-32 rounded-full items-center justify-center ${isDark? 'bg-primary' : 'bg-white'}`}
          onPress={() => onChanging(1)}
        >
          <FontAwesome name='plus' size={22} color={getIconColor()} />
          {addBtnText && <Text className={`ml-2 font-bold ${getTextColor()}`}>{addBtnText}</Text>}
        </Pressable>
      ) : (
        <View className={`flex flex-row w-32 px-3 justify-between items-center rounded-full ${isDark? 'bg-primary' : 'bg-white'}`}>
          <Pressable
            className='w-7 h-7 items-center justify-center '
            onPress={() => onChanging(value - 1)}
          >
            {value === 1 ? (
              <FontAwesome
                name='trash-alt'
                size={20}
                color={getIconColor()}
              />
            ) : (
              <FontAwesome
                name='minus'
                size={20}
                color={getIconColor()}
              />
            )}
          </Pressable>
          <Text className={`text-lg font-bold px-2 ${getTextColor()}`}>
            {alternativeText ?? value}
          </Text>
          <Pressable
            className='w-7 h-7 items-center justify-center'
            onPress={() => onChanging(value + 1)}
          >
            <FontAwesome name='plus' size={20} color={getIconColor()} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

IncreaseDecrease.displayName = 'IncreaseDecrease';
export default IncreaseDecrease;
