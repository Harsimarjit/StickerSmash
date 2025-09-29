import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";


const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#25292e",
    flex: 1,
    alignItems: "center",
  },
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color:"#fff",
  },
  image:{
    width:320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer:{
    flex:1,
  },
});