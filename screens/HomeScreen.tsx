import { View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import BrandsScrollView from "../components/BrandsScrollView";
import Navbar from "../components/Navbar";
import CustomCarousel from "../components/CustomCarousel";
import React from "react";

const HomeScreen: React.FC = () => {
  const images = [
    require("../assets/images/CocaColaCampaign.png"),
    require("../assets/images/SpriteCampaign.png"),
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Navbar />
        <BrandsScrollView />
        <CustomCarousel images={images} />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default HomeScreen;
