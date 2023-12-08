import Index from "./Index";
import {useState} from "react";

const Calculator = () => {

    const [data, setData] = useState({
        peso: 0,
        altura: 0,
        resultado: null
    })

    const manipuladorPeso = (event) => setData((prevData) => ({...prevData, peso: event.target.value}));
    const manipuladorAltura = (event) => setData((prevData) => ({...prevData, altura: event.target.value}));

    const obterIMC = () => {
        //peso / (altura * altura)

        return data.peso / ((data.altura/100) * (data.altura/100));
    }

    const manipuladorClick = () => setData((prevData) => ({...prevData, resultado: obterIMC().toFixed(2)}));

    return (
        <>
            <Index label = "Peso" data={data.peso} onDataChange={manipuladorPeso}/>
            <Index label = "Altura" data={data.altura} onDataChange={manipuladorAltura}/>
            <button onClick={manipuladorClick}>Calcular</button>
            <p>Resultado do IMC: {data.resultado}</p>
        </>
        
    )
}

export default Calculator;