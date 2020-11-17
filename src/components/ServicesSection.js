import React from 'react'
// import icons
import { FaSlack } from 'react-icons/fa'
import home2 from '../img/emb-06.jpg'

const ServisesSection = () => {
    return(
        <div className="servises">
            <div className="description">
                <h2>High <span>quality</span> servises</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={FaSlack} alt="icon-01"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={FaSlack} alt="icon-02"/>
                            <h3>Team work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={FaSlack} alt="icon-03"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={FaSlack} alt="icon-04"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="emb-06"/>
            </div>
        </div>
    )
}

export default ServisesSection