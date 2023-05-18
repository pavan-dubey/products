import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Header() {
  return (
    <div>
      <div className='img-cont'>
        <div>
          <img src='\logo.png' />
        </div>
        <div className='list-item'>
          <ul>
            <li>
              <Link to="Home"> Home</Link>
              <Link to="Product"> Product</Link>
            </li>
          </ul>

        </div>


      </div>

    </div>
  )
}

export default Header
