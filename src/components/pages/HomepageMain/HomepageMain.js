import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Header.js'
import './HomepageMain.css';
import ddLogo from '../../../images/dd_Icon_removed_background.png';
import ProjectList from '../../../datas/Projects.js';

function HomepageMain() {
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(link);  
    }

    const exploreCardList = ProjectList.map(project =>
        <ExploreCard name={project.name} onClick={() => handleClick(project.redirect)} image={project.image} />
    );

    return(
        <div className="HomepageMain">
            <div className='HomepageMainBody'>
                <Header />
                <div className="LogoContainer">
                    <p className="nunito-normal">dreamyducks</p>
                </div>
                <div className='ProjectsContainer'>
                    <Card name="BloomBoard" />
                    <Card name="EQL" onClick={() => handleClick('/projects/EQL')}/>
                </div>
                <div className='ExploreContainer'>
                    {exploreCardList}
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

function ExploreCard(props) {
    return(
        <div className='ExploreCard' onClick={props.onClick}>
            <div className='contents' >
                <img src={props.image} />
                <p>{props.name}</p>
            </div>
        </div>
    )
}