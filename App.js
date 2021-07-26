import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Appbar } from "react-native-paper";
import HomeScreen from "./Components/HomeScreen";
import DetailsScreen from "./Components/DetailsScreen";
import Student from "./Components/Student";
import Contact from "./Components/Contact";
import Result from "./Components/Result";
import PhotoGallary from "./Components/PhotoGallary";
import VideoGallary from "./Components/VideoGallary";
import NoticeBoard from "./Components/NoticeBoard";
import AdmissionProcessFee from "./Components/AdmissionProcessFee";
import ExaminationSchedule from "./Components/ExaminationSchedule";
import About from "./Components/About";
import Career from "./Components/Career";
import { View, Text } from "react-native";

function CustomNavigationBar({ navigation, previous }) {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}

      {/* <Appbar.Content
        title="GRAMARSHI ACADEMY"
        subtitle="GOSHAINGANJ ,AYODHYA"
      /> */}

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: 25,
            color: "yellow",
            fontStyle: "italic",
            fontWeight: "700",
            textDecorationColor: "yellow",
            textShadowColor: "red",
          }}
        >
          GRAMARSHI ACADEMY
        </Text>
      </View>
    </Appbar.Header>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
        <Stack.Screen name="PhotoGallary" component={PhotoGallary} />
        {/* <Stack.Screen name="VideoGallary" component={VideoGallary} /> */}
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen
          name="AdmissionProcessFee"
          component={AdmissionProcessFee}
        />
        <Stack.Screen
          name="ExaminationSchedule"
          component={ExaminationSchedule}
        />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Career" component={Career} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
