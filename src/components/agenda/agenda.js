import React, {Component} from 'react'
import {Table, TableHeader, TableHeaderColumn, TableRow, TableBody, TableRowColumn} from 'material-ui/Table'

export default class Agenda extends Component {
    render() {
        return (
            <Table
                selectable={false}>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>
                            顺序
                        </TableHeaderColumn>
                        <TableHeaderColumn>
                            议题
                        </TableHeaderColumn>
                        <TableHeaderColumn>
                            主讲人
                        </TableHeaderColumn>
                        <TableHeaderColumn>
                            时长
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}>
                    {
                        this.props.agendas.map(function (agenda) {
                            return (
                                <TableRow key={agenda.key}>
                                    <TableRowColumn>
                                        {agenda.key}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {agenda.title}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {agenda.presenter}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {agenda.duration}
                                    </TableRowColumn>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        );
    }
}
