import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5 } from "@expo/vector-icons";

const DetailScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/CocaColaDetail.png")}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome5 name="arrow-circle-left" size={40} color="gray" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        Her Altın Kapakta Bir Coca-Cola + Coffee Keyfi
      </Text>
      <Text style={styles.description}>
        Coca-Cola Coffee, kolanın lezzetini kahve aroması ile bir araya getirir.
        Brezilya kahve çekirdeklerinin lezzetiyle aromalanan Coca Cola,
        geleneksel lezzetine modern bir yorum katarak raflarda yer alır. Yeni
        tatlara açık olanların beğenisini kazanan kahveli Coca-Cola, kutu
        tasarımı ile çantada bile kolaylıkla taşınır. Kahve tiryakilerinin bir
        yudum ferahlık istediği anlarda tercihi olacak ürün, dünyada en çok
        yankı uyandıran kola edisyonları arasında yer almaktadır. İçeceğin soğuk
        tüketilmesi önerilir. Buzla beraber içilebilir. Özellikle sıcak yaz
        günlerinde ferahlatıcı etki gösterir.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Hemen Katıl</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    position: "relative",
    width: 375,
    height: 315,
  },
  header: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  image: {
    width: 375,
    height: 315,
    resizeMode: "cover",
  },
  backButton: {
    position: "absolute",
    top: 63,
    left: 27,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DetailScreen;
