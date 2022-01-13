import worldMap from './images/worldMap.png';
import maskStudies from './maskStudies.json';
import {useState} from 'react';

const infoCards = maskStudies.infoList;

const InteractiveMap = () => {
    
       const [boxVisible, setBoxVisible ] = useState(true);
       const [btnVisible, setBtnVisible] = useState(false);
 
        const cards = infoCards.map((p)=>{
            return(
                <div className={`mapStudy ${boxVisible ? "" : "hidden"}`} key={p.id} id={p.id}>
                    {/* <div className={`mapStudy`} key={p.id} id={p.id} >   */}
                    <table>
                        <tbody>
                        <tr><td>Location: {p.location}</td></tr>
                        <tr><td>Source: {p.source}</td></tr>
                        <tr><td>Population studied: {p.population}</td></tr>
                        <tr><td>Intervention: {p.intervention}</td></tr>
                        <tr><td> Outcome: {p.outcome}</td></tr>
                        </tbody>
                    </table>

                    {/* Setting the state on the class is okay. Setting the button the box, not ok. */}

                    {/* <button onClick={setBoxVisible(false) + setBtnVisible(true)}>Hide</button> */}
                    {/* <button>Hide</button> */}
                </div>
            )
        });
    
        return ( 
            <div id="mapContainer">
                <h1>See the impact of masks in Global Studies</h1>
    
                <h3>The Effect of Mask Wearing on SARS-CoV-2 Infection Risk</h3>
                
                <img src={worldMap} alt="world map" id="worldMap"/>
                {/* <button id="study_1_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`} onClick={setBoxVisible(true) + setBtnVisible(false)}>Canada</button> */}

                {/* className ternary version */}
                <button id="study_1_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`}>Canada</button> 
                <button id="study_2_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`}>USA</button> 
                <button id="study_3_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`}>Germany</button>
                <button id="study_4_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`}>China</button>
                <button id="study_5_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`}>Thailand</button>
                <button id="study_6_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`}>Guam</button>

                <div className="cards" >
                    {cards}
                </div>
                
                <div className="credit">
                <a href="https://jamanetwork.com/journals/jama/fullarticle/2776536">Source: Jama Network </a>
                <a  href="https://commons.wikimedia.org/w/index.php?curid=4121338">Map art from Wikipedia Artist</a>    
                </div>
            </div>
        )
    
};
 
export default InteractiveMap;