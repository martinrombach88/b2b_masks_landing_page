import worldMap from './images/worldMap.png';
import worldMap2 from './images/worldMap2.png';
import worldMap3 from './images/worldMap3.png';
import maskStudies from './maskStudies.json';
import {useState} from 'react';

const infoCards = maskStudies.infoList;

const InteractiveMap = () => {
       const [box1Visible, setBox1Visible] = useState(false);
       const [box2Visible, setBox2Visible] = useState(false);
       const [box3Visible, setBox3Visible] = useState(false);
       const [box4Visible, setBox4Visible] = useState(false);
       const [box5Visible, setBox5Visible] = useState(false);
       const [box6Visible, setBox6Visible] = useState(false);
       const [btn1Visible, setBtn1Visible] = useState(true);
       const [btn2Visible, setBtn2Visible] = useState(true);
       const [btn3Visible, setBtn3Visible] = useState(true);
       const [btn4Visible, setBtn4Visible] = useState(true);
       const [btn5Visible, setBtn5Visible] = useState(true);
       const [btn6Visible, setBtn6Visible] = useState(true);
       
       //Figure out what to pass as a parameter to fire properly.
       const btnBoxChange = (studyNumber) => {

            if (studyNumber === 'study_1') {
                setBox1Visible(true);
                setBtn1Visible(false);
            } else if (studyNumber === 'study_1_hide') {
                setBox1Visible(false);
                setBtn1Visible(true);
            }
            if (studyNumber === 'study_2') {
                setBox2Visible(true);
                setBtn2Visible(false);
            } else if (studyNumber === 'study_2_hide') {
                setBox2Visible(false);
                setBtn2Visible(true);
            }
            if (studyNumber === 'study_3') {
                setBox3Visible(true);
                setBtn3Visible(false);
            } else if (studyNumber === 'study_3_hide') {
                setBox3Visible(false);
                setBtn3Visible(true);
            }
            if (studyNumber === 'study_4') {
                setBox4Visible(true);
                setBtn4Visible(false);
            } else if (studyNumber === 'study_4_hide') {
                setBox4Visible(false);
                setBtn4Visible(true);
            }
            if (studyNumber === 'study_5') {
                setBox5Visible(true);
                setBtn5Visible(false);
            } else if (studyNumber === 'study_5_hide') {
                setBox5Visible(false);
                setBtn5Visible(true);
            }
            if (studyNumber === 'study_6') {
                setBox6Visible(true);
                setBtn6Visible(false);
            } else if (studyNumber === 'study_6_hide') {
                setBox6Visible(false);
                setBtn6Visible(true);
            }
       }

        const cards = infoCards.map((p)=>{
            
            return(               
                <div className={`mapStudy ${eval(p.box) ? "" : "hidden"}`} key={p.id} id={p.id}>
                    <table>
                        <tbody>
                        <tr><td>Study Location: {p.location}</td></tr>
                        <tr><td>Source: {p.source}</td></tr>
                        <tr><td>Population studied: {p.population}</td></tr>
                        <tr><td>Intervention: {p.intervention}</td></tr>
                        <tr><td> Outcome: {p.outcome}</td></tr>
                        </tbody>
                    </table>

                    {/* Setting the state on the class is okay. Setting the button the box, not ok. */}
                    <div className="hideButton">
                        <button onClick={() => btnBoxChange(p.hideBox)}>Hide</button>
                    </div>
                    {/* <button>Hide</button> */}
                </div>
            )
        });
    
        return ( 
            <div id="mapContainer">
                <div id="mapOverlay"></div>
                <div id="mapTopBar">
                <h1>See the impact of masks in Global Studies</h1>
    
                <h3>The Effect of Mask Wearing on SARS-CoV-2 Infection Risk</h3>
                </div>
                <img id="worldMap" src={worldMap} alt="world map"/> 
                {/* <img id="mediaQueriesWorldMap" src={worldMap2} alt="world map" />
                <img id="mediaQueriesWorldMap2" src={worldMap3} alt="world map" /> */}
                <button id="study_1_btn" className={`mapButton ${btn1Visible ? "" : "hidden"}`} onClick={() => btnBoxChange('study_1')}>Canada</button>

                <button id="study_2_btn" className={`mapButton ${btn2Visible ? "" : "hidden"}`} onClick={() => btnBoxChange('study_2')}>USA</button> 
                <button id="study_3_btn" className={`mapButton ${btn3Visible ? "" : "hidden"}`} onClick={() => btnBoxChange('study_3')}>Germany</button>
                <button id="study_4_btn" className={`mapButton ${btn4Visible ? "" : "hidden"}`} onClick={() => btnBoxChange('study_4')}>China</button>
                <button id="study_5_btn" className={`mapButton ${btn5Visible ? "" : "hidden"}`} onClick={() => btnBoxChange('study_5')}>Thailand</button>
                <button id="study_6_btn" className={`mapButton ${btn6Visible ? "" : "hidden"}`} onClick={() => btnBoxChange('study_6')}>Guam</button>

                <div className="cards" >
                    {cards}
                </div>
                
                <div className="credit">
                <a href="https://jamanetwork.com/journals/jama/fullarticle/2776536">Source: Jama Network </a>
                <a  href="https://www.pngwing.com/en/free-png-zahef">Map from PNGWing</a>    
                </div>
            </div>
        )
    
};
 
export default InteractiveMap;