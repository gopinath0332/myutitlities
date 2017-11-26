import React,{Component} from "react";
import {
    NavigatorIOS
} from "react-native";

import Home from "./Home";

export default class  Navigator extends Component{
    render(){
        return(
            <NavigatorIOS initialRoute={{
                component: Home,
                title: "my utilities"
            }}
            style={{
                flex: 1
            }}/>
        );
    }
}