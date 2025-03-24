import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Histoire from './pages/Histoire';
import Missions from './pages/Missions';
import Avions from './pages/Avions';
import Mecaniciens from './pages/Mecaniciens';
import Musee from './pages/Musee';

import Pilotes from './pages/Pilotes';
import Escadrilles from './pages/Escadrilles';
import Spa84 from './pages/Spa84';
import MentionsLegales from './pages/MentionsLegales';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/histoire" element={<Histoire />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/avions" element={<Avions />} />
            <Route path="/mecaniciens" element={<Mecaniciens />} />
            <Route path="/musee" element={<Musee />} />
            <Route path="/pilotes" element={<Pilotes />} />
            <Route path="/escadrilles" element={<Escadrilles />} />
            <Route path="/escadrilles/spa84" element={<Spa84 />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App; 