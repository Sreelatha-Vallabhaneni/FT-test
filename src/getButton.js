import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function GetButton({ title, fontFamily }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={[styles.text, { fontFamily: fontFamily }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#33333367",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 4,
    opacity: 100,
    backgroundColor: "#025D92",
    borderColor: "#33333367",
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

export default GetButton;
