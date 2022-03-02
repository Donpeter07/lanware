import './App.css'
import Home from './component/homepage/Home';
import Login from "./component/login/Login"
import Register from "./component/register/Register"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/">
            {
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="./component/login/Login" element={<Home/>}>
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="./component/register/Register" element={<Register/>}>
          </Route>
          <Register />
          </Routes>
      </Router>
    </div>
  );
}

export default App;