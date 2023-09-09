import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import Typewriter from 'typewriter-effect';
import './home.css'
import {BsFillMoonFill,BsFillSunFill} from 'react-icons/bs'
import Fade from 'react-reveal/Fade';
const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme= ()=>{
    setTheme((prevState)=>(prevState === "light" ? "dark" :"light"));
  }
  return (
    <>
        <div className="container-fluid home-container" id="home">
            <div className='theme-btn' onClick={handleTheme}>
              {theme === "light" ? <BsFillMoonFill/>:<BsFillSunFill/>}
            </div>
            <div className='container home-content'>
                <Fade right >
                <h2>Hi I'm a</h2>
                <h1>
                <Typewriter
                    options={{
                        strings: ["FullStack Developer !",
                         "Mern Stack Developer !",
                        //  "React native Developer !",
                         ],
                        autoStart: true,
                        loop: true,
                    }}
/>
                </h1>
                </Fade>
                <Fade bottom>
                 <div className='home-buttons'>
                 <a  className='btn btn-hire' 
                 href="https://www.linkedin.com/in/saloni-bindal/"
                 rel ="noreferrer"
                    target="_blank"
                 >Hire Me</a>
                   
                    {/* <button className='btn btn-hire'>Hire Me</button> */}
                    <a className='btn btn-cv' href="https://drive.google.com/file/d/1HNIML6ofznJz-x-HbmFZGGWzz9MlMyE0/view?usp=sharing">My Resume</a>
                 </div>
                 </Fade>
            </div>
        </div>
    </>
  )
}

export default Home