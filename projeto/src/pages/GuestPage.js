import { Link, useOutletContext } from 'react-router-dom';
import PrincipalTitle from '../components/PrincipalTitle';
import SecondTitle from '../components/SecondTitle';
import Card from '../components/Card';
import PropTypes from 'prop-types';


const GuestPage = () => {

    const [data, setData] = useOutletContext()
    
    const aumentarHomem = () => {
        setData((prevData) => ({...prevData, homem: data.homem + 1}));
    }

    const diminuirHomem = () => {
        if(data.homem > 0) {
            setData((prevData) => ({...prevData, homem: data.homem - 1}));
        }
    }


    const aumentarMulher = (evento) => {
        setData((prevData) => ({...prevData, mulher: data.mulher + 1}));
    }

    const diminuirMulher = () => {
        if(data.mulher > 0) {
            setData((prevData) => ({...prevData, mulher: data.mulher - 1}));
        }
    }

    const aumentarCrianca = (evento) => {
        setData((prevData) => ({...prevData, crianca: data.crianca + 1}));
    }

    const diminuirCrianca = () => {
        if(data.crianca > 0) {
            setData((prevData) => ({...prevData, crianca: data.crianca - 1}));
        }
    }

    const totalPessoas = () => {
        return `${data.homem + data.mulher + data.crianca}`
    }


    const manipuladorClick = () => {
        setData((prevData) => ({...prevData, resultado1: totalPessoas()}));
    //     setData((prevData) => ({...prevData, resultado2: detalhesPessoas()}));
     }

     //validações de tipos com proptypes

    aumentarHomem.prototype = {
        homem: PropTypes.number.isRequired
    }

    diminuirHomem.prototype = {
        homem: PropTypes.number.isRequired
    }

    aumentarMulher.prototype = {
        mulher: PropTypes.number.isRequired
    }
    
    diminuirMulher.prototype = {
        mulher: PropTypes.number.isRequired
    }

    aumentarCrianca.prototype = {
        crianca: PropTypes.number.isRequired
    }

    diminuirCrianca.prototype = {
        crianca: PropTypes.number.isRequired
    }

    return (
    
        <div className="row">

            <PrincipalTitle/>
            <SecondTitle/>
            <div className="row-first">
                <Card label= "Homem" data={data.homem} onDataChangeMais = {aumentarHomem} onDataChangeMenos = {diminuirHomem} />
                <Card label= "Mulher" data={data.mulher} onDataChangeMais = {aumentarMulher} onDataChangeMenos = {diminuirMulher} />
                <Card label= "Criança" data={data.crianca} onDataChangeMais = {aumentarCrianca} onDataChangeMenos = {diminuirCrianca}/>        
            </div> 
        <div>
            <p id="invalid-input" style={{ visibility: "hidden" }}>Por favor, insira somente números!</p>
            <p id="no-input" style={{visibility: "hidden;"}}>Por favor, selecione a quantidade de pessoas!</p>
            <Link to="/register" className="default-button" onClick={manipuladorClick}>Calcular</Link>
            
            {/* <Link to="/result">
                <a href="/result" className="default-button" onClick={manipuladorClick}>Calcular</a>
            </Link> */}
            
            
        </div>
    </div>
    
    )
}

export default GuestPage;