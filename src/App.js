// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
