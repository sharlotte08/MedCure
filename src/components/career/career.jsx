import React from 'react'
import Careerimg from '../../assets/crop.png';
import './career.css';
const Career = () => {
    return (
        <div className='career-cont'>
            <div className='career-img'>
                <img className="CareerImg" src={Careerimg} alt='careerimage'></img>
            </div>
            <div className='career-subtxt'>
                <h1><strong>Career Experience</strong></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit quis molestiae quod aut magnam soluta dolorum omnis culpa quia, vel cumque eveniet cum eum voluptatem placeat veritatis qui in.
                </p>
                <div className='career-expyear year1'>
                    <div>
                        <ul>
                            <li className='career-year'>2020</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='exp'>
                                <strong>
                                    University University
                                </strong>
                                <small>
                                    <p>hello po</p>
                                </small>
                            </li>

                            <li className='exp'>
                                <strong>
                                    University University
                                </strong>
                                <small>
                                    <p>hello po</p>
                                </small>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className='career-expyear year2'>
                    <div>
                        <ul>
                            <li className='career-year'>2020</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='exp'>
                                <strong>
                                    University University
                                </strong>
                                <small>
                                    <p>hello po</p>
                                </small>
                            </li>

                            <li className='exp'>
                                <strong>
                                    University University
                                </strong>
                                <small>
                                    <p>hello po</p>
                                </small>
                            </li>

                        </ul>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Career
