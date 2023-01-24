import { AccountCircle, Newspaper, PhotoSizeSelectActualOutlined, SmartDisplay} from '@mui/icons-material'
import EventIcon from '@mui/icons-material/Event'
import React, { useEffect } from 'react'
import './Feed.css'

import { createPost } from './features/firebase/db/postsCollection';
import { useState } from 'react';
import { db } from './features/firebase/firebaseApp';

// Icons

const FeedPost = ({post}) => (
    <div className="feed__post">
        <div className="feed__post__header">

            {
                post.user.photoURL ?
                <img className='feed__avatar' src={post.user.photoURL} alt="Profile" />
                :
                <AccountCircle fontSize='large' className='feed__avatar' />
            }
            <div>
                <h4>{post.user.name}</h4>
                <p>{post.user.overview}</p>
            </div>

        </div>
        <div className='horizontal__separator'></div>
        <div className='feed__post__content'>
            <p>{post.content}</p>
        </div>
    </div>
);


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

            <div className='feed__new__post__content'>
                {
                    accountImg ?
                    <img className='feed__avatar' src={accountImg} alt="Profile" />
                    :
                    <AccountCircle fontSize='large' className='feed__avatar' />
                }

                <input name="content" value={content} onChange={e =>{setContent(e.target.value)}} type="text" placeholder='Start a post' />
            </div>

            <div className="feed__new__post__options">
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
                    <FeedPost key={post.id} post={post.data} />
                    )
                })
            }
        </div>

    </div>
  )
}

export default Feed