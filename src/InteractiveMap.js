import worldMap from './images/worldMap.png';
import maskStudies from './maskStudies.json';
import {useState} from 'react';

const infoCards = maskStudies.infoList;

const InteractiveMap = () => {
    
       const [boxVisible, setBoxVisible ] = useState(false);
       const [btnVisible, setBtnVisible] = useState(true);
 
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
                    {/* <button onClick={setBoxVisible(false) + setBtnVisible(true)}>Hide</button> */}
                    <button>Hide</button>
                </div>
            )
        });
    
        return ( 
            <div id="mapContainer">
                <h1>Global Studies Map</h1>
    
                <h3>The Effect of Mask Wearing on SARS-CoV-2 Infection Risk</h3>
                
                <img src={worldMap} alt="world map" id="worldMap"/>
                {/* <button id="study_1_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`} onClick={setBoxVisible(true) + setBtnVisible(false)}>Canada</button> */}
                <button id="study_1_btn" className="mapButton">Canada</button>

                <div className="cards" >
                    {cards}
                </div>
                
                <div className="credit">
                <a  href="https://commons.wikimedia.org/w/index.php?curid=4121338">Map art by Gaaarg</a>    </div>
                </div>
        )
    
};
 
export default InteractiveMap;