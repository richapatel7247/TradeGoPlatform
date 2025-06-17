import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import "./Hero.css";
import '@fontsource/roboto/500.css';
export default function Hero() {
    return(
        <div className="container p-3 text-center">
            <div className="row">
                <img src="media/homeHero.png" alt="hero image" className="mb-5 mx-auto rounded d-block" style={{height:"70%", width:"70%"}}/>
            </div>
            <h3> Invest in everything</h3>
            <p>Online platform to invest in stock, derivatives, mutual funds, and more</p>
            <Link to={"/signup"}> <Button size="small" variant="contained" disableElevation>Sign up Now</Button> </Link>
        </div>
    )
}