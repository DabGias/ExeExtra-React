import "../css/Footer.css"
import map from "../img/map.png"
import phone from "../img/phone.png"
import email from "../img/email.png"

function Footer() {
    return(
        <>
            <footer>
                <div className="divFooter">
                    <img className="icone" src={map} alt="Ícone de mapa"/>
                    <p className="contatoFooter">Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000</p>
                </div>
                <div className="divFooter">
                    <img className="icone" src={phone} alt="Ícone de telefone"/>
                    <p className="contatoFooter">(11) 98989-8989</p>
                </div>
                <div className="divFooter">
                    <img className="icone" src={email} alt="Ícone de e-mail"/>
                    <p className="contatoFooter">emailLojaDeModa@email.com.br</p>
                </div>
            </footer>
        </>
    )
}

export default Footer