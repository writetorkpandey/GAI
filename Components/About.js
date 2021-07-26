import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-elements";

function About() {
  return (
    <View>
      <Card>
        <Card.Title> </Card.Title>
        <Card.Divider />
        <Image
          resizeMode="cover"
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/about.jpeg",
          }}
          style={{ width: 350, height: 600 }}
        />
      </Card>
    </View>
  );
}

export default About;
