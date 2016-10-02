import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton'
import DatePicker from 'material-ui/DatePicker'
import Toggle from 'material-ui/Toggle'
import AutoComplete from 'material-ui/AutoComplete'
/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class Planner extends React.Component {

    state = {
        open: false,
        finished: false,
        stepIndex: 0,
        type: 'monthly',
        dateToBeDetermined: false,
        meetingRoomToBeDetermined: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    handleMeetingTypeSelection = (event, value) => {
        this.setState({ type: value });
    }

    handleSetDate = (event, value) => {
        this.setState({ date: value });
    }

    handleDateToBeDeterminedToggle = (event, value) => {
        this.setState({ dateToBeDetermined: value });
    }

    handleMeetingRoomToBeDeterminedToggle = (event, value) => {
        this.setState({ meetingRoomToBeDetermined: value });
    }

    handleMeetingRoomInput = (event, value) => {
        this.setState({ meetingRoom: value });
    }

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
                                style={{ maxWidth: '150px' }}
                                label='待定'
                                defaultToggled={false}
                                onToggle={this.handleDateToBeDeterminedToggle}/>
                            <DatePicker
                                hintText='日期'
                                mode='landscape'
                                onChange={this.handleSetDate}
                                disabled={this.state.dateToBeDetermined}/>
                        </div>
                        <div>
                            <span><b>会议室：</b></span>
                            <Toggle
                                style={{ maxWidth: '150px' }}
                                label='待定'
                                defaultToggled={false}
                                onToggle={this.handleMeetingRoomToBeDeterminedToggle}/>
                            <AutoComplete
                                hintText='输入会议室'
                                dataSource={['1-730', '1-726', '1-804', '2-学术会议报告厅', '2-大报告厅']}
                                onUpdateInpute={this.handleMeetingRoomInput}/>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        {this.state.date}
                        {this.state.meetingRoom}
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
        const contentStyle = { margin: '0 16px' };

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

                    <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
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
                                            this.setState({ stepIndex: 0, finished: false });
                                        } }
                                        >
                                        Click here
                                    </a> to reset the example.
                                </p>
                            ) : (
                                    <div>
                                        <div>{this.getStepContent(stepIndex) }</div>
                                        <div style={{ marginTop: 12 }}>
                                            <FlatButton
                                                label="Back"
                                                disabled={stepIndex === 0}
                                                onTouchTap={this.handlePrev}
                                                style={{ marginRight: 12 }}
                                                />
                                            <RaisedButton
                                                label={stepIndex === 2 ? 'Finish' : 'Next'}
                                                primary={true}
                                                onTouchTap={stepIndex === 2 ? this.handleClose : this.handleNext}
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

export default Planner;
