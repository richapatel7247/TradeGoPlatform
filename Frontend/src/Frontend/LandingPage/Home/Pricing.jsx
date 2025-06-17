import "./Pricing.css"
function Pricing() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-6 p-5">
                    <h4 className="mb-4">Unbeatable Pricing</h4>
                    <p className="text-muted">We pioneered the concept of discount broking and
                        price transparency in India. Flat fees an dno hidden charges,
                    </p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className="col-6 row p-5 text-center">
                    <div className="col-6 p-3 border boxes" > <h1 className="mb-4"> &#8377; 0</h1>
                        <p className="text-muted">Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col-6 p-3 border boxes"> <h1 className="mb-4">&#8377; 20</h1>
                        <p className="text-muted">Intraday and F&O</p>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Pricing;