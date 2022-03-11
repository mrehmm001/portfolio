import { Button, ButtonGroup, Chip, Container, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Heading from "./Heading";
import * as React from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import FolderIcon from '@mui/icons-material/Folder';
const { useEffect, useRef, forwardRef } = React;

const styles = {
    container:{
        width:"100%",
        height:"100%",
        zIndex:1,
        position:"relative",
        overflow:"hidden"
        
    },

}

function Contact() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const animationSpeed = 0.33;
    useEffect(() => {
        const element = ref.current;
        //Animations
        gsap.fromTo(element.querySelector(".get-in-touch"),{x:-100}, { x: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".get-in-touch"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".get-in-touch"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".get-in-touch")},`-=${animationSpeed}`)

        gsap.fromTo(element.querySelector(".small-talk"),{x:+100}, { x: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".small-talk"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".small-talk"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".small-talk")},`-=${animationSpeed}`)         
        
                
        gsap.fromTo(element.querySelector(".say-hello"),{y:+100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".say-hello"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".say-hello"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".say-hello")},`-=${animationSpeed}`)            



        //Animation for the heading    
        gsap.fromTo(element.querySelector(".heading-5"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-5")})  
        return () => {
            gsap.kill()
            };          
     }, []);
    return ( 
        <Paper className="Contact" style={styles.container} ref={ref}>
            <Container>
                 <Heading customClass={"heading-5"}  heading="CONTACT ME"/>
                    <Container maxWidth="sm">
                        <Box pb={10}>

                            <Box mb={2}>
                                <Typography className="get-in-touch" variant="h3" style={{textAlign:"center",marginBottom:"0.5em",fontWeight:500}}>Get In Touch</Typography>
                                <Typography className="small-talk" variant="h6" color="textSecondary" style={{textAlign:"center",fontWeight:500}}>Want to get in touch? Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Typography>
                            </Box>
                            <Box className="say-hello" style={{display:"flex",justifyContent:"center"}}>
                                <Button href="mailto:muneeb73@outlook.com" style={{padding:"1em"}}  variant="outlined">Say Hello</Button>
                            </Box>
                        </Box>

                 </Container>   
            </Container>


        </Paper>
     );
}

export default Contact;