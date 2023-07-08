import React from 'react'
import ReactDOM from 'react-dom'
import { Outlet, Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./styleLayout.css";


const Layout = () => {

  return (
    <>
    <nav className="navbar bg-white navbar-expand-lg fixed-top ">
      <div className="container-fluid">
        <img src={require('./logo2.png')} alt="MOVREACT "></img>

        <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active m-2"
                aria-current="page"
                style={{fontSize: 20}}
              >
                <Link to="/">HOME</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2"
              style={{fontSize: 20}} >
              <Link to="/films">FILMS</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2"
              style={{fontSize: 20}}>
              <Link to="/watchList">WatchList</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-2"
              style={{fontSize: 20}}>
              <Link to="/forum">Forum</Link>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link m-2"
              style={{fontSize: 20}}>
              <Link to="/user">User</Link>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link m-2"
              style={{fontSize: 20}}>
              <Link to="/contribution">Contribution</Link>
              </a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
    {/* <div style={{ 
      backgroundImage: `url("https://via.placeholder.com/500")` 
    }}>
      Hello World
    </div> */}

 
    <Outlet/>


    </>
  )
};

export default Layout;

{/* <form className="d-flex" role="search">
<input
  className="form-control me-2"
  type="search"
  placeholder="Search"
  aria-label="Search"
/>
<button className="btn btn-outline-success" type="submit">
  Search
</button>
</form> */}