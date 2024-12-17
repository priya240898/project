import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaMobileAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <>

            <div className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga</p>
                    </div>
                    <div className="section-flex">
                        <div className="section">
                            <div className="info">
                                <div className="flex">
                                    <div className="s1">
                                        <FaMapMarkerAlt style={{ fontSize: '20px', color: '#3498db', float: 'left', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: "center" }} />  <h4>Location:</h4>
                                        <p style={{ padding: '0 0 0 30px' }}>A108 Adam Street<br></br>New York, NY 535022</p>
                                    </div>

                                    <div className="s1">
                                        <FaEnvelope style={{ fontSize: '20px', color: '#3498db', float: 'left', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: "center" }} />  <h4>Email:</h4>
                                        <p style={{ padding: '0 0 0 30px' }}>info@example.com<br></br>contact@example.com</p>
                                    </div>

                                    <div className="s1">
                                        <FaMobileAlt style={{ fontSize: '20px', color: '#3498db', float: 'left', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: "center" }} />  <h4>Call:</h4>
                                        <p style={{ padding: '0 0 0 30px' }}>+1 5589 55488 51<br></br>+1 5589 22475 14</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form">
                        <div className="ff">
                            <div className="ff-info">
                                <div className="raw">
                                    <div className="name">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required=""></input>
                                    </div>
                                    <div className="mail">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required=""></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required=""></input>
                                </div>
                                <div className="form-group">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                                </div>
                               
                               

                            </div>
                            <div class="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                        </div>
                        

                    </div>
                </div>
            </div>






        </>
    )
}

export default Contact
