import React from 'react'
import { Pressable, Text } from 'react-native'

interface ButtonTextProps {
    variant?: 'filled' | 'outlined'
    onPress: () => void
    label: string
}

export default function ButtonText({ variant = 'filled', onPress, label }: ButtonTextProps) {
    return (
        <Pressable 
            onPress={onPress}
            className={`
                px-[16px] 
                py-[16px] 
                rounded-[30px]
                items-center
                justify-center
                ${variant === 'filled' ? 'bg-primary-300' : 'border border-white'}
            `}
        >
            <Text className={`
                text-[24px] 
                font-medium 
                text-white
                text-center
            `}>
                {label}
            </Text>
        </Pressable>
    )
}
