import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBasketballBall,FaFolder,FaTachometerAlt } from 'react-icons/fa';

const Wedo= () => {
  return (
    <>
    
    <div className="wedo">
        <div className="container">
            <div className="section">
                <div className="section-title">
                    <h2>
                    What We Do
                    </h2>
                    <p>Magnam dolores commodi suscipit consequatur ex aliquid</p>
                </div>
                <div className="section-flex">
                    <div className="section1">
                        <div className="icon-box">
                            <div className="icon">
                            <i className="bx bxl-dribbble" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                            <FaBasketballBall style={{ fontSize: '2rem', color: '#007bff' }} />
                            </div>
                            <h4><a href="">Lorem Ipsum</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div className="section1">
                        <div className="icon-box">
                            <div className="icon">
                            <i className="bx bxl-dribbble" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                            <FaFolder style={{ fontSize: '2rem', color: '#007bff' }} />
                            </div>
                            <h4><a href="">Sed ut perspiciatis</a></h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className="section1">
                        <div className="icon-box">
                            <div className="icon">
                            <i className="bx bxl-dribbble" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                            <FaTachometerAlt style={{ fontSize: '2rem', color: '#007bff' }} />
                            </div>
                            <h4><a href="">Magni Dolores </a></h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Wedo
