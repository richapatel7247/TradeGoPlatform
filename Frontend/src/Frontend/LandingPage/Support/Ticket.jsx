import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import TollOutlinedIcon from '@mui/icons-material/TollOutlined';

export default function Ticket() {
    return(
        <div className="container p-5">
        <h3 className="mb-5">To create a ticket, select a relevant topic</h3>
        <div className="row text-muted" style={{lineHeight:"35px"}}>
        <div className="col">
            <h6 className="mb-5"><AddCircleOutlinedIcon className='me-2'></AddCircleOutlinedIcon> Account Opening</h6>
            <a href="">Online Account Opening</a> <br />
            <a href="">Offline Account Opening</a> <br />
            <a href="">Company, Partnership and HUF Account Opning</a> <br />
            <a href="">NRI Account Opening</a> <br />
            <a href="">Changes at TradeGo</a> <br />
            <a href="">TradeGo IDFC FIRST Bank 3-in-1 Account</a> <br />
            <a href="">Getting Started</a>
        </div>

        <div className="col">
        <h6 className="mb-5"><PersonIcon className='me-2'></PersonIcon> Your TradeGo Account</h6>
            <a href="">Login Credentials</a> <br />
            <a href="">Account Modification and Segment Addition</a> <br />
            <a href="">DP ID and bank detail</a> <br />
            <a href="">Your Profile</a> <br />
            <a href="">Transfer and conversion of shares</a>
        </div>

        <div className="col">
        <h6 className="mb-5"><AddchartRoundedIcon className='me-2'></AddchartRoundedIcon> Your TradeGo Account</h6>
            <a href="">MarginAverage, Product and Order types</a> <br />
            <a href="">Kite Web and Mobile</a> <br />
            <a href="">Trading FAQs</a> <br />
            <a href="">Corporate Actions</a> <br />
            <a href="">Sentinel</a> <br />
            <a href="">Kite API</a> <br />
            <a href="">Pi and other platforms</a> <br />
            <a href="">Stockreports+</a>
            <a href="">GTT</a>
        </div>
        </div>

        <div className='row text-muted mt-5'  style={{lineHeight:"35px"}}>
            <div className='col'>
                <h6 className="mb-5"> <FolderCopyOutlinedIcon className='me-2'></FolderCopyOutlinedIcon>Funds</h6>
                <a href="">Adding Funds</a>
                <a href="">Fund Withdrawal</a>
                <a href="">eMandates</a>
                <a href="">Adding Bank Accounts</a>
            </div>

            <div className='col'>
                <h6 className="mb-5"><CircleOutlinedIcon className='me-2'></CircleOutlinedIcon>Console</h6>
                <a href="">Reports</a>
                <a href="">Ledger</a>
                <a href="">Portfolio</a>
                <a href="">60 Day Challenge</a>
                <a href="">IPO</a>
                <a href="">Referral Program</a>
            </div>

            <div className='col'>
                <h6 className="mb-5"> <TollOutlinedIcon className='me-2'></TollOutlinedIcon>Coin</h6>
                <a href="">Understanding Mutual Funds</a>
                <a href="">About Coin</a>
                <a href="">Buying and Selling through Coin</a>
                <a href="">Standing an SIP</a>
                <a href="">Managing your Portfolio</a>
                <a href="">Coin App</a>
                <a href="">Moving to Coin</a>
                <a href="">Goverment Securities</a>
            </div>
        </div>
        </div>
    )
}