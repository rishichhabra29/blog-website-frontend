import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'

function Post() {
  return (
    <div>
        <img className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
                </span>
                <span className="postCat">
                <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
                </span>
            </div>
            <span className="postTitle">
            <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum pariatur magnam molestias, in possimus cupiditate maxime rem recusandae. Omnis accusamus ad aut culpa nam molestiae! Non iste expedita sapiente delectus vitae necessitatibus repellat.</p>
    </div>
  )
}

export default Post