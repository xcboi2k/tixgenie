import { ImageBackground, TouchableOpacity, View, Pressable, Text, ScrollView, Image } from 'react-native'
import { ArrowLeft, ArrowRight, BookmarkPlus, CalendarDays, ChevronRight, Clock, LayoutGrid } from 'lucide-react-native'

import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import ButtonText from '@/components/ButtonText'

export default function FeatureScreen() {
    return (
        <View className='flex-1 items-center bg-background-400'>
            {/* Background Image */}
            <ImageBackground
                source={require('../../assets/images/festivals/tomorrowland.jpg')} // Replace with your image URL
                className="w-full h-[300px] justify-between mt-[25px]"
                resizeMode="cover"
            >
                {/* Header Icons */}
                <View className="flex-row justify-between p-4 mt-[25px]">
                    <Pressable onPress={() => console.log("Left icon pressed")} className="mr-auto">
                        <ArrowLeft size={24} color={Colors.fontColor.fontColor100}/>
                    </Pressable>

                    <Pressable onPress={() => console.log("Right icon pressed")} className="ml-auto">
                        <BookmarkPlus size={24} color={Colors.fontColor.fontColor100} />
                    </Pressable>
                </View>

                {/* Event Details */}
                <View className="p-4">
                    <Text className="text-white text-[24px] font-bold mb-2">Tomorrowland</Text>
                    <View className="flex-row justify-between">
                        <View className="flex-row items-center">
                            <CalendarDays size={16} color={Colors.background.background100}/>
                            <Text className="text-background-100 text-[14px] ml-[4px]">9 - 10 December, 2022</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Clock size={16} color={Colors.background.background100}/>
                            <Text className="text-background-100 text-[14px] ml-[4px]">4pm - 11pm</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <ScrollView
                className="mb-[10px] p-[10px]"
            >
                <View className="flex-1 px-[10px]">
                    <View className='mb-[15px]'>
                        <Text className="text-white text-[16px] mb-[10px]">Description</Text>
                        <Text className="text-background-100 text-[14px] mb-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor simet, conseorem ipsum dolor sit a</Text>
                        <Pressable onPress={() => console.log("Description read more pressed")}>
                            <Text className="text-primary-300 text-[12px]">Read More</Text>
                        </Pressable>
                    </View>
                    <View className='mb-[15px]'>
                        <View className="w-full h-[140px] rounded-[16px] overflow-hidden mb-[10px]">
                            <Image
                                source={require('../../assets/images/placeholders/google-map.png')}
                                className="w-full h-full rounded-[16px] object-cover"
                            />
                        </View>
                        <View className='flex items-end'>
                            <Pressable onPress={() => console.log("Description read more pressed")} className='flex-row'>
                                <Text className="text-background-100 text-[12px] mr-[5px]">View Full Map</Text>
                                <ArrowRight size={16} color={Colors.background.background100}/>
                            </Pressable>
                        </View>
                    </View>
                    <ButtonText variant='filled' label='Buy Ticket' onPress={() => console.log('Buy Ticket')}/>
                </View>
            </ScrollView>
        </View>
    )
}
