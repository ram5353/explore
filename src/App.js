import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetHome from './components/pages/BudgetPage/BudgetHome';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/budget" element={<BudgetHome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
