import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const BrandsScrollView: React.FC = () => {
  const brands = [
    {
      name: "Fırsat Bul",
      image: require("../assets/images/firsatbul-logo.png"),
    },
    { name: "Sprite", image: require("../assets/images/sprite-logo.png") },
    {
      name: "Burger King",
      image: require("../assets/images/burgerking-logo.png"),
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.brandsContainer}
    >
      {brands.map((brand, index) => (
        <TouchableOpacity key={index} style={styles.brandItem}>
          <Image source={brand.image} style={styles.brandLogo} />
          <Text style={styles.brandText}>{brand.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  brandsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  brandItem: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
  },
  brandLogo: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    marginRight: 10,
  },
  brandText: {
    fontSize: 12,
    color: "#333",
  },
});

export default BrandsScrollView;
