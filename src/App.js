import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Result from './pages/Result';
import Register from './components/register';
import Login from './components/login';
import { useState, useContext, } from 'react';
import Levels from './components/levels';




function App() {
      const [score, setScore] = useState(0)
      const [user,setUser] = useState({
            name:"",
            category:""
      });
      return (
            <div className="App">
                  <BrowserRouter>
                        <Routes>
                              <Route path='/register' element={<Register />} />

                              <Route path='/login' element={<Login />} />

                              <Route path='/levels' element={<Levels users={user} setUsers={setUser}/>} />

                              <Route path='/Home' element={<Home user={user} scoreData={{score,setScore}}/>} />

                              <Route path='/Result' element={<Result user={user} score={score} />} />

                        </Routes>

                  </BrowserRouter>

            </div>
      );
}

export default App;
