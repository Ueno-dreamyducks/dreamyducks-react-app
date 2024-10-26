import './Header.css'
import React from 'react';

function Header() {
    return(
        <div className="Header">
            <p className='noto-sans-normal'>dreamyducks</p>
             <a className='noto-sans-normal' href="/About">About</a>
             <a className='noto-sans-normal' href="/Projects">Projects</a>
        </div>
    )
}

export default Header;
