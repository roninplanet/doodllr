import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home page</Text>
      <View style={styles.button}>
        <Button onPress={() => navigation.navigate("todo")} title="Todo" />
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
