import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [Log, setlog] = useState("");
  const [Reg, setregister] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/log2.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="LOGIN"
          placeholderTextColor="#003f5c"
          onChangeText={(Log) => setlog(Log)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="REGISTER"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Reg) => setregister(Reg)}
        /> 
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Welcome to BEN 10 UNIVERSE</Text> 
      </TouchableOpacity> 
      
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#00FF00",
    borderRadius: 30,
    width: "40%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});