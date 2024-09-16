import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home/HomeScreen';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import DiaryScreen from '../screens/Diary/DiaryScreen';
import ChatbotScreen from '../screens/Chatbot/ChatbotScreen';
import MyPageScreen from '../screens/Mypage/MypageScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Diary" component={DiaryScreen} />
      <Tab.Screen name="Chatbot" component={ChatbotScreen} />
      <Tab.Screen name="MyPage" component={MyPageScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;