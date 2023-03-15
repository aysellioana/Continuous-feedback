import { Routes } from 'react-router-dom';
import './App.css';
import  { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import StudentPage from './pages/StudentPage';
import ProfessorPage from './pages/ProfessorPage';
import Profesor from './pages/Profesor';
import VizualizareFeedback from './pages/VizualizareFeedback';
import FeedbackPage from './pages/FeedbackPage';
import AdaugaActivitate from './pages/AdaugaActivitate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='content'> 
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/student' element={<StudentPage />}></Route>
        <Route path='/profesor' element={<ProfessorPage/>}></Route>
        <Route path='/profesor/:id' element={<Profesor/>}></Route>
        <Route path='/activitate/:id' element={<FeedbackPage/>}></Route>
        <Route path='/activitate/:id/feedback' element={<VizualizareFeedback/>}></Route>
        <Route path='/profesor/:id/activitate/' element={<AdaugaActivitate/>}></Route>
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
