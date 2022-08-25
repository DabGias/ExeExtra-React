import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./css/App.css"
import Menu from "./components/Menu"
import Home from "./components/Home"

function App() {
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App