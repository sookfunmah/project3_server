import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Avatar1 from '../images/avatar1.jpeg'
import Avatar2 from '../images/avatar2.jpeg'
import Avatar3 from '../images/avatar3.jpeg'

const membersData = [
  {id:1, avatar: Avatar1, name: 'Sheldon Cooper', posts: 3},
  {id:2, avatar: Avatar2, name: 'John Doe', posts: 0},
  {id:3, avatar: Avatar3, name: 'Jane Doe', posts: 0},
]

const Members = () => {
  const [members, setMembers] = useState(membersData)
  return (
    <section className='members'>
      {members.length > 0 ? <div className='container members_container'>
        {
          members.map(({id, avatar, name, posts}) => {
            return <Link key = {id} to = {`/posts/users/${id}`} className='member'>
              <div className='members_avatar'>
                <img src={avatar} alt={`Image of ${name}`} />
              </div>
              <div  className='members_info'>
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
        }
      </div> : <h2 className='center'> No User/Members found</h2>}
    </section>
  )
}

export default Members