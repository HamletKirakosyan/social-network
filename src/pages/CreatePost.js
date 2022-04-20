import { useState, useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { auth, db } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


export default function CreatePost({isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title, 
      postText, 
      author:{name: auth.currentUser.displayName, id: auth.currentUser.uid}});
      navigate("/");
  };

  useEffect(() => {
    if(!isAuth) {
      navigate("/login");
    }
  }, [])
  

  return (
    <div className='createPostPage'>
      <div className="upContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label htmlFor="">Caption</label>
          <input 
            type="text" 
            placeholder='Caption...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputGp">
        <label htmlFor="">Post...</label>
          <textarea name="" id="" cols="30" rows="10"
            placeholder='Write a something...'
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>
        <button onClick={createPost}>Submit</button>
      </div>
    </div>
  )
}
