import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Featured from './pages/Featured';
import Issues from './pages/Issues';
import JoinUs from './pages/JoinUs';
import Submit from './pages/Submit';


function App() {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/Featured" element={<Featured />} />
        <Route path="/Issues" element={<Issues />} />
        <Route path="/JoinUs" element={<JoinUs />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>
    </>
  );
}

export default App;
