import { AccountCircle } from '@mui/icons-material'
import React from 'react'
import './Feed.css'

function Feed({accountImg}) {
  return (
    <div className='feed'>
        <div className='feed__new__post'>

            <div className='feed__post__content'>
                {
                    accountImg ?
                    <img className='feed__avatar' src={accountImg} alt="Profile" />
                    :
                    <AccountCircle fontSize='large' className='feed__avatar' />
                }

                <input type="text" placeholder='Start a post' />
            </div>

            <div class="feed__post__options">
                <ul>

                </ul>
            </div>

        </div>
    </div>
  )
}

export default Feed