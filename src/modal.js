import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import ModalContent from "./modalContent";
import FontLoad from "./fontLoad";
import GetButton from "./getButton";
import FindButton from "./findButton";
import { translator } from "./locale";

function ModalScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        presentationStyle={"pageSheet"}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <TouchableHighlight
          style={styles.close}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          underlayColor="#FFFFFF"
        >
          <Image
            style={{ width: 43, height: 44 }}
            source={require("../assets/CloseX.png")}
          />
        </TouchableHighlight>

        <ModalContent
          title={translator.t("HOME_SCREEN.modalTitle")}
          Dansk={"Dansk"}
          Svenska={"Svenska"}
          Norsk={"Norsk"}
          Tysk={"Tysk"}
          Engelsk={"Engelsk"}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </Modal>
      <View style={styles.homeContainer}>
        <FontLoad
          title={translator.t("HOME_SCREEN.middleText")}
          styles={styles.hTitle}
          fontName={"SourceSansPro_900Black"}
        />
        <View
          style={{
            height: 200,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <GetButton
            title={translator.t("HOME_SCREEN.buttonGetStarted")}
            fontFamily={"SourceSansPro_700Bold"}
          />
          <FindButton
            title={translator.t("HOME_SCREEN.buttonFindTrailer")}
            fontFamily={"SourceSansPro_700Bold"}
          />
          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            underlayColor="#0089B9"
          >
            <View style={styles.sprogBtn}>
              <FontLoad
                title={translator.t("HOME_SCREEN.languageChoice")}
                styles={styles.sprogTxt}
                fontName={"SourceSansPro_400Regular"}
              />
              <Image source={translator.t("HOME_SCREEN.flag")} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: 375,
    height: 667,
    justifyContent: "space-between",
    paddingTop: 40,
    alignItems: "center",
  },
  close: {
    marginTop: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  hTitle: {
    width: 282 || "fitContent",
    height: "auto",
    paddingTop: 12,
    textAlign: "center",
    fontSize: 40,
    textTransform: "uppercase",
    shadowColor: "#00000065",
    color: "#FFFFFF",
    lineHeight: 40,
    letterSpacing: 0,
  },
  sprogBtn: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    width: 163,
    height: 53,
    opacity: 100,
  },
  sprogTxt: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 26,
    textTransform: "uppercase",
  },
});

export default ModalScreen;
