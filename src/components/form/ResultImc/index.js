import React from "react";
import {View, Text, TextInput, Button,TouchableOpacity, Share} from "react-native"
import styles from "./style";
export default function ResultIMC(props){

    const onShare = async ()=>{
        const result = await Share.share({
            message: "meu imc é: "+props.result
        })
    }

    return(
        <View>
            <View style={styles.boxShareButton}>
                <TouchableOpacity onPress={()=>onShare()} style={styles.buttonShare}>
                    <Text>
                        Share
                    </Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.boxResult}>
                <Text style={styles.information}>
                    {props.messageResultImc}
                </Text>
                <Text style={styles.resultImc}>
                    {props.result} 
                </Text>
            </View>
        </View>
    );
}