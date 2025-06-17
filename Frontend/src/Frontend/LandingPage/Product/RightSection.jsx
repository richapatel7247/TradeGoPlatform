let styles = {
    textDecoration:"none"
}
function RightSection({imgUrl, head, description}) {
    return ( 
        <div className="container py-4 p-3">
          <div className="row ps-5">
            <div className="col-6 p-4">
                <h4>{head}</h4>

                <p className="text-muted">{description}</p>

                <p> <a href="" style={styles}>Learn More <i class="fa-solid fa-arrow-right"></i> </a> </p>
            </div>
            
            <div className="col-6 text-center">
                <img src={imgUrl} alt="" style={{width:"70%"}}/>
            </div>
          </div>
        </div>
     );
}
export default RightSection;