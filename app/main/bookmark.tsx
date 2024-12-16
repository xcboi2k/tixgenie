import React, { useState } from 'react'
import { View, Pressable, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { ArrowLeft, BadgeCheck, Bell, Eye, EyeOff, Scroll, Search, X } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'

export default function BookmarkScreen() {
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
            <ScrollView className='w-[90%]'>
                
            </ScrollView>
        </View>
    )
}
