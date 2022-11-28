import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import TemplatePage from '../pages/TemplatePage';
function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path='/home' element={<HomePage />}/>
                <Route path='/example' element={<TemplatePage />}/>
                <Route path='*' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;