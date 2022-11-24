import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./Header"
import Footer from "./Footer"
import HomePage from '../pages/HomePage';
import CardTemplate from './CardTemplate';
function App() {
    return ( 
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path='Home' element={<HomePage />}/>
                <Route path='Example' element={<CardTemplate />}/>
            </Routes>
            <Route path='*' element={<HomePage/>}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;