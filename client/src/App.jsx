import './App.css'
import{Routes,Route} from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/pages/Home.jsx'
import Register from './pages/pages/Register.jsx'
import SurvivalShowdown from './pages/pages/SurvivalShowdown.jsx'
import axios from 'axios';

axios.defaults.baseURL='http://localhost:8000';
axios.defaults.withCredentials=true
// in the file below the CodeCortex has be intialized as register 
function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/register' element={<Register />} />
      <Route path='/SurvivalShowdown' element={<SurvivalShowdown />} />
      
      
    </Routes>
    </>
  )
}

export default App
