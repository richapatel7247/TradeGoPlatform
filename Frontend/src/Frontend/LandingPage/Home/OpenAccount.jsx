import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function OpanAccount() {
    return(
        <div className="container text-center p-3">
            <h4 className="mb-2">Opan a TradeGo account</h4>
             <p className="text-muted">Modern platforms and apps, 0&#8377; investments, and flat &#8377;20 intrady and F&O trades. </p>
             <Link to={"/signup"}> <Button size="small" variant="contained" disableElevation>Sign up Now</Button> </Link> 
        </div>
    )
}