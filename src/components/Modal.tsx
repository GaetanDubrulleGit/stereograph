import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
  nom: string;
  description: string;
  commentaire: string;
  etape: string;
}

interface ModalProps {
  closeModal: () => void;
  getProjects: () => void;
}

function Modal({ closeModal, getProjects }: ModalProps) {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    description: '',
    commentaire: '',
    etape: 'En attente',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3031/projects', formData)
      .then(() => {
        closeModal(); // Close the modal after a submit
        getProjects(); // Refresh the project list after a submit
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="modal flex fixed items-center justify-center overflow-auto w-full h-full top-0 right-0 p-10 bg-gray-200">
      <div className="modal-content p-10 border bg-slate-50 w-full md:w-5/12 xl:w-4/12 rounded-xl relative">
        <h2 className='text-xl font-bold mb-6'>Ajouter un nouveau projet</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom" className="mr-3">Nom :</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className='w-full rounded-lg border py-2 px-4 hover:cursor-pointer'
            />
          </div>
          <div>
            <label htmlFor="description" className="mr-3">Description :</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className='w-full rounded-lg border py-2 px-4 hover:cursor-pointer'
            />
          </div>
          <div>
            <label htmlFor="commentaire" className="mr-3">Commentaire :</label>
            <input
              type="text"
              id="commentaire"
              name="commentaire"
              value={formData.commentaire}
              onChange={handleChange}
              className='w-full rounded-lg border py-2 px-4 hover:cursor-pointer'
            />
          </div>
          <div>
            <label htmlFor="etape" className="mr-3">Status :</label>
            <select
              id="etape"
              name="etape"
              value={formData.etape}
              onChange={handleChange}
              className='rounded-lg border py-2 px-4 hover:cursor-pointer w-full'
            >
              <option value="En attente">En attente</option>
              <option value="En cours">En cours</option>
              <option value="Terminé">Terminé</option>
            </select>
          </div>
          <button onClick={closeModal} className='p-2 absolute top-2 right-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
          </button>
          <button type="submit" className='mt-10 flex w-full justify-center bg-green-400 p-4 rounded font-semibold hover:bg-white border transition-all flex items-center mt-10'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload mr-2" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
          </svg>
            Ajouter le projet
          </button>
        </form>
      </div>
      <style>
        {`
        .modal {
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.4);
        }
        .modal-content {
          margin: 15% auto;
        }
        form input {
          margin-bottom: 1rem;
        }
        `}
      </style>
    </div>
  );
}

export default Modal;
