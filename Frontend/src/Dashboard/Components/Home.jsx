import Dashboard from "./Dashboard";
import Menu from "./Menu";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import  Watchlist from "./Watchlist";
import { Routes , Route} from "react-router-dom";

function Home() {
    return (
      <div className="container">
      <div className="row">
        <Menu/>
      </div>
      <div className="row">
        <div className="col-4 border-end">
          <Watchlist/>
        </div>
        <div className="col-8">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/holdings" element={<Holdings/>}/>
            <Route path="/positions" element={<Positions/>}/>
            <Route path="/funds" element={<Funds/>}/>
            <Route path="/apps" element={<Apps/>}/>
          </Routes>
        </div>
      </div>
     </div>
      );
}

export default Home;