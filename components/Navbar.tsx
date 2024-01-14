import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";

const Navbar: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Logo.png")} // Logo resminizin yolu
          style={styles.logo}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  loginButton: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Navbar;
