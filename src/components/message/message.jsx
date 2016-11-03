import React, {Component} from "react";
import Snackbar from "material-ui/Snackbar";
import {connect} from "react-redux";

class Message extends Component {
  render() {
    return (
      <Snackbar
        message={this.props.message}
        open={this.props.open}
      >
      </Snackbar>
    );
  }
}
/**
 * map state to props
 * @param {Object} state - the state of the reducer
 * @return {Object} props - the props mapped
 * */
function mapStateToProps(state) {
  return {
    message: state.message.message,
    open: state.message.open
  };
}

export default connect(mapStateToProps)(Message);
