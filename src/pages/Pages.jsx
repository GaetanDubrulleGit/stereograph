import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import List from './List.jsx'
import ProjectDetail from './project/[id].jsx'

function Pages() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
    </div>
  )
}

export default Pages