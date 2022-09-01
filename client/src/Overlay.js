import React from 'react'
import About_Icon_New from './assets/svgs/About_Icon_New.svg'
import Envelope from './assets/svgs/envelope-icon.svg'
import ProjectsIcon from './assets/svgs/ProjectsIcon.svg'
import SkillsIcon from './assets/svgs/SkillsIcon.svg'
import ResumeIcon from './assets/svgs/ResumeIcon.svg'
import Logo from './assets/svgs/Logo.svg'
import About from './pages/About'
import gmail from './assets/svgs/gmail.svg'
import linkedin from './assets/svgs/linkedin.svg'
import github from './assets/svgs/github.svg'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import './App.css'
import {BiUpArrow} from 'react-icons/bi'
import {FaLink} from 'react-icons/fa'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

const Overlay = (props) => {
  const location = useLocation()
    const styles = {
        homePage: {
            position: 'absolute',
            zIndex: "1",
            color: "white",
            
        },
        header: {
          // backgroundColor: 'black',
          // zIndex: "1",
          width: "100vw",
          
        },
        navigation: {
          zIndex: '3',
          background: "#261e1e",
          width: "100vw",
          position: 'fixed',
          bottom: 0,
          left: 0,
          borderTop: "1px solid #221515",
         
        },
        navItems: {
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          
        },
        content: {
          zIndex: "2",
          position: "fixed",
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgb(13,11,11)',
          background: 'radial-gradient(circle, rgba(13,11,11,.2) 0%, rgba(34,29,29,1) 60%, rgba(38,30,30,1) 100%)'
        },
        contentStyle: {
          background: 'black'
        },
        linksPos: {
          zIndex: '2',
          position: 'fixed',
          bottom: "12%",
          margin: 'auto 10px',
          right: 0
        },
        linksDes: {
          
          // padding: 'auto px',
          // background: "rgba(38, 30, 30, 0.2)",
          borderTop: "1px solid #221515",
          borderLeft: "1px solid #221515",
          borderBottom: "1px solid #221515",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px"
        },
        linksGr: {
          display: 'flex',
          flexDirection: 'column',
          padding: '5px'
        },
        

        
    }
    const largeStyles = {
      navigation: {
          // zIndex: '1',
          background: "#261e1e",
          height: "100vh",
          position: 'fixed',
          // top: 0,
          left: 0,
          borderTop: "1px solid #221515",
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'hidden',
        justifyContent: 'space-between'
      },
      navItems: {
        // display: 'flex',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // flexDirection: 'column',
        margin: 'auto 30px',
        // overflowY: 'hidden',
        // justifyContent: 'space-between'
        // position: 'absolute',
        // top: '50%'
        // justifyContent: 'center',
        // alignItems: 'center'
        
      },
      navItem: {
        display: 'flex',
        textDecoration: 'none',
        color: 'white'

      },
      logo: {
        margin: '30px auto',
        alignContent: 'center'
      },
      links: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 'auto auto 30px',
        
      },
      link: {
        margin: 'auto 5px'
      },
      header: {
        position: 'absolute',
        top: '50%',
        left: '20%',
        width: '100vw',
        // zIndex: '3'
      },
      head: {
        background: 'blue',
        width: '60%'
      },
      content: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: '40vw',
        height: '100vh',
        // background: "#261e1e",
      },
      headerTablet: {

      }
    }
    if (props.size.width >= 800) {
      return (
      
        <div style={styles.homePage}>
          <div 
          style={largeStyles.header}
          >
            
              <h1 style={{textAlign: "center", color:"pink", padding: "5px 25px"}}>Mickey Phillips</h1>
              <h2 style={{textAlign: "center", padding: "5px 25px"}}>Web Developer</h2>
            
          
        </div>
          <div style={largeStyles.navigation}>
          <Link to={"/"} style={largeStyles.logo}><img src={Logo} width="96" height="96" alt='Mickey Logo representing Home Page'/></Link>
            <div style={largeStyles.navItems}>
              
              
                <Link to={"/about"} style={largeStyles.navItem}>
                <img src={About_Icon_New} width="64" height="64" alt='Simple Person Icon representing About Page'/>
                <h2>About</h2>
                </Link>
                
              
              
              
                <Link to={"/skills"} style={largeStyles.navItem}>
                <img src={SkillsIcon} width="64" height="64" alt='Flexed Arm Icon representing Skills Page'/>
                <h2>Skills</h2>
                </Link>
                
              
              
              
                <Link to={"/projects"} style={largeStyles.navItem}>
                  
                <img src={ProjectsIcon} width="64" height="64" alt='Briefcase Icon representing Portfolio Page'/>
                <h2>Portfolio</h2>
                </Link>
                
              
              
              <div style={largeStyles.navItem}>
                
                <img src={ResumeIcon} width="64" height="64" alt='Resume Icon representing Resume Page'/>
                <h2>Resume</h2>
                
                
              </div>
              
              
              
              
            </div>
            <div style={largeStyles.links}>
              <a style={largeStyles.link} href='https://www.linkedin.com/in/mickey-phillips-7ab046217/' target={"_blank"} rel={"noreferrer"}><img src={linkedin} width="48" height="48" /></a>
              <a style={largeStyles.link} href='https://github.com/MickeyPhillips' target={"_blank"} rel={"noreferrer"}><img src={github} width="48" height="48" /></a>
              <a style={largeStyles.link} href='mailto:mickeyphillips45r@gmail.com'><img src={gmail} width="48" height="48" /></a>
            </div>
          </div>
          <div style={largeStyles.content}>
            <Routes>
              <Route path="/about" element={<About size={props.size}/>}/>
              <Route path='/skills' element={<Skills size={props.size}/>}/>
              <Route path='/projects' element={<Projects size={props.size}/>}/>
            </Routes>
          
          
          
          </div>
        </div>
      
      )
  }
  const svgSize = props.size.width > 300 ? "64" : "48"
  
  return (
    
    
      
      <div style={styles.homePage}>
        <div style={styles.header}>
          <h1 style={{textAlign: "end", color:"pink", padding: "5px 25px"}}>Mickey Phillips</h1>
          <h2 style={{textAlign: "start", padding: "5px 25px"}}>Web Developer</h2>
        </div>
        
        <div style={location.pathname === "/" ? {} : styles.content}> 
        <Routes>
            <Route path="/about" element={<About size={props.size}/>}/>
            <Route path='/skills' element={<Skills size={props.size}/>}/>
            <Route path='/projects' element={<Projects size={props.size}/>}/>
        </Routes>
          
        </div>
        <div style={styles.linksPos}>
          <div 
          // style={styles.linksDes}
          className='dropup'
          >
            <button className='dropbtn'><FaLink width={"48"} height={"48"} className='dropbtn'/></button>
            <div 
            // style={styles.linksGr}
            className='dropup-content'
            >
              <a href='https://www.linkedin.com/in/mickey-phillips-7ab046217/' target={"_blank"} rel={"noreferrer"}><img src={linkedin} width="48" height="48" /></a>
              <a href='https://github.com/MickeyPhillips' target={"_blank"} rel={"noreferrer"}><img src={github} width="48" height="48" /></a>
              <a href='mailto:mickeyphillips45r@gmail.com'><img src={gmail} width="48" height="48" /></a>
            </div>
            
          </div>
        </div>
        <div style={styles.navigation}>
            <div style={styles.navItems}>
              <Link to={"/about"}>
              <img src={About_Icon_New} width={svgSize} height={svgSize} alt='Simple Person Icon representing About Page'/>
              </Link>
              <Link to={"/skills"}>
              <img src={SkillsIcon} width={svgSize} height={svgSize} alt='Flexed Arm Icon representing Skills Page'/>
              </Link>
              <Link to={"/"}>
              <img src={Logo} width={svgSize} height={svgSize} alt='Mickey Logo representing Home Page'/>
              </Link>
              <Link to={"/projects"}>
              <img src={ProjectsIcon} width={svgSize} height={svgSize} alt='Briefcase Icon representing Portfolio Page'/>
              </Link>
              
              <img src={ResumeIcon} width={svgSize} height={svgSize} alt='Resume Icon representing Resume Page'/>
              
              
              
              
            </div>
        </div>
      </div>
    
  )
}

export default Overlay