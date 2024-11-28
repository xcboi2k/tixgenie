import React from 'react'
import { Pressable, Text } from 'react-native'

interface ButtonTextProps {
    width?: string,
    variant?: 'filled' | 'outlined'
    onPress: () => void
    label: string
}

export default function ButtonText({ width='100%', variant = 'filled', onPress, label }: ButtonTextProps) {
    return (
        <Pressable 
            onPress={onPress}
            className={`
                w-[${width}]
                px-[16px] 
                py-[16px] 
                rounded-[30px]
                items-center
                justify-center
                ${variant === 'filled' ? 'bg-primary-300' : 'border border-primary-300'}
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
