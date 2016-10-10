import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {connect} from 'react-redux';
import {checkReturningUser, login, register} from '../../actions/actionAuth';
export class Auth extends Component {
  render() {
    let actions = [];

    return (
      <Dialog
        title={'认证'}
        actions={actions}
        open={this.props.isAuthDialogOpened}>
        <TextField
          hintText="email"
          floatingLabelText="用户名"/>
        <TextField
          hintText="password"
          floatingLabelText="密码"
          type="password"/>
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
    handleCheckReturningUser: email => dispatch(checkReturningUser(email)),
    handleLogin: (email, pass) => dispatch(login(email, pass)),
    handleRegister: (email, pass) => dispatch(register(email, pass))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
