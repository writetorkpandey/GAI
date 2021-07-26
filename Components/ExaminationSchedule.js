import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-elements";

function ExaminationSchedule() {
  return (
    <View>
      <Card>
        <Card.Title> EXAMINATION SCHEDULE</Card.Title>
        <Card.Divider />
        <Image
          resizeMode="cover"
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/examschedule.jpeg",
          }}
          style={{ width: 350, height: 600 }}
        />
      </Card>
    </View>
  );
}

export default ExaminationSchedule;
