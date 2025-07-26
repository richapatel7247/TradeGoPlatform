import "./Home.css"
import axios from "axios";
import { useState, useEffect } from "react";

function Holdings() {

    let [allHoldings, setAllHoldings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/allHoldings").then((res) => {
            setAllHoldings(res.data);
        });
     }, []);


    return ( 
        <div className="container px-3 pt-3">
             <h6>Holdings ({allHoldings.length})</h6>
            <div className=" border-top mt-3">
             <table  className="table">
              <tr className="border-bottom text-muted">
               <th className="border-end text-start">Instrument</th>
               <th>Qty.</th>
               <th>Avg cost</th>
               <th className="border-end">LTP</th>
               <th>Cur val</th>
               <th>P&L</th>
               <th>Net chg.</th>
               <th>Day chg.</th>
              </tr>
              {
                allHoldings.map((stock, index) => {
                    const curValue = stock.price * stock.qty;
                    const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                    const profClass = isProfit ? "profit" : "loss";
                    const dayClass = stock.isLoss ? "loss" : "profit";

                    return(
                        <tr key={index} className="border-bottom" >
                            <td className="border-end text-start">{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{(stock.avg).toFixed(2)}</td>
                            <td className="border-end">{(stock.price).toFixed(2)}</td>
                            <td>{(curValue.toFixed(2))}</td>
                            <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                            <td className={profClass}>{stock.net}</td>
                            <td className={dayClass}>{stock.day}</td>
                        </tr>
                    )
                })
              }

             </table>
            </div>
           
            <div className="mt-5 ele text-muted">
                <div>
                <h4>29,875</h4>
                <p>55</p>
                <p>Total Investment</p>
                </div>
                <div>
                    <h4>31,428</h4>
                    <p>95</p>
                    <p>Current Value</p>
                </div>
                <div>
                    <h4 style={{color:"green"}}>1,553.40(+5.20%)</h4>
                    <p></p>
                    <p>P&L</p>
                </div> 
            </div>
        </div>
     );
}

export default Holdings;