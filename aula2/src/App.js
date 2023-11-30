import logo from './logo.svg';
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
        <div className="row-first">
            <div className="input-group"><label for="men">Homens</label><input type="number" id="men" value="0" className="input-valid"/>
                <div className="button-group">
                    <button className="input-group__button--small">-</button>
                    <button className="input-group__button--small">+</button>
                </div>
            </div>
            <div className="input-group">
                <label for="women">Mulheres</label><input type="number" id="women" value="0" className="input-valid"/>
                <div className="button-group"><button className="input-group__button--small">-</button>
                    <button className="input-group__button--small">+</button>
                </div>
            </div>
            <div className="input-group">
                <label for="kid">Crianças</label>
                <input type="number" id="kid" value="0" className="input-valid"/>
                <div className="button-group"><button className="input-group__button--small">-</button>
                    <button className="input-group__button--small">+</button>
                </div>
            </div>
        </div>
        <div className="row">
            <div>
                <p id="invalid-input" style={{ visibility: "hidden" }}>Por favor, insira somente números!</p>
                <p id="no-input" style={{visibility: "hidden;"}}>Por favor, selecione a quantidade de pessoas!</p>
                <a href="/" className="default-button">Calcular</a>
            </div>
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
