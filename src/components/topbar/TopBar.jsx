import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css'

function TopBar() {
  const user=false;
  return (
    <>
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className=" topIcon fa-brands fa-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter"><ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/" >HOME</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/" >ABOUT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/" >CONTACT</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/write" >WRITE</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/" >
              {user && "LOGOUT"}
            </Link>
            </li>
            </ul>
            </div>
        <div className="topRight">
          {user?(<img className="topImg"
        src="https://avatars.githubusercontent.com/u/106726718?s=400&u=c39505fe7f524197eb5b0d7761fe20b801ffae53&v=4"
        alt=""
        />):(
          <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        
        <i class=" topSearchIcon fas fa-search"></i></div>
    </div>
    </>
  )
}

export default TopBar