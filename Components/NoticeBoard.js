import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-elements";

function NoticeBoard() {
  return (
    <View>
      <Card>
        <Card.Title>NOTICE BOARD</Card.Title>
        <Card.Divider />
        <Image
          resizeMode="cover"
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/notice.jpeg",
          }}
          style={{ width: 350, height: 600 }}
        />
      </Card>
    </View>
  );
}

export default NoticeBoard;
