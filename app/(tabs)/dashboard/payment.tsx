import React, { useState } from 'react'
import { View, Pressable, Text, TouchableOpacity, TextInput } from 'react-native'
import { ArrowLeft } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'
import ButtonText from '@/components/ButtonText'

export default function PaymentScreen() {
    const [selectedPayment, setSelectedPayment] = useState<string>('');

    return (
        <View className='flex-1 items-center px-4 bg-background-400'>
            <View className='flex-row items-center mt-[50px] mb-[40px] w-[90%]'>
                <Pressable onPress={() => console.log("Left icon pressed")} className="mr-[15px]">
                    <ArrowLeft size={24} color={Colors.fontColor.fontColor100}/>
                </Pressable>
                <Text className="text-white text-[24px]">Payment</Text>
            </View>
            <View className='mb-[15px] w-[90%]'>
                <View className='flex-row items-center'>
                    <Text className="text-white text-[24px] mb-[15px] mr-auto">Payment Method</Text>
                    <Pressable>
                        <Text className="text-accent-200 text-[12px] ml-auto">Add New Card</Text>
                    </Pressable>
                </View>
                <View className='flex-row items-center justify-between rounded-[30px] border-background-100 border-[1px] p-[16px] w-[337px] h-[80px] mb-[15px]'>
                    <Text className="text-white text-[16px]">Paypal</Text>
                    <Pressable onPress={() => setSelectedPayment('Paypal')}>
                        <View className={`rounded-[100px] border-primary-300 border-[1px] p-[10px] w-[22px] h-[22px] ${selectedPayment === 'Paypal' ? 'bg-primary-300' : ''}`} />
                    </Pressable>
                </View>
                <View className='flex-row items-center justify-between rounded-[30px] border-background-100 border-[1px] p-[16px] w-[337px] h-[80px] mb-[15px]'>
                    <Text className="text-white text-[16px]">VISA</Text>
                    <Pressable onPress={() => setSelectedPayment('VISA')}>
                        <View className={`rounded-[100px] border-primary-300 border-[1px] p-[10px] w-[22px] h-[22px] ${selectedPayment === 'VISA' ? 'bg-primary-300' : ''}`} />
                    </Pressable>
                </View>
                <View className='flex-row items-center justify-between rounded-[30px] border-background-100 border-[1px] p-[16px] w-[337px] h-[80px] mb-[15px]'>
                    <Text className="text-white text-[16px]">GCASH</Text>
                    <Pressable onPress={() => setSelectedPayment('GCASH')}>
                        <View className={`rounded-[100px] border-primary-300 border-[1px] p-[10px] w-[22px] h-[22px] ${selectedPayment === 'GCASH' ? 'bg-primary-300' : ''}`} />
                    </Pressable>
                </View>
            </View>
            <View className='mb-[40px] w-[90%]'>
                <Text className="text-white text-[24px] mb-[15px] mr-auto">Add Voucher</Text>
                <View className="flex-row items-center border border-gray-400 rounded-full overflow-hidden">
                    <TextInput
                        className="flex-1 px-4 py-2 text-white"
                        placeholder="Voucher Code"
                        placeholderTextColor="white"
                    />
                    <Pressable onPress={() => console.log('Submit Voucher')}>
                        <View className="bg-primary-300 px-4 rounded-[30px] w-[117px] h-[40px] justify-center items-center">
                            <Text className="text-white text-[14px]">Apply</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View className='w-[90%]'>
                <ButtonText variant='filled' label='Continue' onPress={() => console.log('Continue')}/>
            </View>
        </View>
    )
}
