import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Calculator from '../src/components/Calculator';

import './App.css';
import CalculatorPage from './pages/CalculatorPage';
import GuestPage from './pages/GuestPage';
import RegisterPage from './pages/RegisterPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <div className="container">
    {/* <PrincipalTitle/> */}
    <div className="calculator">
        {/* <SecondTitle/> */}

        <div className="todo-app">
        <Router>
          <Routes>
              <Route path="/" element={<CalculatorPage/>}>
                <Route index element={<GuestPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>
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
