import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
class Plan extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          subtitle={this.props.subtitle}
          title={this.props.title}>
        </CardHeader>
        <CardText>

          <p>Date: {this.props.date} Room: {this.props.room}</p>
          <p>会议主持：</p>
          <p>出席：</p>
          <p>列席：</p>
          <p>议程</p>
        </CardText>
        <CardActions>
          <FlatButton
            label="开始签到"/>
          <FlatButton
            label="办结"/>
          <FlatButton
            label="删除"/>
          <FlatButton
            label="上传文件"/>
        </CardActions>
      </Card>
    );
  }
}

let mapStateToProps = state => {
  return {
    title: 'type: monthly',
    subtitle: 'status: ing',
    date: new Date(Date.now()).toLocaleDateString(),
    room: 'undecided'
  };
};

let mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Plan);
