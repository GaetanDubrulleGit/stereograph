import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios'; 
import { MemoryRouter } from 'react-router-dom';
import List from '../pages/List.jsx';

jest.mock('axios'); 

describe('List Component', () => {
    
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the project list with filter and "Ajouter un projet" button', async () => {
    axios.get.mockResolvedValue({ data: [] });

    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <List />
      </MemoryRouter>
    );

    // check if all the elements are present
    expect(getByText('Liste des projets')).toBeInTheDocument();
    expect(getByLabelText('Filtrer par Status :')).toBeInTheDocument();
    expect(getByText('Tous')).toBeInTheDocument();
    expect(getByText('Ajouter un projet')).toBeInTheDocument();
  });
});
