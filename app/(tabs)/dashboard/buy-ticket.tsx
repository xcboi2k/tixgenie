import React, { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import { ArrowLeft } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'
import ButtonText from '@/components/ButtonText'

export default function BuyTicketScreen() {
    const [isVIPSelected, setIsVIPSelected] = useState<boolean>(true)
    const [isRegularSelected, setIsRegularSelected] = useState<boolean>(false)

    const [seatNumber, setSeatNumber] = useState<number>(0)

    return (
        <View className='flex-1 items-center px-4 bg-background-400'>
            <View className='flex-row items-center mt-[50px] mb-[40px] w-[90%]'>
                <Pressable onPress={() => console.log("Left icon pressed")} className="mr-[15px]">
                    <ArrowLeft size={24} color={Colors.fontColor.fontColor100}/>
                </Pressable>
                <Text className="text-white text-[24px]">Buy Ticket</Text>
            </View>
            <View className='mb-[15px] w-[90%]'>
                <Text className="text-white text-[24px] mb-[15px]">Ticket Type</Text>
                <View className="w-[100%] flex-row items-center justify-between">
                    <Pressable onPress={() => {
                            setIsVIPSelected(true);
                            setIsRegularSelected(false);
                        }}
                    >
                        <View className={`items-center rounded-[20px] p-[10px] w-[160px] h-[50px] 
                            ${isVIPSelected ? 'bg-primary-300' : 'border-[1px] border-primary-300'}`}>
                            <Text className="text-white text-[16px]">VIP</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => {
                            setIsVIPSelected(false);
                            setIsRegularSelected(true);
                        }}
                    >
                        <View className={`items-center rounded-[20px] p-[10px] w-[160px] h-[50px]
                            ${isRegularSelected ? 'bg-primary-300': 'border-[1px] border-primary-300'}`}>
                            <Text className="text-white text-[16px]">Regular</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View className='mb-[80px] w-[90%]'>
                <Text className="text-white text-[24px] mb-[15px]">Seat</Text>
                <View className='flex-row items-center justify-between rounded-[30px] border-background-100 border-[1px] px-[24px] py-[16px]'>
                    <Pressable onPress={() => seatNumber !== 0 && setSeatNumber(seatNumber - 1)}>
                        <View className='items-center rounded-[20px] bg-background-100 p-[10px] w-[70px] h-[50px]'>
                            <Text className="text-white text-[24px]">-</Text>
                        </View>
                    </Pressable>
                    <Text className="text-white text-[24px]">{seatNumber}</Text>
                    <Pressable onPress={() => setSeatNumber(seatNumber + 1)}>
                        <View className='items-center rounded-[20px] bg-background-100 p-[10px] w-[70px] h-[50px]'>
                            <Text className="text-white text-[24px]">+</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View className='mb-[15px] w-[90%]'>
                <View className='rounded-[30px] border-background-100 border-[1px] p-[16px]'>
                    <Text className="text-white text-[20px] mb-[20px]">Bill Detail</Text>
                    <View className='flex-row items-center justify-between mb-[10px]'>
                        <Text className="text-white text-[14px]">Price:</Text>
                        <Text className="text-primary-300 text-[14px]">PHP 50,000</Text>
                    </View>
                    <View className='flex-row items-center justify-between mb-[10px]'>
                        <Text className="text-white text-[14px]">Quantity:</Text>
                        <Text className="text-primary-300 text-[14px]">x{seatNumber}</Text>
                    </View>
                    <View className='flex-row items-center justify-between'>
                        <Text className="text-white text-[14px]">Total:</Text>
                        <Text className="text-primary-300 text-[14px]">PHP 10,000</Text>
                    </View>
                </View>
            </View>
            <View className='w-[90%]'>
                <ButtonText variant='filled' label='Continue' onPress={() => console.log('Continue')}/>
            </View>
        </View>
    )
}
