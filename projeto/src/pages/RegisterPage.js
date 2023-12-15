import { Link } from "react-router-dom";
//import { useState } from "react";

const RegisterPage = () => {

    //const [isFormValid, setIsFormValid] = useState(false);

    // function handleSubmit(event) {
    //     event.preventDefault();

    //    //Lógica para validar os campos do formulário
    //     const name = document.getElementById("name").value;
    //     const email = document.getElementById("email").value;
    //     const postalCode = document.getElementById("postal-code").value;

    //     const isNameValid = name.trim() !== "";
    //     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    //     const isPostalCodeValid = /^\d{5}$/.test(postalCode);

    //     const isFormValid = isNameValid && isEmailValid && isPostalCodeValid;
    //     setIsFormValid(isFormValid);

    //     if (isFormValid) {
    //                 // Redirecionar para a página "/result" se o formulário for válido
    //                 window.location.href = "/result";
    //             }
       
    // }



    return (
        <div class="container">
                <h1>Churrascômetro</h1>
                <div class="calculator">
                    <div class="row">
                        <div class="input-form-group">
                            <p id="header-form">Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!</p>
                            <form>
                                <input type="text" id="name" placeholder="Digite seu nome" class="input-form" required/>
                                <p id="invalid-name">Por favor, insira um nome válido!</p>
                                <input type="email" id="email" placeholder="Digite seu email" class="input-form" required/>
                                <p id="invalid-email">Por favor, insira um e-mail válido!</p>
                                <input type="number" id="postal-code" placeholder="Digite seu CEP" class="input-form" required/>
                                <p id="error-postal-code">Por favor, insira um CEP válido!</p>
                                {/* <button class="default-button" disabled={!isFormValid} onClick={(event) => handleSubmit(event) }>Cadastrar</button>  */}
                                 <Link to="/result" class="default-button" >Cadastrar</Link>
                                                                           
                            
                            </form>
                            <div id="consent-input">
                                <input type="checkbox" id="consent-checkbox" name="consentInput" checked="checked"/>
                                <label htmlFor="consent-checkbox" id="consent-label">Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div>
                            {/* <a href="/result" class="default-button">Cadastrar</a> */}
                            {/* <Link to="/result" className="default-button">

                            </Link> */}
                            {/* <button class="default-button" onSubmit={(event) => handleSubmit(event) }>Cadastrar</button> */}
                        </div>
                        <div id="nav-container">
                            <Link to="/">
                                <button id="back-nav">Voltar</button>
                            </Link>

                            <Link to="/result">
                                <button id="skip-register">Pular</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div class="theme-container">
                    <label id="label-theme-text" for="input-theme">Tema Escuro</label>
                    <label class="switch">
                        <input type="checkbox" id="input-theme" checked="checked"/><span class="slider">
                        </span>
                    </label>
                </div>
            </div>
            
    )
}


export default RegisterPage;

