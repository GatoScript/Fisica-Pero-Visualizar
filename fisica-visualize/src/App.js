import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import MainIndex from "./components/MainIndex";
import Footer from "./components/Footer";

import "./App.css"
import Cinematica from "./components/physics-topics/Cinematica";

const App = () => {
    return(
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<MainIndex/>}/>
                    <Route path="/">
                        <Route path="cinematica" element={<Cinematica/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App;
