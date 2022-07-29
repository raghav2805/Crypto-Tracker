import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coinpage from './pages/Coinpage';
import Homepage from './pages/Homepage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Crypto-Tracker" element={<Homepage/>} exact/>
          <Route path="/coins/:id" element={<Coinpage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
