import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({ username, caption, imageUrl}) {
    return (
        
        <div className="post">
            <div className="post__header">
             <Avatar
            className="post__avatar"
            alt={username}
            src="/static/images/avatar/1.jpg"
            />
            <h3>{username}</h3>
            {/* header ->avatar + image */}
            </div>

            <img className="post__image"
            src= {imageUrl}
            alt=""/>

            <FavoriteBorderIcon  sx={{ml: 2}}/>
            <CommentIcon sx={{ml: 1}}/>
            <ShareIcon sx={{ml: 1}}/>
            <BookmarkBorderIcon sx={{ml: 42}}/>

            {/* image */}
            <h4 className="post__text">  <strong>{username} </strong> {caption}</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post

