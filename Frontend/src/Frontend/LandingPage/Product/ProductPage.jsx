import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection imgUrl="/media/kite.png" 
        head="Kite"
        description="Our ultra-fast flagship platform with streaming market data,
        advanced charts, an elegant UI and more. Enjoy the kite experience 
        seamlessly on your Android and iOS devices."/>

        <RightSection head="Console"
        description="The central dashboard for your TradeGo account. Gain
        insights into your trades and investments with in-depth report and visualsation."
        imgUrl="/media/console.png"/>

        <LeftSection imgUrl="/media/coin.png"
        head="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demate
        account. Enjoy the investment experience on your Android and iOS devices."
        />

        <RightSection head="Kite Connect API"
        description="Buid powerfull trading platforms and experiences with
        our super simple HTTP/JSON APIs. If you are a startup,
        build your investment app and showcase it to our clientbase."
        imgUrl="/media/kiteconnect.png"/>

        <LeftSection imgUrl="/media/varsity.png"
        head="Varsity mobile"
        description="An easy to grasp, collection of stock market lession "/>
        
        <Universe/>
        </>
       );
}

export default ProductPage;