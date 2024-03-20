import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        height : "100%"
      },
    formContext:{
        width: '100%',
        marginTop:20,
        // paddingTop:15,
    },
    form:{
        width:"100%",
        marginTop:30,
        // padding:10,
    },
    formLabel:{
        color: "#FFF",
        fontSize:18,
        // paddingLeft:20
    },
    forgotPass:{
        color: "#FFF",
        fontSize:14,
        marginTop:30,
        marginRight: 30,
        alignSelf: "flex-end"

    },
    input:{
        width:"80%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:12,
        alignSelf: 'center', 
      
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"80%",
        backgroundColor:"#0ACF83",
        paddingTop:15,
        paddingBottom:15,
        marginTop:150,
        borderRadius: 10,
        alignSelf: 'center', 
    },
    
    textButtonCalculator :{
        width:"80%",
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20
    },
   
 

});

export default styles