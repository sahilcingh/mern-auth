// eslint-disable-next-line no-unused-vars
import {BRowserRouter, Routes, Route, BrowserRouter, Router} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Routes path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sign-in" element ={<SignIn/>} />
      <Route path="/sign-up" element={< SignUp/>} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );  
}
