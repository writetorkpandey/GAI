import React from "react";

import { Image } from "react-native-elements";
import { Card } from "react-native-elements";
import { SafeAreaView, ScrollView } from "react-native";

export default function PhotoGallary() {
  const users = [
    {
      name: "",
      avatar: "https://reactnative.dev/img/tiny_logo.png",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Card>
          <Card.Title>PHOTO GALLARY</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i}>
                <Image source={{ uri: u.avatar }} />
                <Text>{u.avatar}</Text>
              </View>
            );
          })}
        </Card> */}

        <Image
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/1.jpeg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/2.jpeg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/3.jpeg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/4.jpeg",
          }}
          style={{ width: 400, height: 400 }}
        />
        <Image
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/PIC/5.jpeg",
          }}
          style={{ width: 400, height: 400 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
