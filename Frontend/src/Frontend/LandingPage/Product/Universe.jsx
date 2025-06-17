import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./universe.css"
function Universe() {
    return ( 
        <div className="container text-center pt-4">
            <div>
                <p className="pb-4">Want to know more about our technology stack? Check out the TradeGo.tech blog.</p>
                <h3>The TradeGo Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
             
             <div className="px-3 pt-4 text-muted">
               <div className="row p-3 companyLogo">
                <div className="col-4">
                <img src="/media/smallcaseLogo.png" alt="" />
                <p>Thematic investment platform</p>
                </div>
                
                <div className="col-4">
                <img src="/media/streakLogo.png" alt="" />
                <p>Algo & strategy platform</p>
                </div>
               
               <div className="col-4"> <img src="/media/sensibullLogo.svg" alt="" />
               <p>Options trading platform</p></div>
               </div>

               <div className="row companyLogo pb-5 p-3">
                <div className="col-4">
                <img src="/media/zerodhaFundhouse.png" alt="" />
                <p>Asset management</p>
                </div>

                <div className="col-4">
                <img src="/media/goldenpiLogo.png" alt="" />
                <p>Bonds trading platform</p>
                </div>

                <div className="col-4">
                <img src="/media/dittoLogo.png" alt="" />
                </div>
               </div>
               </div>
               <Link to={"/signup"}> <Button variant="contained" disableElevation> Sign Up Now</Button> </Link> 
        </div>
     );
}

export default Universe;