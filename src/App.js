
import { Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home  from './components/Home';
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import { FaTwitterSquare ,FaGithub, FaLinkedin
  // ,FaPinterestSquare,FaSnapchatSquare,FaTumblrSquare,FaTelegramPlane,FaWhatsappSquare
  ,FaInstagramSquare,FaFacebookSquare} from "react-icons/fa";
  import Careers from './components/Careers';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1 className="welcome" style={{textAlign:"center"}}>Welcome</h1>
      {/* <Home></Home> */}
      {/* <About></About> */}
      <Router id="new">
        <Route path="/Home" component={Home}/>
        <div className="left_icons">
          <ul>
          <li style={{listStyle:"none"}}><NavLink to="/Home" style={{color:"skyblue",textDecoration:"none"}}>Home</NavLink></li>
          </ul>
        </div>

        <Route path="/About" component={About}></Route>
        <div className="middle_icons">
          <ul>
          <li style={{listStyle:"none"}}><NavLink to="/About" style={{color:"skyblue",textDecoration:"none"}}>About</NavLink></li>
          </ul>
        </div>

        <Route path="/Careers" component={Careers}></Route>
        <div className="middle1_icons"> 
          <ul>
          <li><Link to="/Careers" style={{color:"skyblue",textDecoration:"none"}}>Careers</Link></li>
          </ul>
      </div>
        <Route path="/Contact" component={Contact}></Route>
        <div className="right_icons"> 
          <ul>
          <li><Link  to="/Contact" style={{color:"skyblue",textDecoration:"none"}}>Contact</Link></li>
          </ul>
        </div>   
      </Router>

      
      <div className="Registration">
          <span>
            <h1>Welcome to SkyInfotech!!</h1>
            <h4>React Frontend Development</h4>
            <h4>REST API/ NodeJS/MeteorJS Backend Development</h4>
            <h4>Mobile App / React Native App Development</h4>
            <h4>Augmented Reality / Virtual TryON Applications</h4>
            <h4>Internet Of Things / Serverless Application Developement</h4>
            <h4>ICO/ Smart Contracts / Blockchain Development</h4>
          </span>

        </div>
        <footer>
          <div className="logos">
          <h2>Skyinfotech Solutions</h2>
                Copyright © 2018 Skyinfotech Solutions Pvt Ltd, All Rights Reserved.<br/>
                Privacy Policy Sitemap
            <div className="icons">
              <ul><li><FaTwitterSquare/></li></ul>
              <ul><li><FaLinkedin/></li></ul>
              <ul><li><FaFacebookSquare/></li></ul>
              <ul><li><FaGithub/></li></ul>
              <ul><li><FaInstagramSquare/></li></ul></div>
            </div>
        </footer>
    </div>
  );
}

export default App;
