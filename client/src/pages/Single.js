import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
          <img src='https://images.unsplash.com/photo-1599836749388-44dadc4c3f74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2FrdHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        <div className='user'>
          <img src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80' alt='' />
          <div className='info'>
            <span>John</span>
            <p>Posted 3 days ago</p>
          </div>
        <div className='edit'>
          <Link to={`/write?edit=2`}>
           <img src={Edit} alt='' />
          </Link>
          <img src={Delete} alt='' />
        </div>
        </div>
      </div>
      <div className='menu'>m</div>
    </div>
  )
}

export default Single