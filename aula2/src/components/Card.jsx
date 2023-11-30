
function Card ({tituloDoCard}) {
    return (
        <div className="input-group"><label for="men">{tituloDoCard}</label><input type="number" id="men" value="0" className="input-valid"/>
            <div className="button-group">
                <button className="input-group__button--small">-</button>
                <button className="input-group__button--small">+</button>
            </div>
        </div>
    );
}

export default Card;


