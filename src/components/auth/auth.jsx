import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {
  checkReturningUser, login, register,
  toggleAuthDialog
} from '../../actions/actionAuth';
export class Auth extends Component {
  render() {
    const actions = [
      <FlatButton
        label="next"
        primary={true}
        keyboardFocused={true}
      />
    ];

    return (
      <Dialog
        title={'认证'}
        actions={actions}
        open={this.props.isAuthDialogOpened}
        onRequestClose={this.props.handleToggleAuthDialog}>
        <TextField
          hintText="email"
          floatingLabelText="用户名"/>
      </Dialog>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthDialogOpened: state.auth.isAuthDialogOpened,
    isReturningUser: state.auth.isReturningUser,
    isLoading: state.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleToggleAuthDialog: () => dispatch(toggleAuthDialog()),
    handleCheckReturningUser: email => dispatch(checkReturningUser(email)),
    handleLogin: (email, pass) => dispatch(login(email, pass)),
    handleRegister: (email, pass) => dispatch(register(email, pass))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
