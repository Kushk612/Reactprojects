import React, { Component } from 'react';
import '../App.css';
import {FaStudiovinari} from "react-icons/fa";

export class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="logo">
                    <img alt="Sky Infotech" src="data:image/png;base64,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"></img>
                     </div>
                <article>
                    <h1><FaStudiovinari className="sakti" style={{width:"100px"}}/><br/>Namaste! Welcome to Sky Infotech!</h1><br/>
                    <h3>“All birds find shelter during a rain. But eagle avoids rain by flying above the Clouds.
                    Problems are common,but attitude makes the difference!!!”</h3>
                    <h5 style={{position:"absolute", right:"50px"}}>— Dr. A. P. J. Abdul Kalam</h5>
                    <div className="content">
                    <p>We are an Indian IT solutions provider driven by strong work values and a problem solving approach! We are a dedicated team of innovative, experienced and committed IT experts with a passion to deliver cost effective but high standard IT solutions to enable our clients derive their business value.
                    With a strong belief on deep-rooted Indian values of trust; we aspire to become a robust pillar for our clients. We do not believe in transactional attitude; but rather in building a long-term sustainable relationship with our clients.
                    Our sole purpose of existence is to make our clients grow by effectively utilizing the power of technology.</p>
                    </div>
                    <h1>WHAT WE DO</h1>
                    <p style={{marginTop:"10px"}}>Building Apps that fulfill client requirements in a timely fashion.</p>
                </article>
                <main>
                    <div className="material"><h2>UI/UX/Angular/React Frontend Development</h2>
                    <p>Enhancing customer satisfaction and loyalty by improving the usability and interface.<br></br>
                    <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">To know more</a>    
                    </p></div>

                    <div className="material"><h2>REST API/ NodeJS/MeteorJS Backend Development</h2>
                    <p>Create microservices, REST api and backend for your app, be it mobile, iot or web app.<br></br>
                    <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">To know more</a>
                    </p></div>

                    <div className="material"><h2>Mobile App / React Native App Development</h2>
                    <p>Applications developed specifically for use on small, wireless computing devices.<br></br>
                    <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">To know more</a>
                    </p></div>

                    <div className="mater"><h2>Augmented Reality / Virtual TryON Applications</h2>
                    <p>Want to make your customer get the real feel of your products despite being in the virtual environment.<br></br>
                    <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">To know more</a>
                    </p></div>

                    <div className="mater"><h2>Internet Of Things / Serverless Application Developement</h2>
                    <p>Looking to go serverless or Internet of Things Development, please check our services in more details.<br></br>
                    <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">To know more</a>
                    </p></div>

                    <div className="mater"><h2>ICO/ Smart Contracts / Blockchain Development</h2>
                    <p>Jack Solutions is a maestro in providing an all-encompassing development support for ICO, smart contracts and Blockchain deployment.<br></br>
                    <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">To know more</a>
                    </p></div>
                </main>
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

export default Home;
