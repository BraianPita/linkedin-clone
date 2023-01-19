import { AccountCircle, Newspaper, PhotoSizeSelectActualOutlined, SmartDisplay} from '@mui/icons-material'
import EventIcon from '@mui/icons-material/Event'
import React from 'react'
import './Feed.css'

// Icons


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
                    <span>
                        <PhotoSizeSelectActualOutlined style={{color: 'dodgerblue'}} />
                        Photo
                    </span>
                    <span>
                        <SmartDisplay style={{color: 'green'}} />
                        Video
                    </span>
                    <span>
                        <EventIcon style={{color: 'orange'}} />
                        Event
                    </span>
                    <span>
                        <Newspaper style={{color: 'red'}} />
                        Write article
                    </span>
            </div>

        </div>
    </div>
  )
}

export default Feed