import { store } from './app/store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import Render from './Frontend/Render'
import Dashboardrender from './Dashboard/Dashboardrender';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PrivateRoute from './Private';




createRoot(document.getElementById('root')).render(


 <BrowserRouter>
  <Provider store={store}>
 <Routes>
  {/* <Route path='/dash/*' element={<Dashboardrender/>}/> */}
  <Route path='/*' element={<Render/>}/>
    <Route path="/dashboard/*" element={<Dashboardrender/>} />
 </Routes>
 </Provider>
 </BrowserRouter>
)
