import { AccountCircle, Newspaper, PhotoSizeSelectActualOutlined, SmartDisplay} from '@mui/icons-material'
import EventIcon from '@mui/icons-material/Event'
import React, { useEffect } from 'react'
import './Feed.css'

import { createPost } from './features/firebase/db/postsCollection';
import { useState } from 'react';
import { db } from './features/firebase/firebaseApp';

// Icons

function Feed({accountImg}) {

    const [content, setContent] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {

            setPosts(snapshot.docs.map(doc => (
                {
                  id: doc.id,
                  data: doc.data(),
                }
              ))
              )

      })

    }, [])

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


        <div>
                {
                posts?.map(post => {
                    return (
                    <p key={post.id}>{post.data.content}</p>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Feed