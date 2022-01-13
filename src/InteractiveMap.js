import worldMap from './images/worldMap.png';
import maskStudies from './maskStudies.json';
import {useState} from 'react';

const infoCards = maskStudies.infoList;

const InteractiveMap = () => {
    
       const [boxVisible, setBoxVisible ] = useState(false);
       const [btnVisible, setBtnVisible] = useState(true);

    //    const [box1Visible, setBox1Visible] = useState(false);
    //    const [box2Visible, setBox2Visible] = useState(false);
    //    const [box3Visible, setBox3Visible] = useState(false);
    //    const [box4Visible, setBox4Visible] = useState(false);
    //    const [box5Visible, setBox5Visible] = useState(false);
    //    const [box6Visible, setBox6Visible] = useState(false);
       
    //    //Figure out what to pass as a parameter to fire properly.
    //    const btnBoxChange = () => {
    //         const boxVisibleArray = [box1Visible, box2Visible, box3Visible, box4Visible, box5Visible, box6Visible];
    //         const btnVisibleArray = [btn1Visible, btn2Visible, btn3Visible, btn4Visible, btn5Visible, btn6Visible];
    //    }

        const cards = infoCards.map((p)=>{
            return(
                <div className={`mapStudy ${!p.box ? "" : "hidden"}`} key={p.id} id={p.id}>
                    {console.log(`Point 1 box1Visible= ${box1Visible}`)}
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

                    {/* <button onClick={() => setBoxVisible(false) + setBtnVisible(true)}>Hide</button> */}
                    {/* <button>Hide</button> */}
                </div>
            )
        });
    
        return ( 
            <div id="mapContainer">
                <div id="mapTopBar">
                <h1>See the impact of masks in Global Studies</h1>
    
                <h3>The Effect of Mask Wearing on SARS-CoV-2 Infection Risk</h3>
                </div>
                <img src={worldMap} alt="world map" id="worldMap"/>
                <button id="study_1_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`}>Canada</button>
                {/* On click here needs to call a function, not just useState. It needs
                to pass a parameter to the function based on something within the button (probably just box1Visible, btn1Visible) */}

                {/* className ternary version */}
                {/* <button id="study_1_btn" className={`mapButton ${btnVisible ? "" : "hidden"}`}>Canada</button>  */}
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