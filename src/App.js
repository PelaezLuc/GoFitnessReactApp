import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';


function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes> 
      <Footer />  
    </main>   
  );
}

export default App;
