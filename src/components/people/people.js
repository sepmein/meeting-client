import React, {Component} from 'react';
import Chip from 'material-ui/Chip'
export default class People extends Component {
    render() {
        return (
            <Chip
                className='people-chip'
                style={{ margin: '4px' }}>
                {this.props.name}
            </Chip>
        )
    }
}
