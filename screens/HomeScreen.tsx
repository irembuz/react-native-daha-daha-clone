import { View, Text, StyleSheet } from "react-native";

import Navbar from "../components/Navbar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar />
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
