import React, {useState} from 'react'
import { FaArrowLeft, FaArrowRight, FaGithub, FaLink } from 'react-icons/fa'


const Projects = (props) => {
    const styles = {
        head: {
            padding: '5%',
            fontSize: 48
        },
        image: {
            width: "80vw",
            
            borderRadius: "10px"
        },
        projTitle: {
            zIndex: '3',
            position: 'absolute',
            top: '0%',
            width: '100vw'
        },
        section: {
            position: 'absolute',
            top: '15%',
            width: '100vw'
            
        },
        sectionRotated: {
            position: 'absolute',
            top: '2%',
            width: '100vw'
        },
        controls: {
            position: 'absolute',
            bottom: "20%" ,
            width: '100vw',
            
            display: 'flex',
            justifyContent: 'center',
            fontSize: '24px'
        },
        count: {
            margin: 'auto 30px'
        },
        container: {
            position: 'relative',
            color: 'white',
            textAlign: 'center',
            
        },
        bottomRight: {
            position: 'absolute',
            top: "25%",
            right: 0,
            display: 'flex',
            flexDirection: 'column'
        },
        link: {
            margin: '10px'
        }
    }
    let projectList = [
        {
            title: "S(IO)NG",
            img: "./assets/images/Sing-Song-Webnail.png",
            github: "https://github.com/MickeyPhillips/sing-song",
            live: "https://thunderous-gelato-ead3d7.netlify.app/",
            techs: ["React", "Three.js", "react-three/fiber", "react-three/drei", "Bootstrap", "Node.js", "Express.js", "Spotify API"]
        },
        {
            title: "Portfolio Website",
            img: "./assets/images/portfolio_picture.png",
            github: "githublink",
            live: "https://mickeyphillips.info/",
            techs: ["React", "Chart.js", "Three.js", "react-three/fiber", "react-three/drei"]
        }
    
    ]
    // let images = [
    //     "https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg",
    //     "https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg",
    //     "https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg"
    // ]
    const [current, setCurrent] = useState(0)
    const length = projectList.length
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    
    if(!Array.isArray(projectList) || projectList.length <= 0) return null;

    const largeStyles = {
        section: {
            position: 'absolute',
            top: '15%',
            width: '100%'
        },
        image: {
            width: '80%',
            borderRadius: '10px'
        },
        controls: {
            position: 'absolute',
            bottom: "20%" ,
            width: '100%',
            
            display: 'flex',
            justifyContent: 'center',
            fontSize: '24px'
        },
        count: {
            margin: 'auto 30px'
        },
        imageTablet: {
            width: '70%',
            borderRadius: '10px'
        }
        
    }

    if (props.size.width >= 800) {
        return <div>
            {props.size.height > 550 && (<h1 style={styles.head}>Projects</h1>)}
            <div style={largeStyles.section}>
                
                {/* <FaArrowLeft className="left" onClick={prevSlide}/>
                <div className='pgN'>{current + 1}/{projectList.length}</div>
                <FaArrowRight className="right" onClick={nextSlide}/> */}
                {/* <p className="left" onClick={prevSlide}>Left</p> */}
                {/* <p className="right" onClick={nextSlide}>Right</p> */}
                
                <div className='lProjects'>
                    
                    {projectList.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                <div>
                                    <h1>{slide.title}</h1>
                                    
                                    <div style={styles.container}>

                                        <img src={slide.img} style={props.size.height > 550 ? largeStyles.image : largeStyles.imageTablet}/>
                                        <div style={styles.bottomRight}>
                                            <a href={slide.github} style={{textDecoration: "none", color:"white"}} target="_blank"><FaGithub style={styles.link}/></a>
                                            <a href={slide.live} style={{textDecoration: "none", color:"white"}} target="_blank"><FaLink style={styles.link}/></a>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <p>{slide.techs.map((tech, i, arr) => {
                                        if(arr.length - 1 === i) {
                                            return(<span>{tech}</span>)
                                        }
                                        else {
                                            return (<span>{tech} | </span>)
                                        }
                                    }
                                        
                                        
                                    )}</p>
                                    
                                </div>
                                
                                )}
                                
                            </div>
                            
                        )
                    })}
                    
                   
                    
                    
                    
                </div>
                
            </div>
            <div style={largeStyles.controls}>
                            <FaArrowLeft className="lLeft" onClick={prevSlide}/>
                            <div style={largeStyles.count}>{current + 1}/{projectList.length}</div>
                            <FaArrowRight className="lRight" onClick={nextSlide}/>
                    </div>
        </div>
    }
  return (
    <div>
        {props.size.height > 550 && (<h1 style={styles.head}>Projects</h1>)}
        
        <div style={props.size.height > 550 ? styles.section : styles.sectionRotated}>
                
                {/* <FaArrowLeft className="left" onClick={prevSlide}/>
                <div className='pgN'>{current + 1}/{projectList.length}</div>
                <FaArrowRight className="right" onClick={nextSlide}/> */}
                {/* <p className="left" onClick={prevSlide}>Left</p> */}
                {/* <p className="right" onClick={nextSlide}>Right</p> */}
                
                <div className='lProjects'>
                    
                    {projectList.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                <div>
                                    <h1 style={props.size.height > 550 ? {} : styles.projTitle}>{slide.title}</h1>
                                    
                                    <div style={styles.container}>

                                        <img src={slide.img} style={styles.image}/>
                                        <div style={styles.bottomRight}>
                                            <FaGithub style={styles.link}/>
                                            <FaLink style={styles.link}/>
                                        </div>
                                        
                                    </div>
                                    
                                    <p>{slide.techs.map((tech, i, arr) => {
                                        if(arr.length - 1 === i) {
                                            return(<span>{tech}</span>)
                                        }
                                        else {
                                            return (<span>{tech} | </span>)
                                        }
                                    }
                                        
                                    )}</p>
                                    
                                </div>
                                
                                )}
                                
                            </div>
                            
                        )
                    })}
                    
                   
                    
                    
                    
                </div>
                
            </div>
            <div style={styles.controls}>
                            <FaArrowLeft className="lLeft" onClick={prevSlide}/>
                            <div style={styles.count}>{current + 1}/{projectList.length}</div>
                            <FaArrowRight className="lRight" onClick={nextSlide}/>
                    </div>
    </div>
  )
}

export default Projects