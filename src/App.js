import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ExerciseListPage } from './pages/ExerciseListPage';


function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/exercises' element={<ExerciseListPage />} />
      </Routes>  
    </main>   
  );
}

export default App;
