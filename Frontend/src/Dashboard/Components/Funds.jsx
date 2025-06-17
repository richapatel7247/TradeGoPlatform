import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Funds() {
    return ( 
        <div className="container">
            <div className="text-end btn-container pt-5"> <p className="pe-2 text-muted">Instant zero cost funds with UPI</p>
            <div className="me-2"><Link to={"/"}> <Button size="small" variant="contained" disableElevation>Add Funds</Button> </Link> </div>
            <div><Link to={"/"}> <Button size="small" variant="contained" disableElevation>Add Funds</Button> </Link> 
            </div>
        </div>
            <div className="text-muted">
                <p>Equity</p>
                <div className="border fund-table">
                    <div className="border-bottom px-3">
                        <table className="table text-start">
                            <tr>
                                <td> Avalable margine </td>
                                <td>4043.10</td>
                            </tr>
                            <tr>
                                <td>Used Margine</td>
                                <td>3757.30</td>
                            </tr>
                            <tr>
                                <td>Available cash</td>
                                <td>4043.10</td>
                            </tr>
                        </table>
                    </div>

                    <div className=" border-bottom px-3">
                        <table className="table text-start">
                            <tr>
                                <td>Opening Balance</td>
                                <td>4043.30</td>
                            </tr>
                            <tr>
                                <td>Opening Balance</td>
                                <td>3756.30</td>
                            </tr>
                            <tr>
                                <td>Payin</td>
                                <td>4064.00</td>
                            </tr>
                            <tr>
                                <td>SPAN</td> <td>0.00</td>
                            </tr>
                            <tr> <td>Delivery Margine</td> <td>0.00</td>
                            </tr>
                            <tr> <td>Exposure</td> <td>0.00</td> </tr>
                            <tr> <td>Options Premium</td> <td>0.00</td></tr>
                        </table>
                    </div>

                    <div className="border-bottom px-3">
                        <table className="table text-start">
                            <tr> <td>Colateral(Liquid funds)</td> <td>0.00</td></tr>
                            <tr> <td>Colateral(Equity)</td> <td>0.00</td></tr>
                            <tr> <td>Total Colateral</td> <td>0.00</td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Funds;