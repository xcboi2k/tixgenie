import React from 'react';
import { Tabs } from 'expo-router';
import { Home, Receipt, CreditCard, LogOut } from 'lucide-react-native';
import { TouchableOpacity, Alert } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{ headerShown: false }}
        >
            <Tabs.Screen
                name="index"
                options={{
                title: "Dashboard",
                tabBarIcon: ({ color }) => <Home size={24} color={color} />,
                }}
            />
            {/* <Tabs.Screen
                name="transactions"
                options={{
                title: "Transactions",
                tabBarIcon: ({ color }) => <Receipt size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="payments"
                options={{
                title: "Payments",
                tabBarIcon: ({ color }) => <CreditCard size={24} color={color} />,
                }}
            /> */}
        </Tabs>
    );
}