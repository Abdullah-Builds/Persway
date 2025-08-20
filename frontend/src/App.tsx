import CoverPageLight from './components/CoverPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  ProductPage  from './components/ProductPage';
import DeveloperSection from './components/AboutDeveloper';
import React from 'react';

function App() {

  <Router>
    <Routes>

      <Route path="/" element={<CoverPageLight />} />
      <Route path="/aboutdev" element={<DeveloperSection />} />
      <Route path="/productpage" element={<ProductPage />}/>
    </Routes>
  </Router>
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoverPageLight />} />
        <Route path="/aboutdev" element={<DeveloperSection />} />
        <Route path="/productpage" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App;