
import './App.css';

function App() {
  return (
    <div class="todo-app">
        <h1>Ada Lovelace's Todos</h1>
        <img height="120" src="https://i.imgur.com/7KxXhNI.jpeg" alt="Ada" class="photo"/>
        <div class="todo-list">
            <div class="task">
                <input type="checkbox" id="task1"/>
                <p>Criar o primeiro programa de computador da história</p>
            </div>
            <div class="task">
                <input type="checkbox" id="task2"/>
                <p>Escrever contribuições para o desenvolvimento da teoria da computação</p>
            </div>      
            <div class="task">
                <input type="checkbox" id="task3"/>
                <p>Incentivar o desenvolvimento de computadores</p>
            </div>    
        </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
