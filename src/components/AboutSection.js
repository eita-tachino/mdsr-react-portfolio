import React from 'react'
import mainBcg from '../img/mainBcg.jpg'
// styled
import styled from 'styled-components'
import {Wrapper, Description, Image, Hide} from '../styles'

const AboutSection = () =>{
    return(
        <Wrapper>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
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