import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../services/Header/index';
import About from './../pages/About/index';
import ODS from './../pages/ODS/index';
import Error from '../services/Error/index'

export default function Rotas(){
    return(
        <Router>
            <Header/>
            <Routes>
                <Route element={ <About/> } path='/'/>
                <Route element={ <ODS/> } path='ods'/>
                <Route element={ <Error/> } path='*'/>
            </Routes>
        </Router>
    )
}