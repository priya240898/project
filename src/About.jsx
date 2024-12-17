import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheckDouble,FaReceipt,FaCube  } from 'react-icons/fa';

const About = () => {
    return (
        <>

            <div className="About">
                <div className="container">
                    <div className="section-flex">
                        <div className="section">
                            <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/about.jpg" alt="" width={"100%"} height={"auto"} />
                        </div>
                        <div className="section">
                            <h3>About Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li><FaCheckDouble style={{ color: ' #3498db', marginRight: '10px' }} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><FaCheckDouble style={{ color: ' #3498db', marginRight: '10px' }} /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            </ul>
                            <div className="parts">
                                <div className="part">
                                <FaReceipt style={{ fontSize: '48px', color: ' #3498db' }} />
                                <h4>Corporis voluptates sit</h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                                <div className="part">
                                <FaCube style={{ fontSize: '48px', color: ' #3498db' }} />
                                <h4>Ullamco laboris nisi</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default About
