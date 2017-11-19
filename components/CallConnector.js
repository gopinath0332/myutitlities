import React, { Component } from 'react';
import {
    StyleSheet,
    NativeModules,
    NativeEventEmitter,
    Text,
    View
} from 'react-native';

const {
    CallDetectionManager
} = NativeModules;


export default class CallConnector extends Component {
    constructor(args) {
        super(args);
        this.state = {
            connected: false,
            log: ["intial"]
        };

    }

    componentWillMount() {
        // initiate listener 
        // CallDetectionManager && CallDetectionManager.startListener();
        // this.eventObj = new NativeEventEmitter(CallDetectionManager);
        // this.eventObj.addListener("PhoneCallStateUpdate", (event) => {
        //     this.setState({
        //         log: [...state.log, event]
        //     });
        // });
    }


    componentWillUnmount() {
        // CallDetectionManager && CallDetectionManager.stopListener();
        // if (this.eventObj) {
        //     this.eventObj.removeAllListeners('PhoneCallStateUpdate');
        //     this.eventObj = undefined
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={this.state.connected && styles.connected}>
                    {this.state.log.toString()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    connected: {
        color: "green"
    }
});
