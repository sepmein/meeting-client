/**
 * @module components/topbar
 * */
import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import SocialPersonOutline from 'material-ui/svg-icons/social/person-outline';
import {connect} from 'react-redux';

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
              <FlatButton>
                登录
              </FlatButton>
            ) :
            (
              <IconButton tooltip={'Login'}>
                <SocialPersonOutline/>
              </IconButton>
            )
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
