import React from 'react'
import { View, Pressable, Text, TextInput, TouchableOpacity } from 'react-native'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'
import ButtonText from '@/components/ButtonText';

export default function AddNewCardScreen() {
    const [fullName, setFullName] = React.useState('');
    const [cardNumber, setCardNumber] = React.useState('');
    const [expiryDate, setExpiryDate] = React.useState('');
    const [cvv, setCvv] = React.useState('');
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
                                    {formatCardNumber(cardNumber)}
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
                                {fullName || 'FULL NAME'}
                            </Text>
                            <Text className="text-blue-200 text-[12px]">Cardholder</Text>
                        </View>
                        <View>
                            <Text className="text-white text-[12px] font-bold">
                                {expiryDate ? formatExpiryDate(expiryDate) : '**/**'}
                            </Text>
                            <Text className="text-blue-200 text-[12px]">Valid</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className='mb-[30px] w-[90%]'>
                <View className="mb-[10px] w-full">
                    <Text className="mb-[5px] text-white text-[14px]">
                        Full Name <Text className="text-red-500">*</Text>
                    </Text>
                    <View className="w-full rounded-[30px] px-[20px] py-[10px] bg-background-400 border-[1px] border-background-300 flex-row items-center">
                        <TextInput
                            className="flex-1 text-white text-[14px]"
                            placeholder="Enter full name"
                            placeholderTextColor={Colors.background.background300}
                            onChangeText={(text) => setFullName(text)}
                            value={fullName}
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    </View>
                </View>
                <View className='mb-[10px]'>
                    <Text className='mb-[5px] text-white text-[14px]'>Card Number <Text className="text-red-500">*</Text></Text>
                    <View className="w-full rounded-[30px] px-[20px] py-[10px] bg-background-400 border-[1px] border-background-300 flex-row items-center">
                        <TextInput
                            className="flex-1 text-white text-[14px]"
                            placeholder='Enter card number'
                            placeholderTextColor={Colors.background.background300}
                            onChangeText={(text) => setCardNumber(text.replace(/\D/g, ''))}
                            value={cardNumber}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="numeric"
                            maxLength={16}
                        />
                    </View>
                </View>
                <View className='w-full flex flex-row'>
                    <View className='w-[70%]'>
                        <Text className='mb-[5px] text-white text-[14px]'>Expiry Date <Text className="text-red-500">*</Text></Text>
                        <View className="w-[185px] rounded-[30px] px-[20px] py-[10px] bg-background-400 border-[1px] border-background-300 flex-row items-center">
                            <TextInput
                                className="flex-1 text-white text-[14px]"
                                placeholder='MM/YY'
                                placeholderTextColor={Colors.background.background300}
                                onChangeText={(text) => {
                                    const cleaned = text.replace(/\D/g, '');
                                    if (cleaned.length <= 4) {
                                        setExpiryDate(cleaned);
                                    }
                                }}
                                value={expiryDate.replace(/(\d{2})(?=\d)/, '$1/')}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="numeric"
                                maxLength={5}
                            />
                        </View>
                    </View>
                    <View className='w-[30%]'>
                        <Text className='mb-[5px] text-white text-[14px]'>CW <Text className="text-red-500">*</Text></Text>
                        <View className="w-[110px] rounded-[30px] px-[20px] py-[10px] bg-background-400 border-[1px] border-background-300 flex-row items-center">
                            <TextInput
                                className="flex-1 text-white text-[14px]"
                                placeholder='CVV'
                                placeholderTextColor={Colors.background.background300}
                                onChangeText={(text) => setCvv(text.replace(/\D/g, ''))}
                                value={cvv}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="numeric"
                                maxLength={3}
                                secureTextEntry
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View className='w-[90%]'>
                <ButtonText variant='filled' label='Continue' onPress={() => console.log('Continue')}/>
            </View>
        </View>
    )
}
