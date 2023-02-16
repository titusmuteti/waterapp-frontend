import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import WorkWithUs from './pages/WorkWithUs';
import SelfServicePortal from './pages/SelfServicePortal';
import Login from './components/Login';
import Signup from './components/Signup';
import ClientDashboard from './Dashboards/ClientDashboard';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  
  useEffect(()=> {
    Promise.all([
      fetch('/me'),
      fetch('/clients')
    ])
    .then(([resUser, resClient])=> 
    Promise.all([resUser.json(), resClient.json()]))
    .then(([userData, clientData]) => {
      setUser(userData);
      setClients(clientData);
    });
  }, [])

  if(!user) return <Login onLogin={setUser} />

    return (
        <BrowserRouter>
        <section>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/selfserviceportal" element={<SelfServicePortal/>} />
                <Route exact path="/workwithus" element={<WorkWithUs/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signup" element={<Signup/>} />
                <Route exact path="/clientdashboard" element={<ClientDashboard/>} />
                <Route path="*" element={<h1 className="text-indigo-900/100 text-5xl underline m-2 font-bold">404: Page Not Found!</h1>} />
            </Routes>
        
      </section>
    </BrowserRouter>
  );
}

export default App;
