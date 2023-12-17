import { useState } from 'react';

function Card ({tituloDoCard}) {

    const [valor, setValor] = useState(0);

    const diminuir = () => {
        if(valor > 0) {
            setValor(valor - 1)
        }
    }

    return (
        <div className="input-group"><label for="men">{tituloDoCard}</label><input type="number" id="men" value={valor} className="input-valid"/>
            <div className="button-group">
                <button className="input-group__button--small" onClick={diminuir} >-</button>
                <button className="input-group__button--small" onClick={() => setValor(valor + 1)}>+</button>
            </div>
        </div>
    );
}


export default Card;



