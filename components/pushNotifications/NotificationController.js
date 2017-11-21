import React, { Component } from "react";

import PushNotification from "react-native-push-notification";

export default class NotificationController extends Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: notification => {
        console.log("notification::",notification);
      }
    });
  }

  render() {
    return null;
  }
}
