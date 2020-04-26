import React from 'react';
import s from '../Dialogs.module.css'

const MessagesItems = (props) => {
    return (
        <div className={s.messageItem}>
            <div>{props.message}</div>
        </div>
    )
}

export default MessagesItems