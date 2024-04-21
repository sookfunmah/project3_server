import React, { useState } from 'react'

import { dummyPosts } from '../data'

import PostItem from './PostItem'

const Posts = () => {
  const [posts,setPosts] = useState(dummyPosts)

  return (
    <section className='posts'>
      {posts.length > 0 ? <div className='container posts_container'>
      {
        posts.map(({id, thumbnail, category, title, description, authorID})=> <PostItem key={id} postID ={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}/>)
      }
      </div> : <h2 className='center'> No Posts Found</h2>}
    </section>
  )
}

export default Posts