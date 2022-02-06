import maskLogo from '../images/maskLogo.png';

const HeroImage = () => {
    return ( 
        <div id="firstContainer" >
            <div className="overlay" id="firstOverlay"></div>
            <div id="topBar">            
                <div id="logoDiv"><img src={maskLogo} alt="logo" id="logo"/>
                <h2>Cleankit</h2></div>
                <p id="firstCompanyDetails">Korea based factory accepting local and international orders</p>
            </div>
            <div id="firstText">
                    <h1>Looking for a large scale PPE solution?</h1>
                    <h2>The Cleankit factory is ready for bulk orders of masks</h2>
                    <button className="blueBtn " id="firstButton" ><a href="#fourthPage" className="bigBtn">Get Started</a></button>
            </div> 
        </div>
    )
};

 
export default HeroImage;

