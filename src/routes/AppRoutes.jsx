import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import TemplatePage from '../pages/TemplatePage'

function AppRoutes() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<HomePage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/example' element={<TemplatePage/>}/>
            </Routes>
        </BrowserRouter> 
    );
}

export default AppRoutes;