import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";

import apiClient from "../Services/apiClient";
import { Icon } from "react-native-elements";
import { colors, parameters } from "../globals/styles";
import React, { useState, useEffect } from "react";
import Slideshow from "react-native-image-slider-show";
import Header from "../context/Header";

const SchoolVan = ({ navigation }) => {
  let imageBucket = [];
  const [information, setInformation] = useState({
    owner: "",
    Driver: "",
    vehicleno: "",
    DriverImage: "",
  });

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.nameView}>
          <Text style={styles.title}>School Van</Text>
        </View>
        <Slideshow
          containerStyle={styles.slideshow}
          overlay={true}
          dataSource={imageBucket}
        />
        <View style={styles.nameBox2}>
          <View style={styles.informationTopic}>
            <Text style={styles.informationTopicText}>Information</Text>
          </View>
          <View style={styles.informationBody}>
            <View style={styles.informationDetail}>
              <Text style={styles.informationDetailText}>Vehicle No</Text>
              <Text style={styles.informationDetailText}>
                {information.vehicleno}
              </Text>
            </View>
            <View style={styles.informationDetail}>
              <Text style={styles.informationDetailText}>Owner</Text>
              <Text style={styles.informationDetailText}>
                {information.owner}
              </Text>
            </View>
            <View style={styles.informationDetail}>
              <Text style={styles.informationDetailText}>Driver</Text>
              <Text style={styles.informationDetailText}>
                {information.Driver}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            Comlpaints & Reviews
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("Payments")}
          >
            Payments
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.button2Text}>Leave This school van</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SchoolVan;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.white,
    height: parameters.SCREEN_HEIGHT,
    paddingTop: parameters.statusBarHeight,
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 30,
    elevation: 10,
    zIndex: 1000,
    marginTop: parameters.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.midBoxWhite,
    height: parameters.headerHeight,

    borderRadius: 10,
    alignItems: "center",
    width: (parameters.SCREEN_WIDTH * 9) / 10,
    justifyContent: "space-between",
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,

    // height:parameters.SCREEN_HEIGHT/7,
  },
  leftSideOfHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    //   paddingLeft:parameters.SCREEN_WIDTH/20
  },
  rightSideOfHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: parameters.SCREEN_WIDTH / 20,
  },
  icon2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 100,
  },
  profilePicSmall: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  logo: {
    marginLeft: 20,
    width: (parameters.SCREEN_WIDTH * 1) / 8,
    height: (parameters.SCREEN_HEIGHT * 0.5) / 8,
  },
  scrollview: {
    display: "flex",
    marginBottom: 20,
  },
  slideshow: {
    alignSelf: "center",
    width: parameters.SCREEN_WIDTH,
    height: (parameters.SCREEN_HEIGHT * 1) / 4,
    borderRadius: 10,
    backgroundColor: colors.orange,
  },
  nameView: {
    marginTop: parameters.SCREEN_HEIGHT / 6,
    display: "flex",
    width: parameters.SCREEN_WIDTH,
    height: parameters.SCREEN_HEIGHT / 8,

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.font,
    fontSize: 30,
    fontFamily: "sans-serif-medium",
    marginTop: -2,
  },
  nameBox2: {
    display: "flex",
    backgroundColor: colors.midBoxWhite,
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 11) / 12,
    height: parameters.SCREEN_HEIGHT / 4,
    marginBottom: "7%",
    alignItems: "center",
    marginTop: "7%",
    borderRadius: 10,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  informationTopic: {
    display: "flex",
    borderRadius: 10,
    width: "85%",
    height: "30%",
    justifyContent: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  informationTopicText: {
    color: colors.grey,
    fontWeight: "bold",
    fontSize: 20,
  },
  informationDetailText: {
    color: colors.grey,
    fontSize: 18,
  },
  informationDetailText2: {
    color: colors.grey2,
    fontSize: 18,
  },
  informationBody: {
    display: "flex",
    borderRadius: 10,
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  informationDetail: {
    display: "flex",
    width: "85%",
    paddingBottom: 5,
    padddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  informationDetail2: {
    display: "flex",
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
  },
  button2: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    width: (parameters.SCREEN_WIDTH * 4) / 6,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
    marginBottom: 100,
  },
  button2Text: {
    color: colors.orange,
    fontSize: 22,
    fontFamily: "sans-serif-medium",
    marginTop: -2,
  },
  textInput: {
    width: (parameters.SCREEN_WIDTH * 4) / 6,
    height: 50,
    marginBottom: 10,
    backgroundColor: "white",
  },
  emergencyBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
  button: {
    height: 60,
    width: (parameters.SCREEN_WIDTH * 4) / 6,
    backgroundColor: colors.orange,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: colors.white,
    fontSize: 22,
    marginTop: -2,
  },
  nameBox4: {
    display: "flex",
    backgroundColor: colors.midBoxWhite,
    alignSelf: "center",
    width: (parameters.SCREEN_WIDTH * 11) / 12,
    height: parameters.SCREEN_HEIGHT / 3,
    alignItems: "center",
    marginTop: "7%",
    borderRadius: 10,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
