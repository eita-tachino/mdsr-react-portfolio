import React from 'react'
import mainBcg from '../img/mainBcg.jpg'
import {Wrapper, Description, Image, Hide} from '../styles'
// Framer Motion
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'

const AboutSection = () =>{
    return(
        <Wrapper>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                        We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any embroidery ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={mainBcg} alt="mainbcg"/>
            </Image>
        </Wrapper>
    )
}

// Styled Components


export default AboutSection