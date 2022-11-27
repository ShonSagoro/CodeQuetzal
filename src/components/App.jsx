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
                <Route path='/home' element={<HomePage />}/>
                <Route path='/example/:id' element={<CardTemplate />}/>
                <Route path='*' element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;