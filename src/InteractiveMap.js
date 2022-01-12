import worldMap from './images/worldMap.png';
import maskStudies from './maskStudies.json';
const infoCards = maskStudies.infoList;

const InteractiveMap = () => {
    
        const test = infoCards.map((p)=>{
                return(
                    <div className="mapStudy" key={p.id} id={p.id}>  
                        <table>
                            <tr><td>Location: {p.location}</td></tr>
                            <tr><td>Source: {p.source}</td></tr>
                            <tr><td>Population studied: {p.population}</td></tr>
                            <tr><td>Intervention: {p.intervention}</td></tr>
                            <tr><td> Outcome: {p.outcome}</td></tr>
                        </table>
                    </div>
                )
            });
        
        return ( 
            <div id="mapContainer">
                <h1>The Effectiveness of Masks</h1>
    
                <h3>Global Studies on the Effect of Mask Wearing against SARS-CoV-2 Infection Risk</h3>
                
                <img src={worldMap} alt="world map" id="worldMap"/>
                <button  className='mapTestButton'>Canada</button>

                <div className="testTable" >
                    {test}
                </div>
                
                <a href="https://commons.wikimedia.org/w/index.php?curid=4121338">Map art by Gaaarg</a>    
            </div>
        )
    
};
 
export default InteractiveMap;