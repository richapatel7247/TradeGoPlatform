import "./Pricing.css"
function PricingImg({imgUrl, heading, content}) {
    return ( 
        <div className="container p-2 pricingImg">
            <img src={imgUrl} alt="" />
            <h4>{heading}</h4>
            <p className="text-muted">{content}</p>
        </div>
     );
}

export default PricingImg;