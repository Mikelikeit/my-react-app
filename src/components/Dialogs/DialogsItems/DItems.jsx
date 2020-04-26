import React from 'react';
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css'


const DialogsItems = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <div>
                <img src='https://sun9-38.userapi.com/c624816/v624816485/17081/PYOBVBCK1Vo.jpg'/>
            </div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogsItems