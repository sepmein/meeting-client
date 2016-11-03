/**
 * @module components/topbar
 * */
import React, {Component, PropTypes} from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import SocialPersonOutline from "material-ui/svg-icons/social/person-outline";
import {connect} from "react-redux";
import {toggleAuthDialog, toggleUserMenu, logout} from "../../actions/actionAuth";
import Auth from "../auth/auth";
class Topbar extends Component {
  static propTypes = {
    email: PropTypes.string
  };
  state = {
    anchorEl: undefined
  };
  handleUserIconClicked = event => {
    console.log('clicked');

    this.setState({
      anchorEl: event.currentTarget
    });
    this.props.onUserIconClicked();
  };
  handleRequestClose = event => {
    this.props.onUserIconClicked();
  };

  render() {
    return (
      <AppBar
        title="传防所会议系统"
        iconElementRight={
          (!(this.props.email && this.props.token)) ?
            (
              <FlatButton
                onClick={this.props.onAuthClick}>
                认证
              </FlatButton>
            ) :
            (
              <IconButton
                tooltip={this.props.email}
                onClick={this.handleUserIconClicked}>
                <SocialPersonOutline/>
                <Popover
                  anchorEl={this.state.anchorEl}
                  open={this.props.open}
                  onRequestClose={this.handleRequestClose}>
                  <Menu>
                    <MenuItem
                      primaryText='Logout'
                      onClick={() => {
                        this.props.onUserIconClicked();
                        this.props.onLogoutClicked();
                      }}
                    />
                  </Menu>
                </Popover>
              </IconButton>
            )
        }
      >
        <Auth/>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    token: state.auth.token,
    open: state.auth.isUserMenuOpened
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthClick: () => dispatch(toggleAuthDialog()),
    onUserIconClicked: () => dispatch(toggleUserMenu()),
    onLogoutClicked: ()=> dispatch(logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
