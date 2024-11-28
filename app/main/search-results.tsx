import React, { useState } from 'react'
import { View, Pressable, TouchableOpacity, TextInput, Text, ScrollView, Image } from 'react-native'
import { Colors } from '@/constants/Colors'
import { ArrowLeft, Search, X } from 'lucide-react-native'
import { Events } from '@/data/sampleEvents';
import { MaterialIcons } from '@expo/vector-icons';

export default function SearchResultsScreen() {
    const [searchText, setSearchText] = useState<string>('');
    const [searchTerms, setSearchTerms] = useState<string[]>(['shows', 'festivals']);

    const handleAddSearchTerm = () => {
        if (searchText.trim() && !searchTerms.includes(searchText.trim())) {
            setSearchTerms([...searchTerms, searchText.trim()]);
            setSearchText('');
        }
    };

    const handleRemoveSearchTerm = (term: string) => {
        setSearchTerms(searchTerms.filter((item) => item !== term));
    };

    const handlePressEvent = (title: string) => {
        console.log('Event pressed:', title)
    }

    return (
        <View className='flex-1 items-center px-4 bg-background-400'>
            <View className='flex-row items-center mt-[50px] mb-[20px] w-[90%]'>
                <Pressable onPress={() => console.log("Left icon pressed")} className="mr-auto">
                    <ArrowLeft size={24} color={Colors.fontColor.fontColor100}/>
                </Pressable>
            </View>
            <View className="w-[90%] bg-background-200 rounded-[30px] px-[20px] py-[16px] mb-[20px] flex-row items-center flex-wrap">
                {
                    searchTerms.length < 0 && (
                        <Search size={24} color={Colors.accent.accent500} />
                    )
                }
                <View className="flex-row flex-wrap flex-1">
                    {searchTerms.map((term, index) => (
                        <View
                            key={`${term}-${index}`}
                            className="flex-row items-center bg-primary-300 px-3 py-1 rounded-full mr-2 mb-2"
                        >
                            <Text className="text-accent-500 text-[16px] mr-[10px]">{term}</Text>
                            <TouchableOpacity onPress={() => handleRemoveSearchTerm(term)}>
                                <X size={18} color={Colors.accent.accent500} />
                            </TouchableOpacity>
                        </View>
                    ))}

                    <TextInput
                        className="text-gray-700 text-[16px] flex-1"
                        placeholder={searchTerms.length === 0 ? 'Search' : ''}
                        placeholderTextColor={Colors.fontColor.fontColor200}
                        value={searchText}
                        onChangeText={setSearchText}
                        onSubmitEditing={handleAddSearchTerm}
                    />
                </View>
            </View>
            <ScrollView
                className="mb-[10px]"
            >
                <View className="flex-col">
                    {Events.map((event) => (
                        <Pressable
                            key={event.id}
                            onPress={() => handlePressEvent(event.eventTitle)}
                        >
                            <View className="flex-row bg-background-200 rounded-[15px] overflow-hidden w-[355px] h-[175px] mb-[15px]">
                                <View className="w-2/5">
                                    <Image
                                    source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
                                    className="w-full h-full object-cover"
                                    />
                                </View>

                                <View className="flex-1 bg-gray-700 p-4 relative">
                                    <View>
                                        <Text className="text-white text-[20px] font-semibold mb-[10px]">{event.eventTitle}</Text>
                                        <Text className="text-white text-[14px]">
                                            {event.eventDescription}
                                        </Text>
                                    </View>
                                    <Text className="text-background-100 text-[14px] absolute bottom-4 left-4">{event.eventLocation}</Text>
                                </View>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
