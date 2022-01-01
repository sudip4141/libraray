//import react from "react";
import './library.css';
import login_image from './images/login.png';
const Librarian=()=>{
    return(
        <div className="library">
<div className="container">
    <div className="row">
    <div className="col-6 col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 left">
            <h1 className='pb-5 pe-4'>Library</h1>
                <img src={login_image} className='w-75 h-50'></img>
                </div>
                <div className="col-6 col-lg-6 col-md-6 col-xl-6 col-sm-12 col-xs-12 right">
                <form>
                <div className="inpuut">
            <input type="text" id="name" autocomplete="off" required></input>
            <label>Username</label>
        </div>
        <div className="inpuut">
            <input type="text" id="name"  autocomplete="off" required></input>
            <label>Password</label>
                
                </div>
                </form>
    </div>
</div>
        </div>
        </div>
    );
}
export default Librarian;