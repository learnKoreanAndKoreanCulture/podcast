import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import palace from './palace.png';
import location from './location.png';
import me from './me.png';
import arrowUp from './arrowUp.png'
import arrowDown from './arrow.png'
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


/* ---------------------FIRST TOP PAGE--------------------- */
class TitlePg extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="title-page container-fluid" id="Home">
                <div className="row">
                    <div className="title-wrapper col-12">
                        <h1 className="title">Learn Korean and Korean Culture</h1>
                        <h5 className="korean-title">한국어랑 한국의 문화를 배워보자!</h5>
                        <div className="row">
                            <span className="col-4"></span>
                            <span className="col-2"><button className="listen-button"><a href="https://linktr.ee/koreanPodcast" target="_blank">listen here</a></button></span>
                            <span className="col-2"><button className="episode-button"><Link to="/episodes">episodes</Link></button></span>
                            <span className="col-4"></span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="location-wrapper col-12 d-flex justify-content-center align-items-end">
                        <img src={location} className="location"></img>
                    </div>
                </div>

                <div className="row">
                    <div className="palace-wrapper col-12 d-flex justify-content-center">
                        <img src={palace} className="palace"></img>
                    </div>
                </div>
                <div class="arrow1">
                    <span class="arrowText">scroll down!</span>
                    <a href="#About"><img className="arrowDown1"src={arrowDown}></img></a>
                </div>
            </div>
        )
    }
}

/* ---------------------ABOUT PAGE--------------------- */
class About extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="page container-fluid" id="About">
                <div className="row">
                    <div className="title-wrapper col-12">
                        <h1 className="title">About</h1>
                        <h5 className="korean-title">자기소개</h5>
                    </div>
                </div>

                <div className="about-description row">
                    <div className="col-1"></div>
                    <div className="col-6 about-par">
                        <par>
                            <text className="kFont" style={{fontWeight:500}}>안녕하세요!</text> Hello!
                            <br></br><br></br>
                            I’m the creator and host of the podcast <text className="about-par-bold"><a target="_blank" href="https://anchor.fm/learn-korean-culture">Learn Korean and Korean Culture</a></text>.
                            <br></br><br></br>
                            This podcast is meant to help out all learners of Korean who hope to learn new vocabulary, improve listening skills, and immerse in the culture of South Korea.
                            <br></br><br></br>
                            I hope that this podcast will help you all in your language journey, and thanks for listening! <text className="kFont" style={{fontWeight:500}}>감사합니다!</text>
                        </par>
                    </div> 
                    <div className="col-5 me-img d-flex justify-content-center ">
                        <img src={me} className="me"></img>
                    </div>
                </div>
                <div class="arrow2">
                    <a href="#Home"><img className="arrowUp2"src={arrowUp}></img></a>
                    <div className="spacer5"></div>
                    <a href="#Resources"><img className="arrowDown2"src={arrowDown}></img></a>
                </div>
            </div>
        )
    }
}

/* ---------------------RESOURCES--------------------- */
class Resources extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="longerPage container-fluid" id="Resources">
                <div className="row">
                    <div className="title-wrapper col-12">
                        <h1 className="title">Resources</h1>
                        <h5 className="korean-title">중요한 링크들</h5>
                    </div>
                </div>

                <div className="cardWrapper row">
                    <div class="col-1"></div>
                    <div class="card col-10">
                        <div class="row card-inner-wrapper d-flex align-items-center">
                            <div class="col-9">
                                <h4><b>Support the Show</b></h4>
                                <p>Podcast episodes will ALWAYS be free!<br></br>But I do spend my own time and effort into this show, so if you can, please consider buying me a coffee or support me on anchor :))</p>
                            </div>
                            <div class="col-3"><button className="outline-button"><a href="https://ko-fi.com/learnkorean" target="_blank">support</a></button></div>
                        </div>
                    </div>
                    <div class="col-1"></div>
                </div>

                <div className="row"><div className="col-12 spacer5"></div></div>

                <div className="cardWrapper row">
                    <div class="col-1"></div>
                        <div class="card col-10">
                            <div class="row card-inner-wrapper d-flex align-items-center">
                                <div class="col-9">
                                    <h4><b>Suggest Episode Topics</b></h4>
                                    <p>Please fill out the google form linked in the right to suggest topics for episodes, as well as give me some feedback!</p>
                                </div>
                                <div class="col-3"><button className="outline-button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScOrmmBqJ5Ul2quaCYiV_whKPfwYVCQDDvuhJgBsh6PuasPbA/viewform?usp=sf_link" target="_blank">suggest</a></button></div>
                            </div>
                        </div>
                    <div class="col-1"></div>
                </div>

                <div className="row"><div className="col-12 spacer5"></div></div>

                <div className="cardWrapper row">
                    <div class="col-1"></div>
                        <div class="card col-10">
                            <div class="row card-inner-wrapper d-flex align-items-center">
                                <div class="col-9">
                                    <h4><b>Korean Music</b></h4>
                                    <p>I’ve compiled a list of popular korean songs and lyrics (in English/Korean/Romanization) for listeners who would like to start listening to Korean music. It’s a great way to build listening skills, so give it a try!</p>
                                </div>
                                <div class="col-3"><button className="outline-button"><a href="https://docs.google.com/document/d/13GiV140kcQNl3RqVOoKsvSJxq0YWaIxbmiCaBr3380k/edit?usp=sharing" target="_blank">k-music</a></button></div>
                            </div>
                        </div>
                    <div class="col-1"></div>
                </div>

                <div class="arrow3">
                    <a href="#About"><img className="arrowUp3"src={arrowUp}></img></a>
                </div>

                <div className="row"><div className="col-12 spacer5"></div></div>

            </div>
        )
    }
}


/* ---------------------TEMPLATE--------------------- */
class Template extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="title-page container-fluid">
                <div className="row">
                    <div className="title-wrapper col-12">
                        <h1 className="title">About</h1>
                        <h5 className="korean-title">나에 대해서</h5>
                    </div>
                </div>

            </div>
        )
    }
}


function HomeR() {
    return (

        <div>
        <TitlePg></TitlePg>
        <About></About>
        <Resources></Resources>
        </div>
    );
}



  const Home = () => (
    <div className='app'>
        <HomeR />
    </div>
  );


export default Home;