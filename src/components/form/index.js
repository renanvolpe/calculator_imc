import React,{useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList } from "react-native"
import ResultIMC from './ResultImc/'
import styles from "./style";


export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencher o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState()
    const [imcList, setImcList] = useState([])

    

    function imcCalculator(){
        let heightFormat = height.replace(",",".")
        let totalImc = (weight/(heightFormat*heightFormat)).toFixed(2)
        setImcList ((arr) => [...arr, {id: new Date().getTime() ,imc:totalImc}])
        return setImc(totalImc)
    }

    function checkNullFields(){
        if(imc == null){
            setErrorMessage("Campo obrigatório*")
            Vibration.vibrate()
        }
    }

    function validatorImc(){
        if(weight !=null && height !=null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular novamente")
            setErrorMessage()
            
        }else{
            checkNullFields()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
            setErrorMessage("campo obrigatório")
        }
    }


    return(
        <View style={styles.formContext} >
             {   
            imc == null
            ?
                <View style={styles.form}> 
               
                <Text style={styles.formLabel}>
                    Altura
                </Text>
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>
                <TextInput onChangeText={setHeight} value={height}
                style={styles.input}
                placeholder="insira a altura" keyboardType="numeric"/>

                <Text style={styles.formLabel}>
                    Peso
                </Text>
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>
                <TextInput onChangeText={setWeight} value={weight}
                style={styles.input}
                placeholder="insira seu peso" keyboardType="numeric"/>

                <TouchableOpacity onPress={()=>validatorImc()} style={styles.buttonCalculator}>
                    <Text style={styles.textbuttonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
                </View>
           
            : <View style={styles.boxResultIMC}>
                <TouchableOpacity onPress={()=>validatorImc()} style={styles.buttonCalculator}>
                    <Text style={styles.textbuttonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
                <ResultIMC messageResultImc={messageImc} result={imc}/>
              </View>
            }
            <FlatList style={styles.listImcs} data={imcList} renderItem={({item}) =>{
                return(
                    <View style={styles.resultImcItem}>
                        <Text style ={styles.textResultItem}>
                           Resultado IMC =  {item.imc}
                        </Text>
                    </View>
                )
            }} keyExtractor={(item) =>{item.id}}>
            </FlatList>
        </View>
    );
}