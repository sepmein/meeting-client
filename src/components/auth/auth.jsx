import React, {Component} from "react";
import TextField from "material-ui/TextField";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import {connect} from "react-redux";
import {checkEmail, login, register, toggleAuthDialog, clickBackward} from "../../actions/actionAuth";
class Auth extends Component {
  state = {
    email: '',
    password: ''
  };
  handleEmailInput = (event, value) => {
    this.setState({email: value});
  };
  handlePasswordInput = (event, value) => {
    this.setState({password: value});
  };
  handleOnEmailTextFieldKeyDown = event => {
    if (event.key === 'Enter') {
      this.props.handleCheckEmail(this.state.email);
    }
  };
  handleOnPasswordTextFieldKeyDown = event => {
    if (event.key === 'Enter') {
      if (this.props.isReturningUser) {
        this.props.handleLogin(this.state.email, this.state.password);
      } else {
        this.props.handleRegister(this.state.email, this.state.password);
      }
    }
  };

  render() {
    const actions = this.props.emailChecked ?
      (
        this.props.isReturningUser ?
          [
            <FlatButton
              label="back"
              onClick={() => this.props.handleBackward()}/>,
            <FlatButton
              label="login"
              primary={true}
              onClick={() => {
                this.props.handleLogin(this.state.email, this.state.password);
                this.setState({password: ''});
              }}
            />,
            <FlatButton
              label='cancel'
              onClick={this.props.handleToggleAuthDialog}
            />
          ]
          :
          [
            <FlatButton
              label="back"
              onClick={ () => this.props.handleBackward()}/>,
            <FlatButton
              label="register"
              primary={true}
              onClick={() => {
                this.props.handleRegister(this.state.email, this.state.password);
                this.setState({password: ''});
              }}
            />,
            <FlatButton
              label='cancel'
              onClick={this.props.handleToggleAuthDialog}
            />
          ]) :
      [
        <FlatButton
          label="next"
          primary={true}
          onClick={() => this.props.handleCheckEmail(this.state.email)}
        />
      ];

    return (
      <Dialog
        title={'认证'}
        actions={actions}
        open={this.props.isAuthDialogOpened}
        onRequestClose={this.props.handleToggleAuthDialog}>
        {
          this.props.emailChecked ?
            <TextField
              floatingLabelText="密码"
              hintText={"password"}
              onChange={this.handlePasswordInput}
              onKeyDown={this.handleOnPasswordTextFieldKeyDown}
              type="password"
              value={this.state.password}
            />
            :
            <TextField
              errorText={this.props.showEmailInputErrorText ? "输入正确的邮箱地址" : null}
              floatingLabelText="用户名"
              autoFocus
              hintText="email"
              onChange={this.handleEmailInput}
              onKeyDown={this.handleOnEmailTextFieldKeyDown}
              value={this.state.email}
            />
        }
      </Dialog>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthDialogOpened: state.auth.isAuthDialogOpened,
    isReturningUser: state.auth.isReturningUser,
    isLoading: state.isLoading,
    showEmailInputErrorText: state.auth.showEmailInputErrorText,
    emailChecked: state.auth.emailChecked
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleToggleAuthDialog: () => dispatch(toggleAuthDialog()),
    handleLogin: (email, password) => dispatch(login(email, password)),
    handleRegister: (email, password) => dispatch(register(email, password)),
    handleCheckEmail: email => dispatch(checkEmail(email)),
    handleBackward: () => dispatch(clickBackward())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
