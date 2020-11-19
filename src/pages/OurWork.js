import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// Images
import feather from '../img/emb-Feather.jpg'
import leaves from '../img/emb-02.jpg'
import mesh from '../img/emb-Net.jpg'
// Animations
import {motion} from 'framer-motion'
import {sliderContainer,slider, pageAnimation, fade, photoAnim, lineAnim} from '../animation'
import {useScroll} from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: '#fff'}}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2  variants={fade}>The Feather Works</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-feather">
                    <Hide>
                        <motion.img variants={photoAnim} src={feather} alt="feather"/>
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <h2>The Leaves Works</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-leaves"><img src={leaves} alt="leaves"/></Link>
            </Movie>
            <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>The Mesh Works</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-mesh"><img src={mesh} alt="mesh"/></Link>
            </Movie>
            <ScrollTop/>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
`
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Hide = styled.div`
    overflow: hidden;
`
// Frame Animation
const Frame1 =styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background: #8effa0;
`
export default OurWork
