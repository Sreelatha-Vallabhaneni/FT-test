import React from "react";
import { StyleSheet, Text, View } from "react-native";

function FindButton({ title, fontFamily }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: fontFamily }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    opacity: 100,
    backgroundColor: "#025D92",
    borderColor: "#FFFFFF",
    borderWidth: 1,
  },
  text: {
    width: 315,
    height: "auto",
    textAlign: "center",
    letterSpacing: 0,
    color: "#FFFFFF",
    lineHeight: 26,
    fontSize: 18,
    opacity: 100,
    fontWeight: "bold",
  },
});

export default FindButton;
