import React from 'react'
// Page Components
import AboutSection from '../components/AboutSection'
import ServisesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'
// Animations
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import ScrollTop from '../components/ScrollTop'

const AboutUs = () => {
    return(
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection/>
        <ServisesSection/>
        <FaqSection/>
        <ScrollTop/>
    </motion.div>
    )
}

export default AboutUs
