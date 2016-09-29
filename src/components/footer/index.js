import React from 'react'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './footer.css'

const Footer = () => (
    <div className='footer'>
        <Divider/>
        <h5>By Spencer with &#x2665; </h5>
        <h6>About</h6>
        <FloatingActionButton className="floating-action-button">
            <ContentAdd />
        </FloatingActionButton>
    </div>
)
export default Footer