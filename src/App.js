import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Right_Container from './Right_Container';
import Stories from './Stories';

 
function App() {
  const [posts, setPosts] = useState ([
    {
      username: "Max",
      caption: "cool down",
      imageUrl: "https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg"
    },
    {
      username: "sterio",
      caption: "trying react",
      imageUrl: "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc="
    }
  ]);

  // useEffect (() => {
  //   db.collection('posts').onSnapshot(snapshot =>{
  //     //everytime a new post is added, this code gets fire
  //     setPosts(snapshot.docs.map(doc => doc.data()))
  //   })
  // }, []);

  return (
   <>
    <div className="app">      
      <div className="app__header">
      <img
      className="app__headerImage"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt="" 
      />
      <div className="login__container">
      <input className="search" type="text" placeholder="Search"/>
      <HomeIcon sx={{ ml: 15 }}/> 
      <ChatIcon sx={{ ml: 2 }} />
      <ExploreOutlinedIcon sx={{ ml: 2 }}/>
      <FavoriteBorderOutlinedIcon sx={{ ml: 2 }}/>
      <AccountCircleIcon sx={{ ml: 2 }}/>
        </div>
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl= {post.imageUrl} />
        ))
      }
    </div>
        <Right_Container/>
        <Stories/>
    </>
  )
}

export default App;
