function Dashboard() {
    return ( 
        <div className="container">
             <div className="pt-5 border-bottom"><p>Hi, User!</p></div>
            <div className="py-5 border-bottom"><p>Equity</p>
            <div className="pt-5 row"> <div className="col pe-5 border-end"><h4>3.74K</h4>
            <p>Margine available</p></div>
            <div className="col ps-5"><p>Margins used 0</p>
            <p>Opening balance 3.74K</p></div>
            </div>
            </div>

            <div className="pt-5"><h6>Holdings(13)</h6>
           </div>
        </div>
     );
}

export default Dashboard;