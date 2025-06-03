import React from 'react'
import { View, Pressable, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { ArrowLeft, BadgeCheck, Eye, EyeOff, Scroll, X } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'
import ButtonText from '@/components/ButtonText';

export default function PaymentConfirmationScreen() {
    const [showCardNumber, setShowCardNumber] = React.useState(false);

    const formatCardNumber = (number: string) => {
        if (!number) return '**** **** **** ****';
        const groups = number.match(/.{1,4}/g) || [];
        return groups.map(group => showCardNumber ? group : '****').join(' ');
    };

    const formatExpiryDate = (date: string) => {
        if (!date) return '**/**';
        return date.replace(/(\d{2})(\d{2})/, '$1/$2');
    };

    return (
        <View className='flex-1 items-center px-4 bg-background-400'>
            <View className='flex-row items-center mt-[50px] mb-[40px] w-[90%]'>
                <Pressable onPress={() => console.log("Left icon pressed")} className="mr-[15px]">
                    <ArrowLeft size={24} color={Colors.fontColor.fontColor100}/>
                </Pressable>
                <Text className="text-white text-[24px]">Add New Card</Text>
            </View>
            <ScrollView>
                <View className="w-[330px] h-[210px] bg-accent-400 rounded-[10px] p-6 shadow-md mb-[20px] overflow-hidden">
                    <View className="absolute -right-20 -top-20 w-[200px] h-[200px] rotate-45 opacity-10">
                        <View className="absolute w-full h-full bg-white" />
                    </View>
                    <View className="absolute -left-20 -bottom-20 w-[200px] h-[200px] rotate-45 opacity-10">
                        <View className="absolute w-full h-full bg-white" />
                    </View>
                    <View className="absolute right-40 top-20 w-[100px] h-[100px] rotate-45 opacity-5">
                        <View className="absolute w-full h-full bg-white" />
                    </View>
                    <View className="absolute left-20 bottom-10 w-[80px] h-[80px] rotate-45 opacity-5">
                        <View className="absolute w-full h-full bg-white" />
                    </View>
                    <View className="absolute top-4 right-4">
                        <View className="bg-white px-2 py-1 rounded flex-row items-center gap-1">
                            <Text className="text-blue-600 font-bold text-xs">VISA</Text>
                        </View>
                    </View>
                    <View className="h-full">
                        <View className="flex-1 justify-center">
                            <View className="flex-row justify-between items-center">
                                <View>
                                    <Text className="text-white text-[16px] font-bold">
                                        {formatCardNumber('1111111111111111')}
                                    </Text>
                                    <Text className="text-white text-[12px]">Card number</Text>
                                </View>
                                <TouchableOpacity 
                                    onPress={() => setShowCardNumber(!showCardNumber)}
                                    className="p-2"
                                >
                                    {showCardNumber ? (
                                        <Eye width={24} height={24} color="#ffffff" />
                                    ) : (
                                        <EyeOff width={24} height={24} color="#ffffff" />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View className="flex-row justify-between items-end">
                            <View>
                                <Text className="text-white text-[12px] font-bold">
                                    Juan Dela Cruz
                                </Text>
                                <Text className="text-blue-200 text-[12px]">Cardholder</Text>
                            </View>
                            <View>
                                <Text className="text-white text-[12px] font-bold">
                                    01/01
                                </Text>
                                <Text className="text-blue-200 text-[12px]">Valid</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='mb-[15px] w-[100%]'>
                    <Text className="text-white text-[20px] mb-[5px]">Voucher</Text>
                    <View className='rounded-[30px] border-background-100 border-[1px] p-[16px]'>
                        <View className='flex-row items-center justify-between mb-[20px]'>
                            <View className='flex-row items-center justify-between'>
                                <BadgeCheck width={24} height={24} color="#ffffff"/>
                                <Text className="ml-[10px] text-white text-[14px]">Voucher Code Applied</Text>
                            </View>
                            <X width={24} height={24} color={Colors.primary.primary300} />
                        </View>
                        <View className='flex-row items-center'>
                            <View className='flex-row items-center'>
                                <Text className="ml-[10px] text-primary-300 text-[16px]">EJC22</Text>
                            </View>
                            <View className='ml-[10px] rounded-[30px] border-primary-300 border-[1px] p-[8px]'>
                                <Text className="text-primary-300 text-[6px] font-bold">20% OFF</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='mb-[15px] w-[100%]'>
                    <View className='rounded-[30px] border-background-100 border-[1px] p-[16px]'>
                        <Text className="text-white text-[20px] mb-[20px]">Bill Detail</Text>
                        <View className='flex-row items-center justify-between mb-[10px]'>
                            <Text className="text-white text-[14px]">Price:</Text>
                            <Text className="text-primary-300 text-[14px]">PHP 10,000</Text>
                        </View>
                        <View className='flex-row items-center justify-between mb-[10px]'>
                            <Text className="text-white text-[14px]">Discount:</Text>
                            <Text className="text-primary-300 text-[14px]">PHP 1,000</Text>
                        </View>
                        <View className='flex-row items-center justify-between'>
                            <Text className="text-white text-[14px]">Total:</Text>
                            <Text className="text-primary-300 text-[14px]">PHP 9,000</Text>
                        </View>
                    </View>
                </View>
                <View className='w-[100%] mb-[10px]'>
                    <ButtonText variant='filled' label='Continue' onPress={() => console.log('Continue')}/>
                </View>
            </ScrollView>
        </View>
    )
}
