import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'/>
            </div>
        </div>
    );
}

export default Header;