
import PricingImg from "./PricingCard"

export default function Hero() {
    return(
      <div className='container text-center p-5'>
        <div>
          <h1 className="mb-3">Pricing</h1>
          <p className="text-muted">Free equity investment flat &#8377;20 trady snd F&O trades</p>
        </div>

        <div className='row border-top mt-5 pt-5'>
          <div className='col'>
            <PricingImg imgUrl="/media/pricingEquity.svg"
            heading="Free equity delivery"
            content="All equity delivery investment (NSE, BSE), are absolutely free - &#8377; 0 brokerage."/>
          </div>

          <div className='col'>
            <PricingImg imgUrl="/media/intradayTrades.svg"
            heading="Intraday and F&O trades"
            content="flat Rs. 20 or 0.03%(whichever is lower) per executed order on intrady trades across equity, currency and commodity trades."/>
          </div>

          <div className="col"> 
            <PricingImg imgUrl="/media/pricingMF.svg"
            heading="Free direct MF"
            content="All direct mutual funds investment are absolutely free - &#8377; 0 commissions & DP charges."/>
          </div>
        </div>
  </div>     
    )
}