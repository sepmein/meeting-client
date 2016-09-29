import React, {Component} from 'react'
import {People} from '../people/people.js'

export default class Attendees extends Component {
    render() {
        return (
            <div className='attendees'>
                <div>
                    <span>主持：</span>
                    {
                        this.props.attendees.hosts.map(
                            function (host) {
                                console.log(host);
                                return (
                                    <People name={host.name}/>
                                );
                            }
                        )
                    }
                </div>
                <div>
                    <span></span>
                </div>
                <div>
                    <span></span>
                </div>
            </div>
        );
    }
}