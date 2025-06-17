import { watchlist } from "../Data/data";
import WatchlistItem from "./WatchlistItem"
function Watchlist() {
    return ( 
        <div className="container">
            <div className="watchlist border-bottom pt-2 pb-2">  <input class="form-control me-2" type="search" placeholder=" Search eg. infy. base. fut weekly. gold mcx" aria-label="Search"/>
            
            <p className="text-muted">{watchlist.length}/50</p>
            </div>

            <ul className="pt-3">
                {watchlist.map((stock, index) => {
                    return(
                    <WatchlistItem stock={stock} 
                    key={index}/>
                    )
                })}
            </ul>
        </div>
     );
}

export default Watchlist;