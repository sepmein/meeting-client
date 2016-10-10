import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import {connect} from 'react-redux';
import {checkReturningUser} from '../../actions/actionAuth';
export class Auth extends Component {
  render() {
    let actions = [];

    return (
      /*      <div>
       <TextField
       hintText="email"
       floatingLabelText="用户名"/>
       <TextField
       hintText="password"
       floatingLabelText="密码"
       type="password"/>
       </div>*/
      <Dialog
        title={'认证'}
        actions={actions}
        open={this.props.isAuthDialogOpened}>
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
    handleCheckReturningUser: dispatch(checkReturningUser()),
    handleLogin: dispatch(),
    handleRegister: dispatch()
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
