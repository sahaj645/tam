import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/pages/Home.jsx';
import Register from './pages/pages/Register.jsx';
import SurvivalShowdown from './pages/pages/SurvivalShowdown.jsx';
import axios from 'axios';
import LSurvivalShowdown from './pages/pages/LSurvivalShowdown.jsx';
import JoinTeamSurvivalShowdown from './pages/pages/JoinTeamSurvivalShowdown.jsx';
import Contact from './pages/pages/Contact.jsx';
import Navreg from './pages/pages/Navreg.jsx';
import { Toaster } from 'react-hot-toast';

// Import CodeCortex related components
import JoinCodeCortex from './pages/pages/JoinCodeCortex.jsx'; // Make sure this path is correct
import CreateCodeCortex from './pages/pages/CreateCodeCortex.jsx'; // Make sure this path is correct
import LCodeCortex from './pages/pages/LCodeCortex.jsx'; // Make sure this path is correct

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LSurvivalShowdown" element={<LSurvivalShowdown />} />
        <Route path="/SurvivalShowdown" element={<SurvivalShowdown />} />
        <Route path="/JoinTeamSurvivalShowdown" element={<JoinTeamSurvivalShowdown />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Navreg" element={<Navreg />} />

        {/* Routes for Code Cortex */}
        <Route path="/JoinCodeCortex" element={<JoinCodeCortex />} />
        <Route path="/CreateCodeCortex" element={<CreateCodeCortex />} />
        <Route path="/LCodeCortex" element={<LCodeCortex />} />
      </Routes>
    </>
  );
}

export default App;
