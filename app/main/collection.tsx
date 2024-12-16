import React, { useState } from 'react'
import { View, Pressable, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { ArrowLeft, BadgeCheck, Bell, BookmarkPlus, Eye, EyeOff, Scroll, Search, X } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'

import Logo from '@/assets/logo/tixgenie_logo-small.png'
import { Collection } from '@/data/sampleCollection'

export default function CollectionScreen() {
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
                    Collection.map((collection) => (
                        <View className='w-full flex flex-col p-[20px] rounded-[30px] mb-[15px] bg-[#FFFFFF]' key={collection.id}>
                            <View className="mb-[10px]">
                                <Text className="text-[#DAA210] text-[24px]">{collection.ticketName}</Text>
                            </View>
                            <View className='flex-row justify-between items-center mb-[10px] w-full'>
                                <Text className="text-background-400 text-[14px]">{collection.ticketType}</Text>
                                <Text className="text-background-400 text-[14px]">{collection.ticketDuration} hours</Text>
                                <Text className="text-background-400 text-[14px]">Ticket No. {collection.ticketNumber}</Text>
                            </View>
                            <View className='flex-row justify-between items-center mb-[10px] w-full'>
                                <View className="flex flex-col">
                                    <Text className="text-background-500 text-[14px] mb-[5px] font-bold">{collection.ticketStartTime}</Text>
                                    <Text className="text-[#808C95] text-[14px]">{collection.ticketDate}</Text>
                                </View>
                                <Text className="text-accent-300 text-[14px]">Non stop</Text>
                                <View className="flex flex-col items-end">
                                    <Text className="text-background-500 text-[14px] mb-[5px] font-bold">{collection.ticketEndTime}</Text>
                                    <Text className="text-[#808C95] text-[14px]">{collection.ticketDate}</Text>
                                </View>
                            </View>
                            <View className="flex-row items-center w-full my-[15px]">
                                <View className="flex-1 h-[1px]" 
                                    style={{
                                        borderStyle: 'dashed',
                                        borderWidth: 1,
                                        borderColor: '#808C95',
                                        borderRadius: 1,
                                        height: 0,
                                        marginTop: 1,
                                    }}
                                />
                            </View>
                            <View className='flex-row justify-between items-center w-full'>
                                <View className='flex-row items-center'>
                                    <Image
                                        source={Logo}
                                        className="h-[30px] w-[150px]"
                                    />
                                </View>
                                <View className='flex-row items-center'>
                                    <Text className="text-accent-200 text-[14px] font-bold mr-[10px]">PHP {collection.ticketPrice}</Text>
                                    <TouchableOpacity 
                                        className="w-[35px] h-[35px] bg-fontColor-300 rounded-full items-center justify-center"
                                        onPress={() => console.log('Bookmark pressed')}
                                    >
                                        <BookmarkPlus size={20} color={Colors.accent.accent200} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))
                }
                
            </ScrollView>
        </View>
    )
}
