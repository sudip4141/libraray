
//import react from "react";
//import reactDom from "react-dom";
import './head.css';
function Head(){
return(
  <>
  <div className="head">
 <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <img src="https://media.istockphoto.com/vectors/book-education-template-vector-id1271339527?b=1&k=20&m=1271339527&s=612x612&w=0&h=xHKyhgqiAYnb_Q8jE6G22qqWXexSILaokxzqd4i8x9E=" className="logo ms-5" alt=''></img>
    <a className="navbar-brand ps-3" href="#">Library</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-5">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
</>
);
}
export default Head;