import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontLoad from "./fontLoad";

function AllButtons({ Dansk, Svenska, Norsk, Tysk, Engelsk, setKey }) {
  const [daState, setDaState] = useState(false);
  const [svState, setSvState] = useState(false);
  const [noState, setNoState] = useState(false);
  const [deState, setDeState] = useState(false);
  const [enState, setEnState] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={daState ? styles.btnSelect : styles.button}
        onPress={() => {
          setKey("da");
          setDaState(!daState);
        }}
      >
        <FontLoad
          title={Dansk}
          styles={daState ? styles.txtSelect : styles.text}
          fontName={"SourceSansPro_600SemiBold"}
        />
        <Image
          source={require("../assets/flags/dk.png")}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={svState ? styles.btnSelect : styles.button}
        onPress={() => {
          setKey("sv");
          setSvState(!svState);
        }}
      >
        <FontLoad
          title={Svenska}
          styles={svState ? styles.txtSelect : styles.text}
          fontName={"SourceSansPro_600SemiBold"}
        />
        <Image
          source={require("../assets/flags/se.png")}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={noState ? styles.btnSelect : styles.button}
        onPress={() => {
          setKey("no");
          setNoState(!noState);
        }}
      >
        <FontLoad
          title={Norsk}
          styles={noState ? styles.txtSelect : styles.text}
          fontName={"SourceSansPro_600SemiBold"}
        />
        <Image
          source={require("../assets/flags/en.png")}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={deState ? styles.btnSelect : styles.button}
        onPress={() => {
          setKey("de");
          setDeState(!deState);
        }}
      >
        <FontLoad
          title={Tysk}
          styles={deState ? styles.txtSelect : styles.text}
          fontName={"SourceSansPro_600SemiBold"}
        />
        <Image
          source={require("../assets/flags/ge.png")}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={enState ? styles.btnSelect : styles.button}
        onPress={() => {
          setKey("en");
          setEnState(!enState);
        }}
      >
        <FontLoad
          title={Engelsk}
          styles={enState ? styles.txtSelect : styles.text}
          fontName={"SourceSansPro_600SemiBold"}
        />
        <Image
          source={require("../assets/flags/en.png")}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    width: 290,
    height: 400,
  },
  text: {
    color: "#6D7784",
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 290,
    height: 44,
    alignItems: "center",
  },
  buttonIcon: {
    width: 35,
    height: 17,
  },
  txtSelect: {
    color: "black",
    fontSize: 18,
    lineHeight: 26,
    letterSpacing: 0,
    fontWeight: "800",
  },
  btnSelect: {
    fontSize: 18,
    borderColor: "#33333367",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 290,
    height: 44,
    alignItems: "center",
    borderRadius: 25,
  },
});

export default AllButtons;
