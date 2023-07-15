import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import WorkWithUs from './pages/WorkWithUs';
import SelfServicePortal from './pages/SelfServicePortal';
import ClientDashboard from './Dashboards/ClientDashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Admin from './pages/Admin'

function App() {
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resUser, resClients] = await Promise.all([
          axios.get('https://makawasco-backend.onrender.com/me'),
          axios.get('https://makawasco-backend.onrender.com/clients')
        ]);
        
        setUser(resUser.data);
        setClients(resClients.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // if(!user) return <SelfServicePortal onLogin={setUser} />

  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/selfserviceportal" element={<SelfServicePortal />} />
          <Route exact path="/workwithus" element={<WorkWithUs />} />
          <Route exact path="/clientdashboard" element={<ClientDashboard onLogin={setUser} />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route
            path="*"
            element={<h1 className="text-indigo-900/100 text-5xl underline m-2 font-bold">404: Page Not Found!</h1>}
          />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
