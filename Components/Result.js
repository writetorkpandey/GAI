import React from "react";
import { TextInput, Button, Headline } from "react-native-paper";
import { View } from "react-native";

export default function Result() {
  const [text, setText] = React.useState("");

  return (
    <View>
      <View style={{ alignItems: "center", padding: 30 }}>
        <Headline> RESULT</Headline>
      </View>
      <View style={{ marginTop: 1, padding: 50 }}>
        <TextInput
          type="outlined"
          placeholder="Enter Roll Number"
          label="Enter Roll Number"
          value={Number}
          onChangeText={(text) => setText(text)}
        />
        <View style={{ padding: 20 }}>
          <Button
            icon="folder"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
}
