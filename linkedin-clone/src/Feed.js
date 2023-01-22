import { AccountCircle, Newspaper, PhotoSizeSelectActualOutlined, SmartDisplay} from '@mui/icons-material'
import EventIcon from '@mui/icons-material/Event'
import React from 'react'
import './Feed.css'

import { createPost } from './features/firebase/db/postsCollection';
import { useState } from 'react';

// Icons

function Feed({accountImg}) {

    const [content, setContent] = useState("");

    const submitPost = (e) => {
        e.preventDefault();
    
        createPost({}, content);
    }


  return (
    <div className='feed'>
        <form onSubmit={submitPost} action='POST' className='feed__new__post'>

            <div className='feed__post__content'>
                {
                    accountImg ?
                    <img className='feed__avatar' src={accountImg} alt="Profile" />
                    :
                    <AccountCircle fontSize='large' className='feed__avatar' />
                }

                <input name="content" value={content} onChange={e =>{setContent(e.target.value)}} type="text" placeholder='Start a post' />
            </div>

            <div className="feed__post__options">
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

        </form>
    </div>
  )
}

export default Feed