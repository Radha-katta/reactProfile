import React, {Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profilePic from '../Images/profilePic.jpg';
class Contact extends Component{

    constructor(props)
    {
        super(props);
        if (window.performance) {
            if (performance.navigation.type == 1) {
              alert( "This page is reloaded" );
            } else {
              alert( "This page is not reloaded");
            }
          }
    }
    render(){
        return(
            <div className="conatct-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Radha Sudheshna Katta</h2>
                        <img src={profilePic} alt="Avatar" style={{height:'200px'}}></img>
                         <p style={{width: '75%', margin:'auto', paddingTop:'1em'}}>
                         Accomplished, focused and quick learning software engineer with 6.5 years of 
                            experience in developing efficient scalable software systems with appealing user interfaces.
                            </p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}} >
                                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                                    +1 548-333-2763
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                 <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}} >
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    kradha.kradha@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily:'Anton'}} >
                                    <i className="fa fa-skype" aria-hidden="true"></i>
                                    radha katta
                                </ListItemContent>
                            </ListItem>
                        </List>


                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        );
    }

}

export default Contact;