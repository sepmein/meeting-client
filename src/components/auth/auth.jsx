import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
export default class Auth extends Component {
  render() {
    return (
      <div>
        <TextField
          hintText="email"
          floatingLabelText="用户名"/>
        <TextField
          hintText="password"
          floatingLabelText="密码"
          type="password"/>
      </div>
    );
  }
}
