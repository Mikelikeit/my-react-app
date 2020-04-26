import React from 'react';
import styles from './Post.module.css'

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div>
                <div>
                    <img src='https://sun9-38.userapi.com/c624816/v624816485/17081/PYOBVBCK1Vo.jpg'/>
                    {props.message}
                </div>
                <div>
                    {props.likesCount}
                </div>

            </div>
           
        </div>
    );
}

export default Post;