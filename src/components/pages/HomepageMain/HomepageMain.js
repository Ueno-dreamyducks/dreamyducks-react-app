import React from 'react';
import Header from '../../Header.js'
import './HomepageMain.css';
import BBLogo from '../../../images/BBLogo_TransparentBackground.png'

function HomepageMain() {
    return(
        <div className="HomepageMain">
            <Header />
            <div className="LogoContainer">
                <p className="nunito-normal">dreamyducks</p>
            </div>
            <div className='ProjectsContainer'>
                <Card name="BloomBoard"/>
                <Card name="CountCount"/>
            </div>
        </div>
    )
}

export default HomepageMain;

function Card(props) {
    return(
        <div className='Card'>
            <img src={BBLogo}></img>
            <p>{props.name}</p>
        </div>
    )
}