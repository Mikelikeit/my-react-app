import React from 'react';
import styles from '../Dialogs.module.css'

const MessagesItems = (props) => {
    return (
        <div className={styles.messageItem}>
            <div>{props.message}</div>
        </div>
    )
}

export default MessagesItems