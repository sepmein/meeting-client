import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Attendees from '../attendees/attendees.js'
import Agenda from '../agenda/agenda.js'
/**
 * Meeting
 * title: String
 * date: Date
 * 状态
 * 类型
 * 简介
 * 主持人
 * 出席人员
 * 列席人员
 * 议题：[{介绍人，议题内容，时长，附件？}]
 * 照片？
 * 功能：请假，增加议题，调整议题顺序
 */

let attendees = {
    hosts: [
        { name: '吴寰宇' }
    ],
    attendees: [
        { name: '张春哲'},
        { name: '毛盛华'}
    ],
    observer: [
        { name: '林声'},
        { name: '黄绿斓'}
    ]
}
const Meeting = () => (
    <Card>
        <CardHeader
            title="传染病防治所"
            subtitle="2016-9-9"
            actAsExpander={true}
            showExpandableButton={true}
            />
        <CardTitle
            actAsExpander={true}
            title='传染病防治所月度所务会'>
        </CardTitle>
        <CardText expandable={true}>
            <Attendees attendees={attendees}/>
            <p></p>
        </CardText>
    </Card>
)

export default Meeting;