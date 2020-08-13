import React from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/main';

import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title={<Link style={{textDecoration:'none', color:'white'}} to="/">
          My Portfolio</Link>} scroll className='header-colour'>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Conatct</Link> 
                {/* <Link to="/aboutme">About Me</Link> */}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">
          My Portfolio</Link>}>
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Conatct</Link> 
                {/* <Link to="/aboutme">About Me</Link> */}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
