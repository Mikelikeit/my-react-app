import React from "react";
import cn from "classnames";
import s from './Users.module.css'
import userPhoto from '../../assets/images/images.png'

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const handlePageClick = e => {
        const { pageId } = e.target.dataset;
        e.preventDefault();
        pageId && props.onPageChanged(Number(pageId));
    }
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(
            <span
                key={`page_${i}`}
                data-page-id={i}
                className={cn(s.page, { [s.selectPage]: props.currentPage === i })}
                onClick={handlePageClick}>
                {i}
            </span>
        );
    }

    return <div>
        <div>
            {pages}
        </div>

        {props.users.map(u => <div key={u.id}>
            <div className={s.users}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
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



