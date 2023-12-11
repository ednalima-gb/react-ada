import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Calculator from '../src/components/Calculator';

import './App.css';
import CalculatorPage from './pages/CalculatorPage';
import GuestPage from './pages/GuestPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <div className="container">
    <h1>Churrascômetro</h1>
    <div className="calculator">
        <h3>Precisa de uma ajudinha com o churrasco? 
            <br/><br/>
            Quantas pessoas vão participar?
        </h3>

        <div className="todo-app">
        <Router>
          <Routes>
              <Route path="/" element={<CalculatorPage/>}>
                <Route index element={<GuestPage/>}/>
                <Route path="result" element={<ResultPage/>}/>
              </Route>
          </Routes>
        </Router>
      </div>
        
    </div>
    <div className="theme-container"><label id="label-theme-text" for="input-theme">Tema Escuro</label>
        <label className="switch">
            <input type="checkbox" id="input-theme" checked="checked"/>
            <span className="slider"></span>
        </label>
    </div>
</div>
  );
}

export default App;
