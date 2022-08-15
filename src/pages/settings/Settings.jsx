import './settings.css'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

function Settings() {
  return (
    <div className="settings">
        <div className="settingWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteTitle">Delete account</span>
            </div>
            <form action="" className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://wallpapercave.com/wp/wp2688882.jpg?auto-compress&cs-tinysrgb&dpr-2&w-500"alt=""/>
                    <label htmlFor="fileInput">
                    <i className=" settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Safak"/>
                <label>Email</label>
                <input type="email" placeholder="safak@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings