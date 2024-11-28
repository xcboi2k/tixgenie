import React from 'react'
import { View, Pressable, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { ArrowLeft, Download, Share2, Check, CircleCheckBig } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'
import SampleQRCode from '@/assets/images/placeholders/sample_qr.png'
import SampleFestivalImage from '@/assets/images/festivals/lollapalooza.jpg'
import ButtonText from '@/components/ButtonText'

export default function QRCodeScreen() {
    return (
        <View className='flex-1 items-center px-4 bg-background-400'>
            <View className='flex-row items-center mt-[50px] mb-[40px] w-[90%]'>
                <Pressable onPress={() => console.log("Left icon pressed")} className="mr-[15px]">
                    <ArrowLeft size={24} color={Colors.fontColor.fontColor100}/>
                </Pressable>
            </View>
            <ScrollView className='w-[90%]'>
                <View className='w-[100%] flex-row items-center justify-between mb-[20px]'>
                    <View className='flex-row items-center justify-between'>
                        <Download width={24} height={24} color="#ffffff"/>
                        <Text className="ml-[10px] text-white text-[14px]">Download</Text>
                    </View>
                    <View className='flex-row items-center justify-between'>
                        <Share2 width={24} height={24} color="#ffffff"/>
                        <Text className="ml-[10px] text-white text-[14px]">Share</Text>
                    </View>
                </View>
                <View className=" w-[100%] border rounded-2xl bg-white shadow-lg mb-[15px]">
                    {/* Header */}
                    <View className="bg-[#1D1F21] rounded-t-2xl">
                        <Image
                        source={SampleFestivalImage}
                        className="h-[321px] w-full rounded-t-2xl"
                        />
                    </View>

                    {/* Body and QR Code in row */}
                    <View className="flex-row justify-between p-4">
                        {/* Transaction Details */}
                        <View className="flex-1">
                            <View className='flex-row items-center'>
                                <CircleCheckBig width={24} height={24} color={Colors.primary.primary300}/>
                                <Text className="ml-[10px] text-black text-[14px]">Payment Successful!</Text>
                            </View>
                            <Text className="text-gray-500 text-sm mt-2">
                            Reference Number:
                            </Text>
                            <Text className="text-black font-medium text-sm">
                            xxxx-xxxx-xxxx
                            </Text>
                            <Text className="text-gray-500 text-sm mt-1">
                            Jan 01, 2022, 07:09 PM
                            </Text>
                        </View>

                        {/* QR Code */}
                        <View className="items-center justify-center ml-4">
                            <Image
                            source={SampleQRCode}
                            className="h-[100px] w-[100px]"
                            />
                        </View>
                    </View>
                </View>
                <View className='w-[100%] mb-[10px]'>
                    <ButtonText variant='filled' label='Add to Collection' onPress={() => console.log('Add to Collection')}/>
                </View>
                <View className='w-[100%] mb-[10px]'>
                    <ButtonText variant='outlined' label='Back to Home' onPress={() => console.log('Back to Home')}/>
                </View>
            </ScrollView>
        </View>
    )
}
