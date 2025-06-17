import "./Stats.css"
export default function Stats() {
    return(
        <div className="container p-3">
            <div className="row">
            <div className="col-6 ps-5">
            <h4 className="mb-4">Trust with confidence</h4>

            <div className="prod">
                <h6>Customer-first always</h6>
                <p className="text-muted">That's why 1.3+ crore customers trust TradeGo with &#8377;3.5+ lakh crores
                 worth of equity investment. </p>
            </div>
            
            <div className="prod">
                <h6>No spam or gimmicks</h6>
                <p className="text-muted"> No gimmicks, spam, "gamification", or annoying push notifications.
                 High quality apps that you use at your pace, the way you like.</p>
            </div>

            <div className="prod">
                <h6>The TradeGo universe</h6>
                <p className="text-muted">  Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your needs.</p>
            </div>


            <div className="prod">
                <h6>Do better with money</h6>
                <p className="text-muted"> With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with your
                money.</p>
            </div>
        
            </div>
            
            <div className="col-6 ps-5">
                <img src="/media/ecosystem.png" alt="" style={{width:"80%"}} />
                <div> <a href="" className="mx-2" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                <a href="" className="ms-2" style={{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a></div>
            </div>
            </div>
        </div>
    )
}