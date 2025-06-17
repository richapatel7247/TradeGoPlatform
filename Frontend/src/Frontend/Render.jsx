import { Routes , Route} from "react-router-dom";
import Navbar from "./includes/Navbar";
import Footer from "./includes/Footer";
import About from "./LandingPage/About/AboutPage.jsx";
import Signup from "./LandingPage/Signup/SignupPage.jsx";
import Pricing from "./LandingPage/Pricing/PricingPage.jsx";
import Product from "./LandingPage/Product/ProductPage.jsx";
import Support from "./LandingPage/Support/Hero.jsx";
import Home from "./LandingPage/Home/HomePage.jsx";
import Dashboardrender from "../Dashboard/Dashboardrender.jsx";
function Render() {
    return(
        <>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/support' element={<Support/>} />
           </Routes>
          <Footer/>
          
          </>
    )
}
 
export default Render;