import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        marginTop:20,
        paddingTop:15,
        // justifyContent:"space-around",
        backgroundColor:"#e0e5e5",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
    },
    formLabel:{
        color: "#000",
        fontSize:18,
        paddingLeft:20
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:12
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginTop:30,
    },
    
    textbuttonCalculator :{
        fontSize: 20,
        color: "#fff"
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20
    },
    boxResultIMC:{
        width:"100%",
        paddingHorizontal:10,
        justifyContent:"center",
    },
    listImcs:{
        marginTop:20,
        width:"100%",
    },
    resultImcItem:{
        height:30,
        width:"100%",
        alignItems:"center",
        marginVertical:30,
    },
    textResultItem:{
        fontSize:30,
       
        color:"red",
    }

});

export default styles