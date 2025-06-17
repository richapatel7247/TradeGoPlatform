
import { createRoot } from 'react-dom/client'
import './index.css'
import Render from './Frontend/Render'
import Dashboardrender from './Dashboard/Dashboardrender';
import {BrowserRouter, Routes, Route} from "react-router-dom";

createRoot(document.getElementById('root')).render(
 
 <BrowserRouter>
 <Routes>
  <Route path='/dash/*' element={<Dashboardrender/>}/>
  <Route path='/*' element={<Render/>}/>
 </Routes>
 </BrowserRouter>
)
