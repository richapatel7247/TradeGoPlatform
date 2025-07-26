import axois from "axios";
import { useState, useEffect} from "react";
function Positions() {
    let [allPositions, setAllPositions] = useState([]);

    useEffect(()=> {
        axois.get("http://localhost:8000/allPositions").then((res) => {
            setAllPositions(res.data);
        })
    }, []);

    return ( 
        <div className="container pt-3">
           <h6>Position</h6>
           <table className="table">
            <tr className="border-bottom">
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
            </tr>
            {allPositions.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const isProfit = curValue - stock.avg * stock.qty  >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return(
                    <tr className="border-bottom" key={index}>
                        <td>{stock.product}</td>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.avg.toFixed(2)}</td>
                        <td>{stock.price.toFixed(2)}</td>
                        <td className={profClass}>{(curValue - stock.avg * stock.qty).toFixed(2)}</td>
                        <td className={dayClass}>{stock.day}</td>
                    </tr>
                  )

            })}
            </table>
        </div>
     );
}

export default Positions;