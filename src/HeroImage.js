import maskLogo from './images/maskLogo.png';

const HeroImage = () => {
    return ( 
        <div id="firstContainer" >
            <div id="firstOverlay"></div>
            <div id="topBar">            
                <div id="logoDiv"><img src={maskLogo} alt="logo" id="logo"/>
                <h2>Cleankit</h2></div>
                <p>Korea based factory accepting local and international orders</p>
            </div>
            <div id="firstText">
                    <h1>Looking for a large scale PPE solution?</h1>
                    <h2>The Cleankit factory is ready for bulk orders of masks</h2>
                    <button className="button" id="firstButton"><h3>Get Started</h3></button>
            </div> 
        </div>
    )
};

 
export default HeroImage;

