import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Orders() {
    return ( 
        <div className="container text-center">
            <p className="text-muted">You haven't placed any order</p>
             <Link to={"/"}> <Button size="small" variant="contained" disableElevation>Get Started</Button> </Link> 
        </div>
     );
}

export default Orders;