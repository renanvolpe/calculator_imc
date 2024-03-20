import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, Vibration, View } from "react-native";
import styles from "./style";


export default function FormLogin(){

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [textButton, setTextButton] = useState("Logar")
    const [result, setResult] = useState("Preencher os dados para logar")
    const [errorMessage, setErrorMessage] = useState()

    

    function doLogin(){
    }

    function checkNullFields(){
        if(email == null || password == null){
            setErrorMessage("Campo obrigatório*")
            Vibration.vibrate()
        }
    }

    function validatorFields(){}


  
    return (
        <View style={styles.container}>
              <View style={styles.form}>
                <Text style={styles.errorMessage}>
                  {errorMessage}
                </Text>
                <TextInput 
                  onChangeText={setEmail} 
                  value={email} 
                  style={styles.input} 
                  placeholder="Email" 
                //   onFocus={() => Keyboard.dismiss()} // Dismiss keyboard when TextInput is focused
                />
                <Text style={styles.errorMessage}>
                  {errorMessage}
                </Text>
                <TextInput 
                  onChangeText={setPassword} 
                  value={password} 
                  style={styles.input} 
                  placeholder="Password" 
                //   onFocus={() => Keyboard.dismiss()} // Dismiss keyboard when TextInput is focused
                />
                <TouchableOpacity>
                <Text style={styles.forgotPass}>
                  Forgot password
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={validatorFields} style={styles.buttonCalculator}>
                  <Text style={styles.textButtonCalculator}>
                    {textButton}
                  </Text>
                </TouchableOpacity>
              </View>
        </View>
      );
    };
    
    