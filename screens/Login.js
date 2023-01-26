import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import styles from "../components/style";


import {  signInWithMail } from "../firebase";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");




  return (
    <View style={styles.containerLogin}>
        <View style={styles.containerLogin}>

            
          <View style={styles.inputLogin}>
            <View style={styles.inputitem}>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Enter your email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            </View>
            <View style={styles.inputitem}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.inputText}
              autoCapitalize="none"
              placeholder="Enter your password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry= {true}
            />
            </View>

          </View>
          <View style={styles.inputinside}>
            <Button
              title="Login"
              onPress={() =>
                signInWithMail(email, password) & navigation.navigate("Home")
              }
            />
          </View>


        </View>
     
    </View>
  );
}
