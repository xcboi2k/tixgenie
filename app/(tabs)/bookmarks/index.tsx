import React, { useState } from 'react'
import { View, Pressable, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { ArrowLeft, BadgeCheck, Bell, BookmarkMinus, Eye, EyeOff, MapPin, Scroll, Search, X } from 'lucide-react-native'
import { Colors } from '@/constants/Colors'

import SampleUser1 from '@/assets/images/bookmark-users/sample-user1.jpg'
import SampleUser2 from '@/assets/images/bookmark-users/sample-user2.jpg'
import SampleUser3 from '@/assets/images/bookmark-users/sample-user3.jpg'
import { Bookmarks } from '@/data/sampleBookmarks'

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
            <ScrollView className='w-[95%]'>
                {
                    Bookmarks.map((bookmark) => (
                        <View className="w-full p-4 bg-background-400 border border-fontColor-200 rounded-[24px] mb-[20px]"
                            key={bookmark.id}
                        >
                            {/* Event Image */}
                            <View className="relative">
                                <Image
                                    source={bookmark.imageUrl}
                                    className="h-40 w-full rounded-t-lg p-0"
                                />
                                <View className="absolute top-2 right-2 bg-background-400 border border-primary-300 px-2 py-1 rounded-full">
                                    <Text className="text-white text-[12px]">{bookmark.date}</Text>
                                </View>
                            </View>
                            <View className="mt-4">
                                <View className='flex-row justify-between items-start mb-[10px] w-full'>
                                    <Text className="text-white text-[16px]">{bookmark.name}</Text>
                                    <Pressable onPress={() => console.log("Remove bookmark pressed")} className="ml-auto">
                                        <BookmarkMinus size={20} color={Colors.primary.primary300}/>
                                    </Pressable>
                                </View>
                                <View className="flex-row items-center mb-[10px]">
                                    <View className="border border-primary-300 px-2 py-1 rounded-full mr-2">
                                        <Text className="text-primary-300 text-[6px]">{bookmark.type}</Text>
                                    </View>

                                    {/* New User Badges as Overlapping Images */}
                                    <View className="flex-row mr-[10px]">
                                        <Image
                                            source={SampleUser1} // Replace with actual image URL
                                            className="h-6 w-6 rounded-full mr-[-5px]" // Adjust margin for overlap
                                        />
                                        <Image
                                            source={SampleUser2} // Replace with actual image URL
                                            className="h-6 w-6 rounded-full mr-[-5px]" // Adjust margin for overlap
                                        />
                                        <Image
                                            source={SampleUser3} // Replace with actual image URL
                                            className="h-6 w-6 rounded-full" // No margin needed for the last image
                                        />
                                    </View>

                                    <Text className="text-white text-[14px]">{bookmark.attendees}</Text>
                                </View>

                                {/* Location */}
                                <View className="flex-row items-center">
                                    <MapPin size={20} color={Colors.primary.primary300}/>
                                    <Text className="text-white text-[14px] ml-[5px]">
                                        {bookmark.location}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
