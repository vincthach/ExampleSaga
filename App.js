import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Provider } from "react-redux";
import AppDanhSachNV from "./AppDanhSachNV";
import store from "./redux"

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppDanhSachNV />
      </Provider>
    );
  }
}