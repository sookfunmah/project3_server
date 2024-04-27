import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/thumb1.jpeg'

const PostDetail = () => {
  return (
    <section className="post_detail">
      <div className='container post_detail_container'>
        <div className='postdetail_header'>
          <PostAuthor/>
          <div className='post_detail_buttons'>
            <Link to={`posts/admin/edit`} className='btn sm primary'> Edit</Link>
            <Link to={`posts/admin/delete`} className='btn sm danger'> Delete</Link>
          </div>
        </div>
        <h1> Testing title </h1>
        <div className='post_detail_thumbnail'>
          <img src={Thumbnail} alt="" />
        </div>
          <p> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem necessitatibus modi aut quis! Ab labore itaque nisi magnam eligendi ea a, facere veniam tenetur ad. Cumque magnam ea cupiditate?
          </p>
      </div>
    </section>
  )
}

export default PostDetail