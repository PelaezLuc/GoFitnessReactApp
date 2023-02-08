//import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header.js';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';


function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
