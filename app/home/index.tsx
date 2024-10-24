import React from 'react'
import { View, Text, Image } from "react-native";

export default function HomeScreen() {
    return (
        <View className="flex-1 items-center justify-center px-4">
            <Image source={require("../../assets/logo/pikbil-logo.png")} className="w-[180px]" />
        </View>
    )
}
