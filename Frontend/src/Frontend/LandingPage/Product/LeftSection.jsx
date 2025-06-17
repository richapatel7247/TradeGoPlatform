let styles = {
    textDecoration:"none",
}
function LeftSection({imgUrl, head, description}) {
    return ( 
        <div className="container py-4 p-3">
          <div className="row">
            <div className="col-6 p-4 text-center">
                <img src={imgUrl} alt="" style={{width:"70%"}}/>
            </div>
            <div className="col-6 p-4">
                <h4>{head}</h4>

                <p className="text-muted">{description}</p>

                <p><a href="" style={styles} className="me-3">Try demo <i class="fa-solid fa-arrow-right"></i></a> 
                <a href="" style={styles}>Learn More <i class="fa-solid fa-arrow-right"></i></a></p>

                <div><img src="/media/googlePlayBadge.svg" alt="googleplay" className="me-3"/>
                <img src="/media/appstoreBadge.svg" alt="appstore" /></div>
            </div>
          </div>
        </div>
     );
}

export default LeftSection;