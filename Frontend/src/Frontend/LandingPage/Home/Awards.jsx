import "./Award.css";
export default function Awards() {
    return(
        
         <div className="container award-cont p-3  mb-5">
            <div className='row award'>
                <div className='imgbox col-6 p-5 mt-3'>
                    <img src="/media/largestBroker.svg" alt="largestBroker"/>
                </div>

                <div className=' awardItem col-6  p-5 mt-3'>
                <h4>Largest stock broker in India</h4>
                <p>2+ million TradeGo clients contributes to over 15% of all retal order volumes in <br></br>India daily by trading and investing in : </p>
                
                <div className='row'>
                <div className='col-6'>
                <ul>
                 <li> <p> Future and Option</p> </li>
                 <li> <p>Commodity derivatives</p> </li>
                 <li> <p>Currency derivatives</p> </li>
                </ul>
                </div>

                <div className='col-6'>
                    <ul>
                        <li> <p>Stocks & IPOs</p> </li>
                        <li> <p>Direct mutual funds</p> </li>
                        <li> <p>Bonds and Govt. Securities</p> </li>
                    </ul>
                </div>
                </div>
                <div><img src="/media/pressLogos.png" alt="pressLogo" style={{width:"90%"}}/></div>
                </div>
                </div>
            </div>     
    )
}