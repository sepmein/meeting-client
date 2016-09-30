import React, {Component} from 'react'
import People from '../people/people.js'
import './attendees.css'

export default class Attendees extends Component {
    render() {
        return (
            <div className='attendees'>
                <div>
                    <span>主持：</span>
                    {
                        this.props.attendees.hosts.map(
                            function (host) {
                                return (
                                    <People name={host.name}/>
                                );
                            }
                        )
                    }
                </div>
                <div>
                    <span>出席：</span>
                    {
                        this.props.attendees.attendees.map(
                            function (attendee) {
                                return (
                                    <People name={attendee.name}/>
                                );
                            }
                        )
                    }
                </div>
                <div>
                    <span>列席：</span>
                    {
                        this.props.attendees.observers.map(
                            function (observer) {
                                return (
                                    <People name={observer.name}/>
                                );
                            }
                        )
                    }
                </div>
            </div>
        );
    }
}