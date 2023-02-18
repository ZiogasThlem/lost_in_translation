import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import Translation from './Pages/Translation';
import Profile from './Pages/Profile';

function App() {
  return (

<BrowserRouter>
  <div className="App">
    <nav>
      <li><NavLink to="/">Home sweet Home</NavLink></li>
      <li><NavLink to="/translation">Translation</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </nav>
    <Routes>
      <Route path="/" element={ <LogIn />} /> 
      <Route path="/Translation" element={ <Translation />} /> 
      <Route path="/Profile" element={ <Profile />} /> 
    </Routes>
  </div>
</BrowserRouter>


  );
}

export default App;
