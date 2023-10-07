import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Modal from '../components/Modal.tsx';

jest.mock('axios');

describe('Modal Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the modal with form', () => {
    const { getByText, getByLabelText } = render(<Modal closeModal={() => {}} getProjects={() => {}} />);
    
    expect(getByText('Ajouter un nouveau projet')).toBeInTheDocument();
    expect(getByLabelText('Nom :')).toBeInTheDocument();
    expect(getByLabelText('Description :')).toBeInTheDocument();
    expect(getByLabelText('Commentaire :')).toBeInTheDocument();
    expect(getByLabelText('Status :')).toBeInTheDocument();
  });

  it('submit the form and calls the API when button is clicked by user', async () => {
    axios.post.mockResolvedValue({ data: {} });

    const { getByText, getByLabelText } = render(
      <Modal closeModal={() => {}} getProjects={() => {}} />
    );

    const nameInput = getByLabelText('Nom :');
    const addButton = getByText('Ajouter le projet');
    
    fireEvent.change(nameInput, { target: { value: 'Test Project' } });
    fireEvent.click(addButton);
    
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3031/projects', {
        nom: 'Test Project',
        description: '',
        commentaire: '',
        etape: 'En attente',
      });
    });
  });

});
