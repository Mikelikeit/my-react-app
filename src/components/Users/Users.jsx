import React from "react";
import cn from "classnames";
import styles from './Users.module.css'
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
                className={cn(styles.page, { [styles.selectPage]: props.currentPage === i })}
                onClick={handlePageClick}>
                {i}
            </span>
        );
    }

    return (
        <div>
            { /** TODO: Даже если стилей нет, то класс все равно нужен */ }
            <div className={styles.pagesList}>
                {pages}
            </div>

            {props.users.map(u => <div key={u.id}>
                <div className={styles.users}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} />
                </div>
                <div>
                    {
                        /* TODO: Тут в цикле создаются анонимные функции == просадка производительности */
                        /* нужно сделать анадогично handlePageClick и передать параметры через data-атрибуты */
                        u.followed ?
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            :
                            <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                    }
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
    );
}

export default Users



