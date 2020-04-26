import React from 'react';
import styles from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DItems";
import MessagesItems from "./MessagesItems/MessgaesItems";


const Dialogs = (props) => {


    let dialogElement = props.dialogs
        .map(d => <DialogsItems name={d.name} id={d.id}/>)

    let messageElement = props.messages
        .map(m => <MessagesItems message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef()

    let onAddMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage()

    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogElement}
            </div>
            <div className={styles.messages}>
                {messageElement}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={onAddMessage}>Send message</button>
            </div>
        </div>

    );
}

export default Dialogs;