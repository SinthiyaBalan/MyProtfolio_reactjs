import React from 'react'
import {Link} from 'react-router-dom'
import pdf from '../assets/Sinthiya_Balasubramaniam_Resume.pdf'

function Nav() {
  return (
    <div className='nav'>
        <ul className='nav-links'>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to = "/projects">My Work</Link>
            </li>
            <li>
              <Link to = "/contact">Contact</Link>
            </li>
            <li>
            <a href = {pdf} target = "_blank">My Resume</a>
              {/* <Link to = {pdf}>My Resume</Link> */}
            </li>
        </ul>
        
    </div>
  )
}

export default Nav