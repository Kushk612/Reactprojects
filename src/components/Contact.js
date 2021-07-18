import React, { Component } from 'react'
// import {logo} from "../images/logo.png";
import '../App.css';

export class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = () =>{
            alert("Added Successfully")
        }
    }
    render() {
        return (
            <div className="Contact"> 
               <img className="logo" alt="logo" style={{position:'absolute', left:'200px', top:'55%',borderRadius:'1000px'}} width="200px" src="https://i.pinimg.com/originals/89/f6/d8/89f6d83268c3220a06253acb858706b8.png"></img>
                <div className="Keepintouch">
                <h1>Keep in Touch</h1> 
                    <input className="field" type="text" placeholder="Enter Your name"></input>
                    <input className="field" type="email" placeholder="Enter Your Email"></input>
                    <input className="field"  type="phone" placeholder="Enter Your Phone no."></input>
                    <textarea type="text" placeholder="Suggestions please"></textarea>
                    <a href="./Home"><input type="submit" onClick={this.state}></input></a>
                </div>
                        
                <footer>
                    <div className="lastcontent">
                        <div className="contact"><h2>CONTACT</h2>
                        Phone: +91-9867888835<br></br>
                        Email: abc@gmail.com<br></br>
                        Address: A-50, Block A, Sector 64, Noida, Uttar Pradesh 201301</div>

                        <div className="Subscribe"> <h2>SUBSCRIBE</h2>
                            Get monthly updates and new developments straight to
                            your inbox email address<br></br></div>

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

export default Contact
