import React from 'react'
import './header.css'

function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">NAINITAL</span>
            <span className="headerTitleLg">Blog</span>
        </div> 
        <img className="headerImg" src="https://images.unsplash.com/photo-1601622256416-d7f757f99eb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpbml0YWwlMkMlMjBpbmRpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
    </div>
  )
}

export default Header