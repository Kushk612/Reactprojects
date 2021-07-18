import React, { Component } from 'react';
import '../App.css';

export class Careers extends Component {
    render() {
        return (
            <div className="Careers">
                {/* <h1>welcome!!</h1> */}
                <menu>
                <nav>
                    <ul><li className="active">For web
                        <div className="web">
                            <ul><li>Nodejs Developers</li></ul>
                            <ul><li>Angular Developers</li></ul>
                            <ul><li>React Developers</li></ul>
                            <ul><li>MEAN Stack Developers</li></ul>
                            <ul><li>Electron Developers</li></ul>
                            <ul><li>MeteorJS Developers</li></ul> 
                        </div>
                        </li></ul>
                    <ul><li>For Mobile
                        <div className="web">
                        <ul><li>React Native Developers</li></ul>
                        <ul><li>Cross Platform Native App Developers</li></ul>
                        <ul><li>Cross Platform App Developers</li></ul>
                        <ul><li>Augmented Reality Developers</li></ul>
                        <ul><li>Ionic Developers</li></ul> </div>
                        </li></ul>
                    <ul><li>For IOT
                        <div className="web"> <ul><li>Raspberry Pi Developers</li></ul>
                        <ul><li>Internet of Things Developers</li></ul>
                        <ul><li>Node-RED Developers</li></ul>
                        <ul><li>AWS Lambda Developers</li></ul>
                        <ul><li>Chat BOT Developers</li></ul> 
                        </div>
                        </li></ul>
                    <ul><li>For Blockchian
                        <div className="web"><ul><li>BlockChain Developers</li></ul>
                            <ul><li>Smart Contract Developers</li></ul>
                            <ul><li>Hyperledger Developers</li></ul>
                            <ul><li>Wallet Developers</li></ul>
                            <ul><li>ICO Developers</li></ul> 
                        </div>
                        </li></ul>
                </nav>
                </menu>
                <form>
                    <p>
                        <h2>MORE PRODUCTIVITY GUARANTEED WITH SKYINFOTECH SOLUTIONS.</h2>
                        <h3>Our expert developers have been playing key role in speeding up agile development of more than 1000+ products</h3>
                        <div className="smallbit">
                            <b>500+</b>
                            <i>Satisfied customers on platform</i></div>
                        <div className="smallbit">
                            <b>22+</b>
                            <i>Expert Developers working and counting</i></div>
                        <div className="smallbit">
                            <b>13+</b>
                            <i>Bespoke solutions provided with industry standards</i></div>
                    </p>

                    <div className="formcontent">
                        <input type="text" placeholder="John doe"></input>
                        <input type="email" placeholder="abc@gmail.com"></input>
                        <input type="phone" placeholder="+91 821 887 3262"></input>
                        <select>
                            <option>React Frontend Development</option>
                            <option>REST API/ NodeJS/MeteorJS Backend Development</option>
                            <option>Mobile App / React Native App Development</option>
                            <option>Augmented Reality / Virtual TryON Applications</option>
                            <option>Internet Of Things / Serverless Application Developement</option>
                            <option>ICO/ Smart Contracts / Blockchain Development</option>
                        </select>
                        <input type="submit" placeholder="submit"></input>
                    </div>
                </form>

                <footer>
                <div className="lastcontent">
                <div className="contact"><h2>CONTACT</h2>
                Phone: +91-9867888835<br></br>
                Email: abc@gmail.com<br></br>
                Address: A-50, Block A, Sector 64, Noida, Uttar Pradesh 201301</div>

               <div className="Subscribe"> <h2>SUBSCRIBE</h2>
                Get monthly updates and new developments straight to your inbox email address<br></br></div>

                <div className="Skyinfotech">
                <h2>Skyinfotech Solutions</h2>
                Copyright © 2018 Skyinfotech Solutions Pvt Ltd, All Rights Reserved.
                Privacy Policy Sitemap</div>
                </div>
                </footer>
            </div>
        )
    }
}

export default Careers
