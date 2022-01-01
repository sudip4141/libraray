import { Link } from 'react-router-dom'
import './content.css';
import './media.css';
//import image from './images/1.jpg';
import arrow from './images/arrow.png';
import arrowHover from './images/arrowHover.jpg';
import { useState } from 'react';
function Content(){
    const [over, setOver] = useState(true);
    const [over1, setOver1] = useState(true);
const mouseOver=()=>{
    setOver(false);
}
const mouseLeave=()=>{
    setOver(true);
}
const mouseOver1=()=>{
    setOver1(false);
}
const mouseLeave1=()=>{
    setOver1(true);
}

const cssStyle={};
const cssStyle2={};
    
cssStyle.backgroundImage="url('https://americanlibrariesmagazine.org/wp-content/uploads/2016/01/digital-librarian.jpg')";
cssStyle.transition="1s linear";
cssStyle2.backgroundImage="url('https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300')";
cssStyle2.transition="1s linear";
    
    
    return(
        <>
        <div className='content'>
            <div className="container">
            <div className="row">
                <div className="col-6 col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 left pe-5">
                
                <img src={over ? arrow : arrowHover} className="image_box" onMouseOver={mouseOver} onMouseLeave={mouseLeave} className="w-50 h-75" alt=''></img>
                {/*<img src={image}></img>*/}
            
                <Link to={'/libraray/user'} className='link'> <h1 className='text-light'>User</h1></Link>

                </div>
                <div className="col-6 col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 left ps-5">
                    <div className="w-50 h-75 box"    style={over1? cssStyle : cssStyle2} onMouseOver={mouseOver1} onMouseLeave={mouseLeave1}></div>
                    <Link to={'/libraray/librarian'} className='link'> <h1 className='text-light'>Librarian</h1></Link>
                    </div>
            </div>

            </div>
            </div>
        </>
    );
}
export default Content;