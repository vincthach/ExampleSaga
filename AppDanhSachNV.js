import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  Image,
  Text,
  View,
  Platform,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { UserActions } from "./redux/acitons";
const MAX_STAFF_REQUEST_SIZE = 10;

class AppDanhSachNV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentPage: -1,
      arrayList: []
    };
  }

  _loadData = async () => {
    const { user: { page }, fetchUser } = this.props;
    const nextPage = page + 1;
    fetchUser({ page: nextPage, pageSize: 20 });
  };

  componentWillMount() {
    this._loadData();
  }

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => <Text>{item.email}</Text>;
  _loadMore = () => {
    const { isLoading } = this.props.user;
    if (isLoading) {
      return;
    }
    this._loadData();
  };
  _renderFlatList = () => {
    const { user: { data } } = this.props
    return (
      <FlatList
        data={data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this._loadMore}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this._renderFlatList()}
      </View>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    fetchUser: (params) => dispatch(UserActions.fetchUser(params))
  })
)(AppDanhSachNV);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5FCFF"
  },
  listitem: {
    height: 100,
    backgroundColor: "#006fcc"
  }
});