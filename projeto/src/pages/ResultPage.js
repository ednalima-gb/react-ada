import { Link, useOutletContext } from 'react-router-dom';

const ResultPage = () => {
    const [data] = useOutletContext()
    return (

        <>
            <div className='result'>
                <h4>Confira a lista para o seu churrasco!</h4>
                <p>{data.resultado1} convidado(s) </p>
                <p>{data.resultado2}</p>

            </div>
            
            <div className='quantities'>
                <p>QUANTIDADE</p>
                <br></br>
                <ul>
                    <li>Carne: {data.resultado1} kg</li>
                    <li>Pão de Alho : {data.resultado1} unidade(s)</li>
                    <li>Refrigerante: {data.resultado1} garrafa(s) de 2L</li>
                    <li>Água: {data.resultado1} garrafa(s) de 1L</li>
                    <li>Carvão: {data.resultado1} kg</li>
                    <li>Sal: {data.resultado1/4} kg</li>
                    <li>Gelo: {data.resultado1/2} kg</li>
                </ul>
            </div>

            <Link to='/'><a href='/' className='default-button'>Novo cálculo</a></Link>   
        </>
        
       
        
    )
}

export default ResultPage;