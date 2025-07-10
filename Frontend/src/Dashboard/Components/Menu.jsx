import {Link} from "react-router-dom"
import "./Home.css";
import "./Menu.css";
import { useState } from "react";
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
function Menu() {
    const [selectMenu, setSelectMenu] = useState(0);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    
    const handleMenuClick = (index) => {
        setSelectMenu(index);
    }

    const handleProfileClick = (index) => {
        setIsProfileOpen(!isProfileOpen);
    }

    const menuClass = "menu";
    const acticeMenuClass = "menu-selected"
    return ( 
        <div className="menu-container">
          <div className="row pt-2 border-bottom">
            <div className="col-4 menuItem px-3 border-end">
                <p>NIFTY50</p>
                <p>SENSEX</p>
            </div>

            <div className="col-8">
               <div className="row navb">
                  <div className="col-4"><Link class="navbar-brand logo" to={"/"}><LeaderboardRoundedIcon  fontSize="large"></LeaderboardRoundedIcon><h5>Trade Go</h5></Link></div>

                   <div  className="col-6 navbtn buttons"> 
                      <Link to="/dash/" onClick={() => handleMenuClick(0)}> <p className={selectMenu===0 ? acticeMenuClass : menuClass}> Dashboard </p> </Link>
                      <Link to="/dash/orders" onClick={() => handleMenuClick(1)}> <p className={selectMenu===1?acticeMenuClass : menuClass}> Orders </p> </Link>
                     <Link to="/dash/holdings" onClick={() => handleMenuClick(2)}> <p className={selectMenu===2?acticeMenuClass : menuClass}> Holdings </p> </Link>
                     <Link to="/dash/positions" onClick={() => handleMenuClick(3)}> <p className={selectMenu===3?acticeMenuClass : menuClass}> Positions</p> </Link>
                     <Link to="/dash/funds" onClick={() => handleMenuClick(4)}> <p className={selectMenu===4?acticeMenuClass : menuClass}> Funds </p> </Link>
                     <Link to="/dash/apps" onClick={() => handleMenuClick(5)}> <p className={selectMenu===5?acticeMenuClass : menuClass}> Apps </p> </Link>
                   </div>
                </div>
            </div>
         </div>
              
    </div>

     );
}
{/* <div className="col">
                    <Link class="navbar-brand logo" to={"/"}><LeaderboardRoundedIcon  fontSize="large"></LeaderboardRoundedIcon><h5>Trade Go</h5></Link>
                  </div>

                   <div  className="col buttons">
                     <Link to="/" onClick={() => handleMenuClick(0)}> <p className={selectMenu===0 ? acticeMenuClass : menuClass}> Dashboard </p> </Link>
                     <Link to="/dash/orders" onClick={() => handleMenuClick(1)}> <p className={selectMenu===1?acticeMenuClass : menuClass}> Orders </p> </Link>
                     <Link to="/dash/holdings" onClick={() => handleMenuClick(2)}> <p className={selectMenu===2?acticeMenuClass : menuClass}> Holdings </p> </Link>
                     <Link to="/dash/positions" onClick={() => handleMenuClick(3)}> <p className={selectMenu===3?acticeMenuClass : menuClass}> Positions</p> </Link>
                     <Link to="/dash/funds" onClick={() => handleMenuClick(4)}> <p className={selectMenu===4?acticeMenuClass : menuClass}> Funds </p> </Link>
                     <Link to="/dash/apps" onClick={() => handleMenuClick(5)}> <p className={selectMenu===5?acticeMenuClass : menuClass}> Apps </p> </Link>
                    </div> */}
//   <div  className="col px-3 border-start"  onClick={handleProfileClick}><div> <p>ZU  UserId</p></div>
export default Menu;