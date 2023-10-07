import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectDetail from '../pages/project/[id].jsx';

jest.mock('axios');

describe('ProjectDetail Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loading message when project data is not yet available', async () => {
    axios.get.mockResolvedValue({ data: null });

    const { getByText } = render(
      <MemoryRouter initialEntries={['/project/1']}>
        <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(getByText('Chargement...')).toBeInTheDocument();
    });
  });

  it('renders project details when project data is available', async () => {
    const mockProject = {
      id: 1,
      nom: 'Test Project',
      description: 'Test Description',
      commentaire: 'Test Comment',
      etape: 'En cours',
    };

    axios.get.mockResolvedValue({ data: mockProject });

    const { getByText } = render(
      <MemoryRouter initialEntries={['/project/1']}>
        <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText('Détails du projet: Test Project')).toBeInTheDocument();
      expect(getByText('Id: 1')).toBeInTheDocument();
      expect(getByText('Nom: Test Project')).toBeInTheDocument();
      expect(getByText('Description: Test Description')).toBeInTheDocument();
      expect(getByText('Commentaire: Test Comment')).toBeInTheDocument();
      expect(getByText('Status: En cours')).toBeInTheDocument();
    });
  });
});
