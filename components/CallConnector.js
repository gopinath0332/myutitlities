import React, { Component } from "react";
import {
  StyleSheet,
  NativeModules,
  NativeEventEmitter,
  Text,
  View,
  ListView,
  Vibration,
  Button
} from "react-native";

import CallDetector from "react-native-call-detector";

export default class CallConnector extends Component {
  constructor(args) {
    super(args);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      connected: false,
      log: ["initial"]
    };
  }

  componentWillMount() {
    this.callDetector = new CallDetector("phone-connect", event => {
      this.setState({
        log: [...this.state.log, event]
      });
      if (event == "Connected") {
        Vibration.vibrate();
      }
    });
  }

  componentWillUnmount() {
    this.callDetector && this.callDetector.dispose();
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.ds.cloneWithRows([...this.state.log])}
          renderRow={rowData => <Text>{rowData}</Text>}
        />
        <Button
          title="Vibrate Me"
          onPress={() => {
            Vibration.vibrate();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  connected: {
    color: "green"
  }
});
