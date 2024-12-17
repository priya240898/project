import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSmile,FaProjectDiagram,FaHeadphones,FaUserFriends } from 'react-icons/fa';

const Count = () => {
    return (
        <>

            <div className="count">
                <div className="container">
                    <div className="section-flex">
                        <div className="section">
                            <div class="count-box">
                                <pre><FaSmile style={{  fontSize: '48px', color: ' #3498db'  }} /></pre>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">232</span>
                                <p>Happy Clients</p>
                            </div>
                        </div>

                        <div className="section">
                            <div class="count-box">
                                <pre><FaProjectDiagram style={{  fontSize: '48px', color: ' #3498db'  }} /></pre>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter">232</span>
                                <p>Projects</p>
                            </div>
                        </div>

                        <div className="section">
                            <div class="count-box">
                                <pre><FaHeadphones style={{  fontSize: '48px', color: ' #3498db'  }} /></pre>
                                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="0" class="purecounter">232</span>
                                <p> Hours Of Support</p>
                            </div>
                        </div>

                        <div className="section">
                            <div class="count-box">
                                <pre><FaUserFriends style={{  fontSize: '48px', color: ' #3498db'  }} /></pre>
                                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="0" class="purecounter">232</span>
                                <p>Hard Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Count
