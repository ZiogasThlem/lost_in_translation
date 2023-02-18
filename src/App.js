import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Translation from './Pages/Translation';
import Profile from './Pages/Profile';
import NavbarTop from './Components/Navbar/NavbarTop';
import NavbarBottom from './Components/Navbar/NavbarBottom';

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
