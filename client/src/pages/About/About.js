import React from 'react'
import './About.css'
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';

const About = () => {
  return (
    <Jump>
    // <Reveal>
    <div className='about' id="about">
        <div className='row'>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img src='profilephoto2.jpg' alt='Profile_pic'></img>
            </div>
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                <h1>About Me</h1>
                <p>
                Highly motivated and versatile professional with a passion for web development and machine learning. Known for my exceptional problem-solving abilities and a strong foundation in cutting-edge technologies, I am a dedicated and fast-learning individual committed to delivering innovative solutions. With a solid background in web development and a thirst for staying ahead in the world of machine learning, I am poised to make significant contributions to any project or team. 
                </p>
            </div>
        </div>
    </div>
    // </Reveal>
    </Jump>
  )
}

export default About