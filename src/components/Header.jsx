import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className=''>
        <div className=''>StereoGraph</div>
        <nav>
            <ul className='flex gap-8'>
                <li>
                  <Link to={'/'} className=''>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to={'/list'} className=''>
                    Liste
                  </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header