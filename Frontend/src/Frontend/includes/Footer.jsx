import "./Footer.css"
import { Link } from '@mui/material';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
export default function Footer() {
  return(
    
    <div className='footer container-fluid px-5 pt-3 mt-5 border-top'>
        <div className='row'>
        <div className='col'>
       <Link class="navbar-brand logo" to={"/"}><LeaderboardRoundedIcon  fontSize="large"></LeaderboardRoundedIcon><h5>Trade Go</h5></Link>
        <p> &copy; 2010-2024, Not TradeGo Broking Ltd. <br />
        All rights reserved.
        </p>
        <div className='social-media mt-4'> <i class="fa-brands fa-twitter me-3"></i> <i class="fa-brands fa-facebook me-3"></i> 
        <i class="fa-brands fa-square-instagram me-3"></i> <i class="fa-brands fa-linkedin me-3"></i> 
        <i class="fa-brands fa-telegram me-3"></i> </div>
        </div>

        <div className='col'>
        <h6>Company</h6>
        <div className='links'>
        <a href="/about">About</a> <br />
        <a href="/product">Products</a> <br />
        <a href="/pricing">Pricing</a><br />
        <a href="">Referral programe</a> <br />
        <a href="">Careers</a> <br />
        <a href="">TradeGo.tech</a> <br />
        <a href="">Press & media</a> <br />
        <a href="">TradeGo cares (CSR)</a> <br />
        </div>
        </div>

        <div className='col'>
        <h6>Support</h6>
        <div className='links'>
            <a href="">Contact</a>
            <br />
            <a href="/support">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            </div>
        </div>

        <div className='col'>
        <h6>Account</h6>
        <div className='links'>
            <a href="/signup">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            </div>
        </div>
        </div>

        <div className='row pt-3 text-muted' style={{fontSize:13}}>
        <p>
            TradeGo Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through TradeGo Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through TradeGo Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: TradeGo Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@TradeGo.com, for DP related to dp@tradego.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradeGo and offering such services, please
            create a ticket here.
          </p>
        </div>
        </div>
  )
}
    