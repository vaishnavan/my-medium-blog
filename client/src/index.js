import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@coreui/coreui/dist/css/coreui.min.css'
import { SignUp, Login } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
</>)