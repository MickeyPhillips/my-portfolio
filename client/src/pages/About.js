import React from 'react'

const About = (props) => {
    const styles = {
        head: {
            // padding: '17px 25px', //5px-16px
            // textAlign: 'start', 
            // fontSize: 24 //24-32
            padding: '5%',
            fontSize: 48
        },
        aboutSection: {
            position: 'absolute',
            top: "10%",
            left: 0,
            
            // height: "50%",
            // background: 'rgba(15,15,15, 0.5)',
            // // border: "2px solid black",
            // borderRadius: "20px",
            padding: "10px",
            margin: '25px',
            
            
        },
        textDesign: {
            fontSize: 32
        },
        contactPos: {
            position: 'absolute',
            top: "75%",
            left: 0,
            width: '100vw'
            
        },
        contactButton: {
            background: 'rgb(233,29,254)',
background: 'linear-gradient(332deg, rgba(233,29,254,1) 0%, rgba(178,82,241,1) 50%, rgba(181,0,245,1) 100%)',
            padding: '5px',
            margin: 'auto 20%',
            borderRadius: '20px'
        }
    }
  return (
    <div>
       {props.size.height > 550 && (<h1 style={styles.head}>About</h1>)}
       <div style={styles.aboutSection}>
            <p style={styles.textDesign}>
                I am a <span style={{color: 'yellow'}}>full stack developer</span> based out of <span style={{color: 'yellow'}}>Austin, Texas</span>. I am currently looking for a job, I enjoy learning everyday.
            </p>
            
            
        </div>
        
    </div>
  )
}

export default About