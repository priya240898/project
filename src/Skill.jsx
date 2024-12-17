import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';


const Skill = () => {
    return (
        <>

            <div className="skill">
                <div className="container">
                    <div className="section-flex">
                        <div className="section">
                            <div className="progress">
                                <span class="text">HTML <i class="val">100%</i></span>
                                <div class="progress-bar-wrap">
                                <ProgressBar now={100} />;
                                </div>
                            </div>
                            <div className="progress">
                                <span class="text">CSS <i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                <ProgressBar now={90} />;
                                </div>
                            </div>
                            <div className="progress">
                                <span class="text">JAVASCRIPT<i class="val">75%</i></span>
                                <div class="progress-bar-wrap">
                                <ProgressBar now={75} />;
                                </div>
                            </div>
                        </div>

                        <div className="section">
                            <div className="progress">
                                <span class="text">PHP <i class="val">80%</i></span>
                                <div class="progress-bar-wrap">
                                <ProgressBar now={80} />;
                                </div>
                            </div>
                            <div className="progress">
                                <span class="text">WORDPRESS/CMS <i class="val">90%</i></span>
                                <div class="progress-bar-wrap">
                                <ProgressBar now={90} />;
                                </div>
                            </div>
                            <div className="progress">
                                <span class="text">PHOTOSHOP<i class="val">55%</i></span>
                                <div class="progress-bar-wrap">
                                <ProgressBar now={55} />;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Skill
