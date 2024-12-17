import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from 'react-icons/fa';

const Portfolio = () => {
    return (

        <>

            <div className="portfolio">
                <div className="container">
                    <div class="section-title">
                        <h2>Portfolio</h2>
                        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit</p>
                    </div>
                    <div className="btn">
                        <div className="button">
                            <ul className='filters'>
                                <li>ALL</li>
                                <li>APP</li>
                                <li>CARD</li>
                                <li>WEB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-flex">
                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-1.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">App 1</a></h4>
                                    <p>APP</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-2.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">Web 3</a></h4>
                                    <p>WEB</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-3.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">App 2</a></h4>
                                    <p>APP</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-4.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">Card 2</a></h4>
                                    <p>CARD</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-5.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">Web 2</a></h4>
                                    <p>WEB</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-6.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">App 3</a></h4>
                                    <p>APP</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-7.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">Card 1</a></h4>
                                    <p>CARD</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-8.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">Card 3</a></h4>
                                    <p>CARD</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="portfolio-wrap">
                                <figure>
                                    <img src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/portfolio/portfolio-9.jpg" alt="" width={"100%"} height={"auto"} />
                                    {/* <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="link-preview portfolio-lightbox" title="Preview">
                                    <FaPlus style={{ fontSize: '2rem', color: '#3498db' }} />
                                    </a> */}
                                </figure>
                                <div className="portfolio-info">
                                    <h4><a href="">Web 1</a></h4>
                                    <p>WEB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                            


        </>


    )
}

export default Portfolio
