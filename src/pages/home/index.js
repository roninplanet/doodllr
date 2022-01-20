import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Card } from "../../organisms";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home page</Text>
      <View style={styles.button}>
        <Card.Note onPress={() => navigation.navigate("todo")} />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("login")}
          style={styles.button}
          title="Login"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "10rem",
    margin: 10,
  },
});
