import React, {Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import profilePic from '../Images/landingPagePic.jpg';

class Landing extends Component{
    render(){
        return(
            <div style ={{width : '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={profilePic}
                        alt="Profile Picture" className="landingPageCoverImage">
                        </img>

                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>Java |RestFul Web Services | Hibernate| HTML/CSS | jQuery| Gradle | Jenkins| SQL| BootStrap  |Java Script |React | Angular |Node Js|Express |Mongo DB</p>
                        {/* <div className="social-links">
                            <a href="http://google.com" target="_blank">
                                <i className="fa fa-linkedin-square" area-hidden ="true"></i>
                            </a>
                        </div> */}
                        </div>

                    </Cell>
                </Grid>
            </div>
        );
    }

}

export default Landing;