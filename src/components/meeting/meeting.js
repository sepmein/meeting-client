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
let data = {
    type: '传染病防治所',
    state: '',
    date: '2016-9-9',
    start: '',
    end: '',
    title: '传染病防治所月度所务会',
    location: '1号楼730',
    attendees: {
        hosts: [
            {
                key: 1,
                name: '吴寰宇'
            }
        ],
        attendees: [
            {
                key: 2, name: '张春哲'
            },
            {
                key: 3, name: '毛盛华'
            }
        ],
        observers: [
            {
                key: 4, name: '林声'
            },
            {
                key: 5, name: '黄绿斓'
            }
        ]
    },
    agendas: [
        {
            key: 1, title: '各科室介绍8月工作总结及9月工作计划', presenter: '各科室负责人', duration: '50min'
        },
        {
            key: 2, title: '各科室经费执行情况介绍', presenter: '谈天', duration: '10min'
        },
        {
            key: 3, title: '传染病防治所信息化项目进展', presenter: '冯玮，范俊华', duration: '10min'
        }
    ]
};
const Meeting = () => (
    <Card>
        <CardHeader
            title={data.type}
            subtitle={data.date}
            actAsExpander={true}
            showExpandableButton={true}
            />
        <CardTitle
            actAsExpander={true}
            title={data.title}>
        </CardTitle>
        <CardText expandable={true}>
            <Attendees attendees={data.attendees}/>
            <Agenda agendas={data.agendas} />
        </CardText>
    </Card>
)

export default Meeting;