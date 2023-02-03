import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import WorkWithUs from './pages/WorkWithUs';
import SelfServicePortal from './pages/SelfServicePortal';

function App() {
    return (
        <BrowserRouter>
        <section>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/selfserviceportal" element={<SelfServicePortal/>} />
                <Route exact path="/workwithus" element={<WorkWithUs/>} />
                <Route path="*" element={<h1 className="text-indigo-900/100 text-5xl underline m-2 font-bold">404: Page Not Found!</h1>} />
            </Routes>
        
      </section>
    </BrowserRouter>
  );
}

export default App;
