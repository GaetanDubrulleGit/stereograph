// ProjectDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);

  const getUniqueProject = () => {
    axios
      .get(`http://localhost:3031/projects/${id}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUniqueProject();
  }, []);

  if (!project) {
    return <div>Chargement...</div>; 
  }

  return (
    <div className='w-11/12 lg:w-3/4 m-auto'>
      <Link to={'/list'} className='font-semibold flex items-center bg-black px-8 py-4 text-white font-semibold w-fit	mb-10 rounded'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-left-circle mr-2" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>
        Retour à la liste
      </Link>
      <h2 className='text-xl font-bold mb-6'>Détails du projet: {project.nom}</h2>
      <p className='mb-2'>Id: {project.id}</p>
      <p className='mb-2'>Nom: {project.nom}</p>
      <p className='mb-2'>Description: {project.description}</p>
      <p className='mb-2'>Commentaire: {project.commentaire}</p>
      <p className='mb-2'>Status: {project.etape}</p>
    </div>
  );
}

export default ProjectDetail;
