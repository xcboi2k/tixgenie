import React, { useState } from 'react'
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { Bell, Bookmark, BookmarkPlus, LayoutGrid, Search } from 'lucide-react-native';

import { Colors } from '@/constants/Colors';
import { Categories } from '@/data/sampleCategories';
import { MusicFestivals } from '@/data/sampleFestivalData';

export default function HomeScreen() {
    const [searchText, setSearchText] = useState<string>('');
    const [selectedTab, setSelectedTab] = useState<string>('music-festival')

    const handlePressCategory = (code: string) => {
        setSelectedTab(code)
    }

    return (
        <View className='flex-1 items-center px-4 bg-background-400'>
            <View className='flex-row items-center mt-[50px] mb-[20px] w-[90%]'>
                <Pressable onPress={() => console.log("Left icon pressed")} className="mr-auto">
                    <LayoutGrid size={24} color={Colors.fontColor.fontColor100}/>
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
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-[10px]"
            >
                <View className="flex-row gap-2">
                    {Categories.map((category) => (
                        <Pressable
                            key={category.id}
                            onPress={() => handlePressCategory(category.categoryCode)}
                        >
                            <View className={`flex-row items-center rounded-[30px] p-[10px] ${selectedTab === category.categoryCode ? 'bg-primary-300' : 'bg-background-200'} mr-[10px]`}>
                                <Text className='text-white'>
                                    {category.categoryName}
                                </Text>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
            <View className="flex-row items-center mb-[10px] justify-between w-full">
                <Text className='text-white text-[28px] font-bold'>
                    Music Festivals
                </Text>
                <Pressable 
                    onPress={() => console.log('See All Music Festivals')}
                >
                    <Text className='text-background-100 text-[14px]'>
                        See All
                    </Text>
                </Pressable>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="mb-[20px]"
            >
                <View className="flex-row gap-2">
                    {MusicFestivals.map((festival) => (
                        <View key={festival.id} className='relative w-[315px] h-[380px] rounded-[30px] overflow-hidden mr-[15px]'>
                            <Image
                                source={festival.imageUrl}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                            <Pressable 
                                className="absolute top-4 right-4 bg-background-100 rounded-[14px] w-[50px] h-[50px] items-center justify-center"
                                onPress={() => console.log('Bookmark pressed')}
                            >
                                <BookmarkPlus size={24} color={Colors.fontColor.fontColor100} />
                            </Pressable>
                            <View className="absolute bottom-4 left-4 right-4">
                            <Text className="text-background-100 text-[16px]">{festival.date}</Text>
                                <Text className="text-white text-[24px] mb-1">{festival.name}</Text>
                            </View>
                        </View>

                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
