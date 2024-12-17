import React from 'react'
import { FaChevronRight } from 'react-icons/fa';



const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="sections">
                            <div className="section" style={{ margin: '0 0 30px 0;', width: '25%;' }}>
                                <h3>Lumia</h3>
                                <p>
                                    A108 Adam Street <br></br>
                                    New York, NY 535022<br></br>
                                    United States <br></br><br></br>
                                    <strong>Phone:</strong> +1 5589 55488 55<br></br>
                                    <strong>Email:</strong> info@example.com<br></br>
                                </p>
                            </div>

                            <div className="section2" style={{ margin: '0 0 30px 0;', width: '16%;' }}>
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Home</a></li>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">About us</a></li>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Sevices</a></li>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Terms of service</a></li>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Privacy policy</a></li>

                                </ul>
                            </div>

                            <div className="section-3" style={{ marginBottom: '30px', width: '25%' }}>
                                <h4>Our Services</h4>
                                <ul>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Web Design</a></li>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Web Development</a></li>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Product Management</a></li>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Marerting</a></li>
                                    <li><FaChevronRight style={{ fontSize: '12px', color: '#3498db', paddingRight: '2px', fontWeight: '400' }} /> <a href="">Graphic Design</a></li>

                                </ul>
                            </div>

                            <div className="section4" style={{ fontSize: '15px', width: '33%' }}>
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email"></input>
                                    <input type="submit" value="Subscribe"></input>
                                    </form>
                                    </div>
                            </div>

                        </div>
                    </div>
                </div>


            </>
            )
}

            export default Footer
