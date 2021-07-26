import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import { SafeAreaView, ScrollView } from "react-native";
import { Tile } from "react-native-elements";

export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(1);

  if (count > 15) {
    setCount(1);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Tile
          imageSrc={{
            uri: `https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/${count}.jpeg`,
          }}
          title="GRAMARSHI ACADEMY INTERNATIONAL"
          featured
          caption="Building Future"
        />

        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => navigation.navigate("About")}
          >
            About
          </Button>
        </View>
        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => navigation.navigate("NoticeBoard")}
          >
            Notice Board
          </Button>
        </View>
        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => navigation.navigate("PhotoGallary")}
          >
            Photo Gallary
          </Button>
        </View>
        {/* <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => navigation.navigate("VideoGallary")}
          >
            Video Gallary
          </Button>
        </View> */}
        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => navigation.navigate("Student")}
          >
            Student Section
          </Button>
        </View>
        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => navigation.navigate("AdmissionProcessFee")}
          >
            Admission Process and Fee Structure
          </Button>
        </View>
        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => navigation.navigate("ExaminationSchedule")}
          >
            Examation Schedule
          </Button>
        </View>
        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => navigation.navigate("Result")}
          >
            Result
          </Button>
        </View>
        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => navigation.navigate("Career")}
          >
            Join us / Career
          </Button>
        </View>
        <View style={{ padding: 15, borderRadius: 50 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => navigation.navigate("Contact")}
          >
            Contact us
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
