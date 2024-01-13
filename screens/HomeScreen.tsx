import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CustomCarousel from "../components/CustomCarousel";

const HomeScreen: React.FC = () => {
  const images = [require("../assets/images/CocaColaCampaign.png")];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <CustomCarousel images={images} />
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default HomeScreen;
