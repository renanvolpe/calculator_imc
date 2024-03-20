import {View, Text} from "react-native"
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>
                Volpe Store
            </Text>
            <Text style={styles.subTitle}>
                it´s modular and designed to last
            </Text>
        </View>
    )
}


  