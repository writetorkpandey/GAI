import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { firebaseConfig } from "./Config";
import firebase from "firebase/app";
import "firebase/firestore";
// import { LogBox } from "react-native";

// LogBox.ignoreLogs(["Setting a timer"]);

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export default function DetailsScreen() {
  const [count, setCount] = useState("test");
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   db.collection("users")
  //     .get()
  //     .then((snapshot) => {
  //       snapshot.forEach((doc) => {
  //         console.log(doc.data());
  //         setCount(doc.data().city);
  //       });
  //     });
  // });
  return (
    <View style={style.container}>
      <Text>{count}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
