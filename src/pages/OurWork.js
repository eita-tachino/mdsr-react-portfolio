import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// Images
import feather from '../img/emb-Feather.jpg'
import leaves from '../img/emb-02.jpg'
import mesh from '../img/emb-Net.jpg'


const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Feather Works</h2>
                <div className="line"></div>
                <Link to="/work/the-feather"><img src={feather} alt="feather"/></Link>
            </Movie>
            <Movie>
                <h2>The Leaves Works</h2>
                <div className="line"></div>
                <Link to="/work/the-leaves"><img src={leaves} alt="leaves"/></Link>
            </Movie>
            <Movie>
                <h2>The Mesh Works</h2>
                <div className="line"></div>
                <Link to="/work/the-mesh"><img src={mesh} alt="mesh"/></Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork
