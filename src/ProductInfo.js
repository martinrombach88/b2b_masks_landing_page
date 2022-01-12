import productInfo from './productInfo.json';
import maskPic from './images/mask.jpg';
import prevCovidPic from  './images/prevCovidPic.png';
import highQualityPic from './images/highQualityPic.png';
import prodCapaPic from './images/prodCapaPic.jpg';
import costPic from './images/costPic.png';

const infoCards = productInfo.infoList;

const ProductInfo = () => { 
        return (
            <div id="productContainer">
                <div className="maskDiv">
                    <h1>Take care of your staff with the best KF60 masks</h1>
                    <img src={maskPic} alt="mask" id='maskPic'/>  
                </div>
            

                <div id='infoCards'>
                        {
                         
                            infoCards.map((p)=>{
                            let image = '';
                            if (p.id === 1) image = prevCovidPic;
                            else if (p.id === 2) image = highQualityPic;
                            else if (p.id === 3) image = prodCapaPic;
                            else if (p.id === 4)  image = costPic;
 
                                return(
                                    
                                    <div className="infoCardDiv" key={p.id}>  
                                        <img className='infoIcon' src={image} alt="icon" />
                                        <h3>{p.title}</h3>
                                        <p>{p.content}</p>
                                    </div>
                                )
                            })
                        }
                </div>


            </div> 
        )

}

export default ProductInfo;