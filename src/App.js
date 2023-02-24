import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './pages/LogIn';
import Translation from './pages/Translation';
import Profile from './pages/Profile';
import NavbarTop from './components/navbar/NavbarTop';
import NavbarBottom from './components/navbar/NavbarBottom';

function App() {
  return (

<BrowserRouter>
  <div className="App">
    <NavbarTop/>
    <Routes>
      <Route path="/" element={ <LogIn />} /> 
      <Route path="/translation" element={ <Translation />} /> 
      <Route path="/profile" element={ <Profile />} /> 
    </Routes>
    <NavbarBottom />
  </div>
</BrowserRouter>


  );
}

export default App;
