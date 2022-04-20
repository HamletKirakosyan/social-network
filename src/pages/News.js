import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase-config';


export default function News({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");


  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})
      ));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  }

    return (
      <div className='homePage'>
          {postLists.map((post) => {
            return (
              <div key={post.id} className="post">
                <div className="postHeader">
                  <div className="title">
                    <h2>{post.title}</h2>
                  </div>
                  <div className="deletePost">
                    {isAuth && post.author.id === auth.currentUser.uid && (
                      <button 
                        onClick={() => {
                          deletePost(post.id)
                        }}>
                          &#128465;
                      </button>
                    )}
                  </div>
                </div>
                <div className="postTextContainer">
                  {post.postText}
                </div>
                <h5>@{post?.author?.name}</h5>
              </div>
            )
          })}
      </div>
    )
}
