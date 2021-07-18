import React, { Component } from 'react';
import '../App.css';
import {FaCannabis,FaClock} from "react-icons/fa";

export class About extends Component {
    render() {
        return (
            <div className="About">
               <div className="pic"> 
                   <h1><FaCannabis className="sakti"/><br/>About Skyinfotech</h1>
                    <p>We have dedicated ourselves to offering our customers a seamless and thrilling gaming experience while you are on the go. We aim to provide an exceptional and fully customizable online betting experience.</p>
               </div>

                <div className="functionalites">
                     <div className="quotes"><h2><FaClock className="sakti"/>“Technology is a word that describes something that doesn’t work yet.”</h2>
                    <h5>– Douglas Adams</h5>  
                    </div>
                    <div className="roles">
                        <h1>Full Responsabilites</h1>
                        <p>We take our responsibilities to customers and our other stakeholders seriously and place great emphasis on working to a ‘compliance first’ model across the business</p>
                    </div>
                    <div className="roles">
                        <h1>Regulated Markets</h1>
                        <p>We only operate in regulated markets where we hold the appropriate licenses.</p>
                    </div>
                    <div className="roles">
                        <h1>Credible and Responsible</h1>
                        <p>We do it in a credible and responsible way, always aiming for the top</p>
                    </div>

                    <div className="wedo">
                        <h1>What We Do?</h1>
                        <p>Since 2017 we have remained at the forefront of the online gambling industry, utilizing the very latest technologies to provide innovate and interactive gaming experiences in a secure environment. When customers bet on our site they can rest assured that they are getting a wide variety of betting options, up to date information and the best odds available. Our customers also have peace of mind, knowing that when it’s time to collect, they are betting with a well-known reputable company. We have integrated best and secured payment methods on our site and a transaction process that is quick, easy enabling our players to cash out their winnings quickly and securely.</p>
                    </div>

                </div>
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

export default About
