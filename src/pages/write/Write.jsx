import './write.css'
import React from 'react'

function Write() {
  return (
    <div className="write">
        <img className="writeImg"
        src="https://wallpapercave.com/wp/wp2688882.jpg?auto-compress&cs-tinysrgb&dpr-2&w-500"
        alt=""/>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput"><i class=" writeIcon fa-solid fa-plus"></i></label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write