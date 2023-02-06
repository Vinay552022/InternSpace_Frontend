
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<><Navbar/><Body/><Footer/></>}/>
      <Route path="Login" element={<><Navbar/><Login/><Footer/></>} />
    </Routes> 
    </>
  );
}

export default App;
