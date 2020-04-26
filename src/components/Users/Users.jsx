import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/images.png'

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span
                    key={p.id}
                    className={props.currentPage === p && styles.selectPage} onClick={() => {
                    props.onPageChanged(p)
                }}> {p}
                </span>
            })}

        </div>

        {props.users.map(u => <div key={u.id}>
            <div className={styles.users}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
            </div>
            <div>
                {u.followed ? <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>
                    : <button onClick={() => {
                        props.unFollow(u.id)
                    }}>Unfollow</button>}
            </div>
            <div>
                {u.name}
            </div>
            <div>
                {u.status}
            </div>
            <div>
                {"u.location.country"}
            </div>
            <div>
                {"u.location.city"}
            </div>


        </div>)}
    </div>
}


export default Users



