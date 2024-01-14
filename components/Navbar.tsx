import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.logo}
        />
        <View style={styles.rightContainer}>
          {isLoggedIn ? (
            <FontAwesome name="user-circle" size={40} color="red" />
          ) : (
            <>
              <TouchableOpacity
                onPress={handleLogin}
                style={styles.loginButton}
              >
                <Text style={styles.loginButtonText}>Giriş Yap</Text>
              </TouchableOpacity>
              <FontAwesome name="user-circle" size={40} color="black" />
            </>
          )}
        </View>
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
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  loginButton: {
    backgroundColor: "red",
    width: 91,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});

export default Navbar;
