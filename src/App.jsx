import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar.jsx';
import Comp from './components/Comp.jsx';
import Chat from './components/Chat.js';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';
import { useStateValue } from './context/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
        {!user ? <Login/> : 
        <div className="app_body">
          <Sidebar/>
            <Routes>
            <Route exact="true" path="/rooms/:roomId" element={<Chat/>} />
            {/* <Route exact="true" path="/" element={<Chat />}/> */}
            </Routes>
            </div>
        }
    </div>  
  );
}

export default App;
