import Awards from "./Awards";
import Hero from "./Hero";
import Stats from "./stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "./OpenAccount"

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;