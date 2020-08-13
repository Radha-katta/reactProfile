import React, {Component } from 'react';

import {Grid, Cell,Card, CardTitle,  CardText, CardActions,Button } from 'react-mdl';

class Projects extends Component{
    render(){
        return(

            <div>
                <Grid>
                <Cell col={6}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle className="myECommerceCover"></CardTitle>
                        <CardText className='myCoverText'>It is an E-Commerce application which helps customers
                         to add products carts and order it based on login.It is a MEAN Stack app.
                         It is based on Angular, Express, Mongo DB</CardText>
                        <CardActions border>
                            <Button colored href='https://mean-stack-heroku.herokuapp.com/'>Live Demo</Button>
                        </CardActions>
                    </Card>
                </Cell>
                <Cell col={6}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle className="myD3Cover"></CardTitle>
                        <CardText className='myCoverText'>It is a Dashboard which helps to country's population in graphical format using d3
                         It is based on React and d3.js</CardText>
                        <CardActions border>
                            <Button colored href='https://d3-heroku.herokuapp.com/'>Live Demo</Button>
                        </CardActions>
                    </Card>
                </Cell>

                    <Cell col={6}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle className="myHtmlCover"></CardTitle>
                        <CardText className='myCoverText'>It is based on Furniture shop which helps customers
                         to select their designers and designs based on their interest.
                         It is based on HTML/CSS</CardText>
                        <CardActions border>
                            <Button colored href='https://responsiveweb-ce34f.firebaseapp.com' >Live Demo</Button>
                        </CardActions>
                    </Card>
                    </Cell>
                    <Cell col={6}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle className="myJSCover"></CardTitle>
                        <CardText className="myCoverText">
                           It is online gift delivery application which helps customers to purchase gifts of their selection via online.
                           It is based on backbone JS.
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://eventmanagement-77ae4.firebaseapp.com' >Live Demo</Button>
                        </CardActions>
                    </Card>
                    </Cell>
                </Grid>
            </div>
        );
    }

}

export default Projects;
