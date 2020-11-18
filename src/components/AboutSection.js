import React from 'react'
import mainBcg from '../img/mainBcg.jpg'
import {Wrapper, Description, Image, Hide} from '../styles'
// Framer Motion
import {motion} from 'framer-motion'

const AboutSection = () =>{
    return(
        <Wrapper>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>
                        We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any embroidery ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={mainBcg} alt="mainbcg"/>
            </Image>
        </Wrapper>
    )
}

// Styled Components


export default AboutSection