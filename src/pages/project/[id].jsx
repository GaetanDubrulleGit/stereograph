import React from 'react'
import { Link } from 'react-router-dom';

function ProjectDetail() {
  return (
    <div>
        <Link to={'/list'} className=''>
            Retour à la liste
        </Link>
    </div>
  )
}

export default ProjectDetail