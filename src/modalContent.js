import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import FontLoad from "./fontLoad";
import AllButtons from "./allButtons";
import i18n from "i18n-js";

function ModalContent({
  title,
  Dansk,
  Svenska,
  Norsk,
  Tysk,
  Engelsk,
  setModalVisible,
  modalVisible,
}) {
  const [key, setKey] = useState([]);

  return (
    <View style={{ alignItems: "center" }}>
      <FontLoad
        title={title}
        styles={styles.modalTitle}
        fontName={"SourceSansPro_900Black"}
      />
      <View
        style={{
          alignItems: "center",
          height: 500,
          justifyContent: "space-between",
        }}
      >
        <AllButtons
          Dansk={Dansk}
          Svenska={Svenska}
          Norsk={Norsk}
          Tysk={Tysk}
          Engelsk={Engelsk}
          setKey={setKey}
        />
        <TouchableHighlight
          onPress={() => {
            setModalVisible(!modalVisible);
            {
              key ? (i18n.locale = key) : (i18n.locale = "da");
            }
          }}
          style={styles.submitBtn}
        >
          <FontLoad
            title={"ok"}
            styles={styles.submitTxt}
            fontName={"SourceSansPro_600SemiBold"}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalTitle: {
    color: "#060C10",
    fontSize: 28,
    lineHeight: 30,
    letterSpacing: 0,
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingBottom: 40,
    width: 300,
  },
  submitTxt: {
    marginTop: 10,
    width: 290,
    height: 44,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  submitBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#025E93",
    borderRadius: 25,
  },
});

export default ModalContent;
