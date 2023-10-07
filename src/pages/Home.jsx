import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.jpg'
import BottomImage from '../assets/image-model-home.png'
import BottomImageTwo from '../assets/image-model-home-two.png'

function Home() {
  return (
    <div className='flex flex-col justify-center mt-10 items-center'>
        <img src={Logo} alt="Logo" className='logo-image mb-10 object-cover' />
        <p className='font-base mb-10 text-center w-4/5 lg:w-2/5'>Stereograph est éditeur de logiciels 3D avec Teia Suite, la première solution web capable de rendre n'importe quel modèle 3D intelligent et connecté.</p>
        <Link to={'/list'} className='bg-black p-5 rounded text-white font-semibold hover:bg-white hover:text-black border-2 transition-all'>Voir tous les projets</Link>
        <img src={BottomImage} alt="Bottom Image Building" className='bottom-image mt-14 w-2/5 absolute bottom-0 right-0 lg:w-1/4 md:w-1/3' />
        <img src={BottomImageTwo} alt="Bottom Image Home" className='bottom-image mt-14 w-2/5 absolute bottom-0 left-0 lg:w-1/4 md:w-1/3' />
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