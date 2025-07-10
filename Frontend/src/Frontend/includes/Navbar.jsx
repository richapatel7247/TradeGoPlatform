import "./Navbar.css"
import { Link } from 'react-router-dom';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
function Navbar() {
    return(
    <nav class="navbar navbar-expand-md bg-body-white sticky-top">
       <div className="container">
      
            <ul className="navbar-nav">
            <li> <Link class="navbar-brand logo" to={"/"}><LeaderboardRoundedIcon  fontSize="large"></LeaderboardRoundedIcon><h5>Trade Go</h5></Link></li>
            </ul>
     

         <div class="navbar-toggler navIcon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class=" fa-solid fa-bars"></span>
         </div>

         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
               <p class="nav-link"></p>
            </div>

         <div className=" navbar-nav ms-auto">
            <ul class="navbtn navbar-nav">
             <li class="nav-item">
               <Link class="nav-link" to={"/signup"}>Signup</Link>
             </li>
             <li class="nav-item">
                <Link class="nav-link" to={"/about"}>About</Link>
             </li>
             <li class="nav-item">
                <Link class="nav-link" to={"/product"}>Products</Link>
             </li>
             <li class="nav-item">
                <Link class="nav-link" to={"/pricing"}>Pricing</Link>
             </li>
             <li class="nav-item">
                <Link class="nav-link" to={"/support"}>Support</Link>
             </li>
            </ul>
         </div>
         </div>
       </div>
    </nav>
    )
}

export default Navbar;
