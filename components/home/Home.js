import React,{Component} from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import css from "./styles";

const styles = StyleSheet.create(css);


export default class Home extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text> Home Page </Text>
            </View>
        );
    }
}