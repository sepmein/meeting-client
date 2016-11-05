import React from "react";
import {Step, Stepper, StepLabel} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";
import ContentAdd from "material-ui/svg-icons/content/add";
import FloatingActionButton from "material-ui/FloatingActionButton";
import {RadioButtonGroup, RadioButton} from "material-ui/RadioButton";
import DatePicker from "material-ui/DatePicker";
import Toggle from "material-ui/Toggle";
import AutoComplete from "material-ui/AutoComplete";
import {connect} from "react-redux";
import {addPlan} from "../../actions/actionPlanner";
/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class Planner extends React.Component {

  state = {
    date: Date.now(),
    meetingRoom: '',
    open: false,
    finished: false,
    stepIndex: 0,
    meetingType: 'monthly',
    dateToBeDetermined: false,
    meetingRoomToBeDetermined: false
  };
  getDateString = () => {
    return (new Date(this.state.date)).toLocaleDateString();
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  handleMeetingTypeSelection = (event, value) => {
    this.setState({meetingType: value});
  };


  handleSetDate = (event, value) => {
    this.setState({date: value});
  };

  handleDateToBeDeterminedToggle = (event, value) => {
    this.setState({dateToBeDetermined: value});
  };

  handleMeetingRoomToBeDeterminedToggle = (event, value) => {
    this.setState({meetingRoomToBeDetermined: value});
  };

  handleMeetingRoomInput = (searchText) => {
    console.log(searchText);
    this.setState({meetingRoom: searchText});
  };

  handleMeetingRoomSelection = chosenRequest => {
    console.log(chosenRequest);
    this.setState({meetingRoom: chosenRequest});
  };

  handleSubmit = () => {
    this.props.handleSubmitMeetingPlan({
      meetingType: this.state.meetingType,
      date: this.state.dateToBeDetermined ? null : this.state.date,
      room: this.state.meetingRoomToBeDetermined ? null : this.state.meetingRoom
    });
    this.handleClose();
  };
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <RadioButtonGroup
            name='meetingTypeSelection'
            default='monthly'
            defaultSelected={this.state.type}
            onChange={this.handleMeetingTypeSelection}>
            <RadioButton
              value='monthly'
              label='月度'/>
            <RadioButton
              value='quarterly'
              label='季度（全体）'/>
            <RadioButton
              value='united'
              label='病原所联合工作会议'/>
          </RadioButtonGroup>
        );
      case 1:
        return (
          <div>
            <div>
              <span><b>时间：</b></span>
              <Toggle
                style={{maxWidth: '150px'}}
                label='待定'
                defaultToggled={false}
                onToggle={this.handleDateToBeDeterminedToggle}
                toggled={this.state.dateToBeDetermined}
              />
              <DatePicker
                hintText={(new Date(Date.now())).toLocaleDateString()}
                mode='landscape'
                onChange={this.handleSetDate}
                disabled={this.state.dateToBeDetermined}/>
            </div>
            <div>
              <span><b>会议室：</b></span>
              <Toggle
                style={{maxWidth: '150px'}}
                label='待定'
                defaultToggled={false}
                onToggle={this.handleMeetingRoomToBeDeterminedToggle}
                toggled={this.state.meetingRoomToBeDetermined}
              />
              <AutoComplete
                hintText='输入会议室'
                dataSource={['1-730', '1-726', '1-804', '2-学术会议报告厅', '2-大报告厅']}
                disabled={this.state.meetingRoomToBeDetermined}
                onUpdateInput={this.handleMeetingRoomInput}
                onNewRequest={this.handleMeetingRoomSelection}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <p>类型：{this.state.meetingType}</p>
            <p>日期：{this.state.dateToBeDetermined ?
              '待定' : this.getDateString()}</p>
            <p>会议室：{this.state.meetingRoomToBeDetermined || !this.state.meetingRoom
              ? '待定' : this.state.meetingRoom}</p>
          </div>
        );
      default:
        return (
          <div>
            ended
          </div>
        );
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div>
        <FloatingActionButton className="floating-action-button" onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="新增会议计划"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>选择会议类型</StepLabel>
              </Step>
              <Step>
                <StepLabel>添加会议要素</StepLabel>
              </Step>
              <Step>
                <StepLabel>确定</StepLabel>
              </Step>
            </Stepper>
            <div style={contentStyle}>
              {finished ? (
                <p>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      this.setState({stepIndex: 0, finished: false});
                    } }
                  >
                    Click here
                  </a> to reset the example.
                </p>
              ) : (
                <div>
                  <div>{this.getStepContent(stepIndex) }</div>
                  <div style={{marginTop: 12}}>
                    <FlatButton
                      label="Back"
                      disabled={stepIndex === 0}
                      onTouchTap={this.handlePrev}
                      style={{marginRight: 12}}
                    />
                    <RaisedButton
                      label={stepIndex === 2 ? 'Finish' : 'Next'}
                      primary={true}
                      onTouchTap={stepIndex === 2 ? this.handleSubmit : this.handleNext}
                    />
                  </div>
                </div>
              ) }
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {}
};
const mapDispatchToProps = dispatch => {
  return {
    handleSubmitMeetingPlan: (plan) => dispatch(addPlan(plan))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Planner);
