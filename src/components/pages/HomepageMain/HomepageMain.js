import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header.js'
import './HomepageMain.css';
import ddLogo from '../../../images/dd_Icon_removed_background.png'
import BBLogo from '../../../images/BBLogo_TransparentBackground.png'

function HomepageMain() {
    const navigate = useNavigate()

    const handleClick = (link) => {
        navigate(link);  
    }

    return(
        <div className="HomepageMain">
            <Header />
            <div className='HomepageMainBody'>
                <div className="LogoContainer">
                    <p className="nunito-normal">dreamyducks</p>
                </div>
                <div className='ProjectsContainer'>
                    <Card name="BloomBoard" />
                    <Card name="EQL" onClick={() => handleClick('/projects/EQL')}/>
                </div>
            </div>  
        </div>
    )
}

export default HomepageMain;

function Card(props) {
    return(
        <div className='Card' onClick={props.onClick}>
            <img src={ddLogo}></img>
            <p>{props.name}</p>
        </div>
    )
}