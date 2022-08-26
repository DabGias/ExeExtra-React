import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./css/App.css"
import Menu from "./components/Menu"
import Home from "./components/Home"
import ModaFeminina from "./components/ModaFeminina"
import ModaMasculina from "./components/ModaMasculina"
import ModaInfantil from "./components/ModaInfantil"
import Sobre from "./components/Sobre"
import Footer from "./components/Footer"

function App() {
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/moda-feminina" element={<ModaFeminina/>}/>
                <Route path="/moda-masculina" element={<ModaMasculina/>}/>
                <Route path="/moda-infantil" element={<ModaInfantil/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App