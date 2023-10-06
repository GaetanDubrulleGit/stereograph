import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.jpg'

function Home() {
  return (
    <div className=''>
        <img src={Logo} alt="Logo" className='logo-image' />
        <p className=''>Stereograph est éditeur de logiciels 3D avec Teia Suite, la première solution web capable de rendre n'importe quel modèle 3D intelligent et connecté.</p>
        <Link to={'/list'} className=''>Voir tous les projets</Link>
        <style>
        {`
            .logo-image {
            width: 140px;
            }
            @media (min-width: 768px) {
              .logo-image {
                  width: 200px;
              }
            }
        `}
    </style>
    </div>
  )
}

export default Home