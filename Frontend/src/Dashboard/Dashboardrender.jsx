import { Routes , Route} from "react-router-dom";
import Home from "./Components/Home.jsx";
function Dashboardrender() {
    return(
        <>
          <Routes>
             <Route path="/*" element={<Home/>}/>
          </Routes>   
          </>
    )
}
export default Dashboardrender;
 