import { Box, Chip, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import Heading from "./Heading";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import FolderIcon from '@mui/icons-material/Folder';
import React from "react";
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

function AboutMe() {
    const fontSize="h6"
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const animationSpeed = 0.33;
    useEffect(() => {
        const element = ref.current;
        //Animation for the about me content
        gsap.fromTo(element.querySelector(".about-me"),{x:-100}, { x: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".about-me"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".about-me"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".about-me")},`-=${animationSpeed}`)


        gsap.fromTo(element.querySelector(".picture"),{x:+100}, { x: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".picture"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".picture"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".picture")},`-=${animationSpeed}`)        



        //Animation for the heading    
        gsap.fromTo(element.querySelector(".heading-1"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-1")})      
            
        //Animation for the skills
        gsap.fromTo(element.querySelectorAll(`.skill`),{y:+100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(`.skill`),
            yoyo: true })
        gsap.fromTo(element.querySelectorAll(`.skill`),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(`.skill`)},`-=${animationSpeed}`) 
        
        return () => {
            gsap.kill()
            };         
                
     }, []);
    return ( 
        <Paper className={"About"} style={styles.container} ref={ref}>
            <Container>
                <Box py={10}>
                    <Heading customClass={"heading-1"} heading="ABOUT ME"/>    
                    <Grid container direction={{xs:"column",md:"row"}}>
                        <Grid className="about-me" item flex={1} style={{paddingRight:"2em"}}>
                            <Grid container spacing={3}>
                           
 
                                <Grid item>
                                    <Typography color="textSecondary" variant={fontSize}>
                                        My name is Muneeb Rehman, a software engineer driven by an enduring fascination with computers and coding. My journey in software development began at a young age, and I've since cultivated a comprehensive skill set. With proficiency in various programming languages and a flair for problem-solving, I have consistently contributed to the successful delivery of software projects.
                                    </Typography> 
                                </Grid>
                                <Grid item>
                                    <Typography color="textSecondary" variant={fontSize}>
                                    I am an adaptable team player who excels in collaborative environments and is well-versed in the latest development methodologies and tools. My commitment to crafting efficient and innovative software solutions remains unwavering, making me a valuable asset to any software development team.
                                    </Typography> 
                                </Grid>
                                <Grid item>
                                    <Typography style={{display:"inline", marginRight:"0.5em"}} color="primary" variant={fontSize}>Interests:</Typography>  <Typography style={{display:"inline"}} variant={fontSize} color="textPrimary">Full Stack <Typography style={{display:"inline"}} color="textSecondary" variant={fontSize}>•</Typography> Software Engineering <Typography style={{display:"inline"}} color="textSecondary" variant={fontSize}>•</Typography> Data Science <Typography style={{display:"inline"}} color="textSecondary" variant={fontSize}>•</Typography> Machine Learning</Typography> 
                                </Grid>
                                <Grid item>
                                <Grid item>
                                    <Typography color="primary" variant={fontSize}>Here are a few technologies I’ve been working with recently:</Typography> 
                                    <Grid container>
                                        <Grid item flex={1}>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>TypeScript</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>React</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Nodejs</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Nextjs</Typography>
                                        </Grid>
                                        <Grid item flex={1}>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Langchain</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>OpenAI</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>TensorFlow</Typography>
                                            <Typography className={"skill"} style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>Scikit-Learn</Typography>
                                        </Grid>
         
                                    </Grid>

                                </Grid>    
                                </Grid>
                            </Grid>
  
                        </Grid>
                        <Divider sx={{display:{xs:"none",md:"block"}}} orientation="vertical" flexItem></Divider>
                        <Grid className="picture" flex={1} item>
                            <Paper elevation={3} sx={{overflow:"hidden",position:"relative",marginTop:{xs:"2em",md:"0px"},marginLeft:{xs:"auto"},marginRight:{xs:"auto"},maxWidth:"300px",height:"350px"}}>
                                <img style={{width:"100%",height:"110%",objectFit:"cover",position:"absolute",bottom:"0.2px"}} src={require("./assets/profile_picture.jpeg")} alt="" />
                            </Paper>
                        </Grid>

                        
                    </Grid>
                </Box>
            </Container>

        </Paper>
     );
}

export default AboutMe;