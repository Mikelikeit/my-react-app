import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
        props.addPost()

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)


    }
    return (
        <div>

            <div className={styles.profile}>
                <div>
                    <div>
                        <img src='https://www.meme-arsenal.com/memes/85ea5e50b5d7cc992a728c20803814e9.jpg'/>
                    </div>
                    <div>
                        ava + description
                    </div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>

                </div>

            </div>
            <div className={styles.myposts}>
                <div>
                    {postElement}
                </div>

            </div>
        </div>
    );
}

export default MyPosts;