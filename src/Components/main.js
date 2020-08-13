import React from 'react';
import Landing from './landingpage';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';


import { createBrowserHistory } from "history";

export const appHistory = createBrowserHistory();
const Main = () => (
    <Switch  history={appHistory}>
        <Route exact path="/" component={Landing} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
    </Switch>
);



export default Main;