import { Outlet } from "react-router-dom";
import {useState} from 'react';

const CalculatorPage = () => {

    const [data, setData] = useState({
        homem: 0,
        mulher: 0,
        crianca: 0,
        resultado: null
    });

    return (
        <>
            <Outlet context={[data, setData]}/>
        </>
       
    )
}

export default CalculatorPage;