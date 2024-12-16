import React, { useState } from 'react'
import { View, Pressable, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { ArrowLeft, BadgeCheck, Bell, Eye, EyeOff, Scroll, Search, X } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'

import Logo from '@/assets/logo/tixgenie_logo-no-text.png'
import { Notifications } from '@/data/sampleNotifications'

export default function NotificationScreen() {
    const [searchText, setSearchText] = useState<string>('');

    return (
        <View className='flex-1 items-center px-4 bg-background-400'>
            <View className='flex-row items-center mt-[50px] mb-[20px] w-[90%]'>
                <Pressable onPress={() => console.log("Left icon pressed")} className="mr-[15px]">
                    <ArrowLeft size={24} color={Colors.fontColor.fontColor100}/>
                </Pressable>

                <Pressable onPress={() => console.log("Right icon pressed")} className="ml-auto">
                    <Bell size={24} color={Colors.fontColor.fontColor100}/>
                </Pressable>
            </View>
            <View className="flex-row items-center bg-background-200 rounded-[30px] px-[20px] py-[16px] mb-[20px]">
                <Search size={24} color={Colors.accent.accent500}/>
                <TextInput
                    className="ml-[20px] flex-1 text-gray-700 text-[20px]"
                    placeholder='Search'
                    placeholderTextColor={Colors.fontColor.fontColor200}
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                />
            </View>
            <ScrollView className='w-[95%]'>
                {
                    Notifications.map((notifications) => (
                        <View className='w-full flex flex-row p-[16px] rounded-[15px] mb-[15px] bg-[#FFFFFF]' 
                            key={notifications.id}
                        >
                            <View className='flex items-center w-[15%] mr-[10px]'>
                                <Image
                                    source={Logo}
                                    className="w-[55px] h-[55px]"
                                />
                            </View>
                            <View className='flex flex-col items-center w-[85%] pr-[10px]'>
                                <View className='flex-row justify-between items-start mb-[10px] w-full'>
                                    <Text className="text-background-500 text-[16px]">{notifications.notificationTitle}</Text>
                                    <Text className="text-fontColor-300 text-[14px]">{notifications.notificationTime}</Text>
                                </View>
                                <Text className="text-background-500 text-[16px] mb-[20px] w-full">{notifications.notificationBody}</Text>
                                {
                                    notifications.isProcess && (
                                        <View className="w-full flex-row items-center justify-between">
                                            <Pressable onPress={() => console.log('View or Update')}
                                            >
                                                <View className={`items-center rounded-[8px] p-[10px] w-[130px] h-[40px] bg-primary-300`}>
                                                    <Text className="text-white text-[14px]">
                                                        {
                                                            notifications.notificationType === 'Update' ? 'Update' : 'View'
                                                        }
                                                    </Text>
                                                </View>
                                            </Pressable>
                                            <Pressable onPress={() => console.log('Not now')}
                                            >
                                                <View className={`items-center rounded-[8px] p-[10px] w-[130px] h-[40px] border-[1px] border-background-500`}>
                                                    <Text className="text-background-500 text-[14px]">Not Now</Text>
                                                </View>
                                            </Pressable>
                                        </View>
                                    )
                                }
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
