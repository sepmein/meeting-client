import React from 'react'
import Divider from 'material-ui/Divider'
import './footer.css'
import Planner from '../planner/planner.js'
const Footer = () => (
    <div className='footer'>
        <Divider/>
        <h5>By Spencer with &#x2665; </h5>
        <h6>About</h6>
        <Planner/>
    </div>
)
export default Footer