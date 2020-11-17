import React from 'react'
// import icons
import { FaSlack } from 'react-icons/fa'
import home2 from '../img/emb-06.jpg'
// styles
import {Wrapper, Description, Image} from '../styles'
import styled from 'styled-components'

const ServisesSection = () => {
    return(
        <Servises>
            <Description>
                <h2>High <span>quality</span> servises</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={FaSlack} alt="icon-01"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={FaSlack} alt="icon-02"/>
                            <h3>Team work</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={FaSlack} alt="icon-03"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={FaSlack} alt="icon-04"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="emb-06"/>
            </Image>
        </Servises>
    )
}

const Servises = styled(Wrapper)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`

export default ServisesSection