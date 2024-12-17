import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFolder,FaClipboardList,FaBuilding, FaBinoculars,FaSun ,FaCalendarAlt} from 'react-icons/fa';

const Service = () => {
    return (

        <>

            <div className="service">
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                    </div>
                    <div className="section-flex">
                        <div className="section">
                            <div class="icon-box">
                            <FaFolder style={{ fontSize: '40px', color: '#3498db',float:'left' }} />
                                <h4><a href="#">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>
                        </div>

                        <div className="section">
                            <div class="icon-box">
                            <FaClipboardList style={{ fontSize: '40px', color: '#3498db',float:'left' }} />
                                <h4><a href="#">Dolor Sitema</a></h4>
                                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                            </div>
                        </div>

                        <div className="section">
                            <div class="icon-box">
                            <FaBuilding style={{ fontSize: '40px', color: '#3498db',float:'left' }} />
                                <h4><a href="#">Sed ut perspiciatis</a></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                            </div>
                        </div>

                        <div className="section">
                            <div class="icon-box">
                            < FaBinoculars style={{ fontSize: '40px', color: '#3498db',float:'left' }} />
                                <h4><a href="#">Nemo Enim</a></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>

                        <div className="section">
                            <div class="icon-box">
                            <FaSun style={{ fontSize: '40px', color: '#3498db',float:'left' }} />
                                <h4><a href="#">Magni Dolore</a></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>

                        <div className="section">
                            <div class="icon-box">
                            <FaCalendarAlt style={{ fontSize: '40px', color: '#3498db',float:'left' }} />
                                <h4><a href="#">Eiusmod Tempor</a></h4>
                                <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Service
