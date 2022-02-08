import worldMap from '../images/worldMap.png';
import maskStudies from '../json/maskStudies.json';
import {useState} from 'react';

const infoCards = maskStudies.infoList;

const InteractiveMap = () => {
    const [box1Visible, setBox1Visible] = useState(false);
    const [box2Visible, setBox2Visible] = useState(false);
    const [box3Visible, setBox3Visible] = useState(false);
    const [box4Visible, setBox4Visible] = useState(false);
    const [box5Visible, setBox5Visible] = useState(false);
    const [box6Visible, setBox6Visible] = useState(false);
       
       //Figure out what to pass as a parameter to fire properly.
    const btnBoxChange = (studyNumber) => {

        //Use a loop to trim over the end number, and avoid duplication.
    const setBoxArray = [setBox1Visible, setBox2Visible, setBox3Visible, setBox4Visible, setBox5Visible, setBox6Visible];
    const studyArray = ['study_1', 'study_2', 'study_3', 'study_4', 'study_5', 'study_6'];
        
        for (let i = 0; i < setBoxArray.length; i++){
            
            if (studyNumber === studyArray[i]) {
                setBoxArray[i](true);
            } else {
                setBoxArray[i](false);
            }
        }
    } 
        
        const cards = infoCards.map((p)=>{
            return(               
                <div className={`mapStudy ${(eval(p.box)) ? "" : "hidden"}`} key={p.id} id={p.id}>
                    <div className="hideButtonDiv">
                        <button className="hideButtonStudy" onClick={() => btnBoxChange(p.hideBox)}>X</button>
                    </div>
                    <table>
                        <tbody>
                        <tr><td>Study Location: {p.location}</td></tr>
                        <tr><td>Source: {p.source}</td></tr>
                        <tr><td>Population studied: {p.population}</td></tr>
                        <tr><td>Intervention: {p.intervention}</td></tr>
                        <tr><td> Outcome: {p.outcome}</td></tr>
                        </tbody>
                    </table>

                </div>
            )
        });
    
        return ( 
                <div id="mapContainer">
                    

                    <div id="mapTopBar">
                        <h1>See the impact of masks in Global Studies</h1>
                        <h3>The Effect of Mask Wearing on SARS-CoV-2 Infection Risk</h3>
                    </div>
                        <div id="mapOverlay"></div>
                        <img id="worldMap" src={worldMap} alt="world map"/> 
                        <div className="credit">
                            <a href="https://jamanetwork.com/journals/jama/fullarticle/2776536">Source: Jama Network </a>
                            <a  href="https://www.pngwing.com/en/free-png-zahef">Map from PNGWing</a>
                        </div>
                            
                    {/* <img id="mediaQueriesWorldMap" src={worldMap2} alt="world map" />
                    <img id="mediaQueriesWorldMap2" src={worldMap3} alt="world map" /> */}
                    <button id="study_1_btn" className={`blueBtn mapButton`} onClick={() => btnBoxChange('study_1')}>Canada</button>

                    <button id="study_2_btn" className={`blueBtn mapButton`} onClick={() => btnBoxChange('study_2')}>USA</button> 
                    <button id="study_3_btn" className={`blueBtn mapButton`} onClick={() => btnBoxChange('study_3')}>Germany</button>
                    <button id="study_4_btn" className={`blueBtn mapButton`} onClick={() => btnBoxChange('study_4')}>China</button>
                    <button id="study_5_btn" className={`blueBtn mapButton`} onClick={() => btnBoxChange('study_5')}>Thailand</button>
                    <button id="study_6_btn" className={`blueBtn mapButton`} onClick={() => btnBoxChange('study_6')}>Guam</button>

                    <div className="cards" >
                        {cards}
                    </div>
                </div>
                
                

        )
    
};
 
export default InteractiveMap;