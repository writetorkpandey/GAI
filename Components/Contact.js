import React from "react";

import { Card, Title, Paragraph } from "react-native-paper";

export default function Contact() {
  return (
    <Card
      style={{
        backgroundColor: "pink",
        marginTop: 50,
      }}
    >
      <Card.Content>
        <Card.Cover source={require("../assets/school.jpeg")} />
        <Title>Gramarshi Academy International</Title>
        <Paragraph>
          College Goddopur, near Mahila Pg, Goshainganj, Uttar Pradesh 224141
        </Paragraph>
      </Card.Content>
    </Card>
  );
}
