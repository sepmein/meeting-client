/**
 * @module components/topbar
 * */
import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import SocialPersonOutline from 'material-ui/svg-icons/social/person-outline';
import {connect} from 'react-redux';
import {toggleAuthDialog} from '../../actions/actionAuth';
import Auth from '../auth/auth';
export class Topbar extends Component {
  static propTypes = {
    user: PropTypes.string
  };

  render() {
    return (
      <AppBar
        title="传防所会议系统"
        iconElementRight={
          (!this.props.user) ?
            (
              <FlatButton
                onClick={this.props.onAuthClick}>
                登录
              </FlatButton>
            ) :
            (
              <IconButton tooltip={'Login'}>
                <SocialPersonOutline/>
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
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthClick: () => {
      dispatch(toggleAuthDialog());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
