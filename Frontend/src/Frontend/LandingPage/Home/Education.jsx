function Education() {
    return ( 
       <div className="container p-3">
        <div className="row">
            <div className="col-6 p-5">
                <img src="/media/education.svg" alt="" style={{width:"80%"}} />
            </div>
            <div className="col-6 p-5">
                <h4 className="mb-5">Free and open market education</h4>
                <div className="mb-2 prod">
                <p className="mb-2">Varsity, the largest online stock market education book in the world
                    covering everything from the basics to advanced trading.
                </p>
                <p><a href="" style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
                
                <div className="mb-5 prod">
                <p className="mb-2">Trading Q&A, the most active tarding and investment comunity in India for all your market related queries.</p>
                <p><a href="" style={{textDecoration:"none"}}>Trading Q&A<i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
                
            </div>
        </div>
       </div>
     );
}

export default Education;