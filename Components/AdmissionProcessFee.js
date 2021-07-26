import React from "react";
import { View, Image } from "react-native";
import { Card } from "react-native-elements";

function AdmissionProcessFee() {
  return (
    <View>
      <Card>
        <Card.Title> FEE DETAILS</Card.Title>
        <Card.Divider />
        <Image
          resizeMode="cover"
          source={{
            uri: "https://gramarshiacademyinternational.s3.ap-south-1.amazonaws.com/fee.jpeg",
          }}
          style={{ width: 350, height: 600 }}
        />
      </Card>
    </View>
  );
}

export default AdmissionProcessFee;
