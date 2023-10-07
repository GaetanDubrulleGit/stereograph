import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal.tsx';
import { Link } from 'react-router-dom';

function List() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Get all projects
  const getProjects = () => {
    axios.get('http://localhost:3031/projects/')
        .then((res) => {
            setProjects(res.data);
        })
        .catch((err) => console.error(err));
  };

  // Delete a project
  const deleteProject = (projectId) => {
    axios
      .delete(`http://localhost:3031/projects/${projectId}`)
      .catch((err) => console.error(err));
      getProjects();
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === '') {
      return true; // no filter
    } else {
      return project.etape === filter;
    }
  });

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="w-11/12 lg:w-3/4 m-auto relative">
      <h1 className='text-xl font-bold mb-6'>Liste des projets</h1>
      <div className='mb-5'>
        <label htmlFor="filterSelect">Filtrer par Status :</label>
        <select
          id="filterSelect"
          value={filter}
          onChange={handleFilterChange}
          className='ml-5 rounded-lg border py-2 px-6 hover:cursor-pointer'
        >
          <option value="">Tous</option>
          <option value="En attente">En attente</option>
          <option value="En cours">En cours</option>
          <option value="Terminé">Terminé</option>
        </select>
      </div>
      <div className='overflow-x-auto'>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Voir</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Commentaire</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} className='hover:bg-slate-100 border-b'>
                <td>
                  <Link to={`/project/${project.id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#ababab" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                  </svg>
                  </Link>
                </td>
                <td>{project.nom}</td>
                <td>{project.description}</td>
                <td>{project.commentaire}</td>
                <td>{project.etape}</td>
                <td>
                  <button 
                    onClick={() => deleteProject(project.id)}
                    className='bg-red-400 px-5 py-2 rounded font-semibold hover:bg-white border transition-all flex items-center'  
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash mr-2" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                    </svg>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <button 
          onClick={openModal} 
          className='bg-cyan-400 py-4 px-7 rounded font-semibold hover:bg-white border transition-all flex items-center mt-10'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-plus mr-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
            </svg>
            Ajouter un projet
          </button>
        {isModalOpen && (
            <Modal closeModal={closeModal} getProjects={getProjects}/>
        )}
        <style>
        {`
            td, th {
              text-align: left;
              padding: 10px 35px;
            }
        `}
        </style>
    </div>
  );
}

export default List;
