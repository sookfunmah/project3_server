import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar1.jpeg'

const PostAuthor = () => {
  return (
    <Link to= {`/posts/users/admin`} className='post_author'>
      <div className='post_author_avatar'>
        <img src={Avatar} alt ="" />
      </div>
      <div className='post_author_details'>
        <h5>By: Sheldon Cooper </h5>
        <small> Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor