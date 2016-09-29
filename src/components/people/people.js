import React, {Component} from 'react';
import Chip from 'material-ui/Chip'

export default class People extends Component {
    render() {
        return (
            <Chip>
                {this.props.name}
            </Chip>
        )
    }
}
