import React from 'react'
import "./techstack.css"
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
const Techstack = () => {
  return (
    <>
        <div className=' container techstack' id ="techstack">
          <Pulse >
           <h2  className="col-12 mt-3 mb-1 text-center text-uppercase">
           Technologies Stack
           </h2>
           </Pulse>
           <Fade>
           <div className='row'>
            <p className='container'><div className='heading'>👉 Programming Languages:</div><div className='content'> C, C++, JavaScript, Python.</div></p>
            <p className='container'><div className='heading'>👉 Web Development Expertise:</div><div className='content'> Proficient in front-end and back-end web development, with hands-on experience in HTML, CSS, JavaScript, and popular web development frameworks such as React and Node.js.</div></p>
            <p className='container'><div className='heading'>👉 Machine Learning Proficiency:</div><div className='content'> Well-versed in machine learning concepts and frameworks, including TensorFlow and scikit-learn. Capable of building and deploying machine learning models for real-world applications.

</div></p>
            </div>
            </Fade>
            </div>
        
    </>
  )
}

export default Techstack