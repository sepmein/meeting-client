import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {
  checkUsername, login, register,
  toggleAuthDialog
} from '../../actions/actionAuth';
export class Auth extends Component {
  state = {
    username: ''
  };
  handleUsernameInput = (e, value) => {
    this.setState({username: value});
  };

  render() {
    const actions = [
      <FlatButton
        label="next"
        primary={true}
        keyboardFocused={true}
        onClick={() => this.props.handleCheckUsername(this.state.username)}
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
          floatingLabelText="用户名"
          onChange={this.handleUsernameInput}
          value={this.state.username}
        />
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
    handleLogin: (email, pass) => dispatch(login(email, pass)),
    handleRegister: (email, pass) => dispatch(register(email, pass)),
    handleCheckUsername: email => dispatch(checkUsername(email))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
