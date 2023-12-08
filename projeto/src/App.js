import Calculator from './components/Calculator';

import './App.css';

function App() {
  return (
    <div className="container">
    <h1>Churrascômetro</h1>
    <div className="calculator">
        <h3>Precisa de uma ajudinha com o churrasco? 
            <br/><br/>
            Quantas pessoas vão participar?
        </h3>
        <Calculator/>
        
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
