import { Link, useOutletContext } from 'react-router-dom';
import PrincipalTitle from '../components/PrincipalTitle';

const ResultPage = () => {
    const [data] = useOutletContext()

    
    return (

        // <>
        //     <PrincipalTitle/>
        //     <div className='result'>
        //         <h4>Confira a lista para o seu churrasco!</h4>
        //         <p>{data.resultado1} convidado(s) </p>
        //         <p>{data.resultado2}</p>

        //     </div>
            
        //     <div className='quantities'>
        //         <p>QUANTIDADE</p>
        //         <br></br>
        //         <ul>
        //             <li>Carne: {data.resultado1} kg</li>
        //             <li>Pão de Alho : {data.resultado1} unidade(s)</li>
        //             <li>Refrigerante: {data.resultado1} garrafa(s) de 2L</li>
        //             <li>Água: {data.resultado1} garrafa(s) de 1L</li>
        //             <li>Carvão: {data.resultado1} kg</li>
        //             <li>Sal: {data.resultado1/4} kg</li>
        //             <li>Gelo: {data.resultado1/2} kg</li>
        //         </ul>
        //     </div>

        //     {/* <Link to='/'><a href='/' className='default-button'>Novo cálculo</a></Link>    */}
        //     <Link to='/' className='default-button'>Novo cálculo</Link>   
        // </>

        <div class="container">
       <PrincipalTitle/>
        <div class="calculator">
            <div>
                <div class="result-total-guest">
                    <p>Confira a lista para o seu churrasco!</p>
                    <p id="total-guest">{data.resultado1} convidado(s)</p>
                    <span class="guest-list">{data.homem} homem(ns)</span>
                    <span class="guest-list">{data.mulher} mulher(es)</span>
                    <span class="guest-list">{data.crianca} criança(s)</span>
                </div>
                <div class="input-group-result">
                    <div id="header-result">
                        <p>ITEM</p>
                        <p>QUANTIDADE</p>
                    </div>
                    <ul class="results">
                        <li><strong>Carne</strong><span> {(data.homem*0.4 + data.mulher*0.32 + data.crianca*0.2).toFixed(2)} kg</span></li>
                        <li><strong>Pão de Alho</strong><span>{(data.homem*2 + data.mulher*2 + data.crianca*1)} unidades</span></li>
                        <li><strong>Refrigerante</strong><span>1 garrafa de 2 L</span></li>
                        <li><strong>Água</strong><span>1 garrafa de 1 L</span></li>
                        <li><strong>Carvão</strong><span>{(data.homem + data.mulher + data.crianca).toFixed(2)} kg</span></li>
                        <li><strong>Sal</strong><span>{(data.homem*0.04 + data.mulher*0.04 + data.crianca*0.04).toFixed(2)} kg</span></li>
                        <li><strong>Gelo</strong><span>5.00 kg</span></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div>
                <Link to='/' className='default-button'>Novo cálculo</Link> 
                </div>
            </div>
        </div>
        <div class="theme-container"><label id="label-theme-text" for="input-theme">Tema Escuro</label>
            <label class="switch">
                <input type="checkbox" id="input-theme" checked="checked"/>
                <span class="slider"></span>
            </label>
        </div>
        </div>
        
       
        
    )
}

export default ResultPage;