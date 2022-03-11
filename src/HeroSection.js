import { Container, Paper, Typography,Grid,IconButton,Button, Box} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { gsap, Power2 } from "gsap";
import React from "react";
import { Parallax } from "react-scroll-parallax";




const { useEffect, useRef, forwardRef } = React;
const backgroundImage = "https://images.unsplash.com/photo-1645193584649-570f8f1eaddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"


const styles ={
    container:{
        height:"100vh",
        position:"relative",
        overflow:"hidden",
        
    },
    background:{
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:"cover",
        height:"100%",
        width:"100%",
        position:"absolute",
        zIndex:1

    },
    darkOverlay:{
        background:"black",
        opacity:"100%",
        height:"100%",
        width:"100%",
        position:"fixed",
        zIndex:1

    },
    content:{
        zIndex:2,
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    },
    fontStyle1:{
        fontWeight:400,
    }, 
    fontStyle2:{
        fontWeight:700
    },
    name:{
        fontStyle: "italic",
        fontWeight:400
    },
    iconStyle:{
        fontSize:"2em", 
        opacity:"70%",
        "&:hover":{
            opacity:"100%",
        }
    },
    buttonStyle1:{
        margin:"auto",
        marginTop:"1em"
    }

}

function HeroSection({handleShowProject}) {

    return ( 
        <Paper className="Hello" style={styles.container}>
 
            <Parallax speed={-70} className="background" style={styles.background}></Parallax>
            {/* <div className="background" style={styles.background}></div> */}
            <div className="overlay" style={styles.darkOverlay}></div>

            <Container style={styles.content}>

                <Grid container direction="column">
           
                        <Typography align="center"  variant="h3"><span className="hello">Hello</span><span className="im">, I'm</span></Typography>
                        <Typography className="fullname" align="center"  style={styles.fontStyle1}  variant="h1">Muneeb Rehman</Typography>
                        <Typography className="firstname" color="textSecondary" style={styles.name} align="center">call me muneeb</Typography>
                        <Typography className="resume" align="center" style={styles.fontStyle2} variant="h5">AND THIS IS MY RESUME</Typography>
        
                        <Grid className="links" justifyContent="center" container>
                            <IconButton href="https://www.linkedin.com/in/muneeb-rehman-5257101b7/">
                                <LinkedInIcon  style={styles.iconStyle}/>
                            </IconButton>
                            <IconButton href="https://github.com/mrehmm001">
                                <GitHubIcon  style={styles.iconStyle}/>
                            </IconButton>
                        </Grid>
                        <Box className="button" style={styles.buttonStyle1}>
                            <Button onClick={()=>handleShowProject()} color="primary"  variant='outlined'>CHECK OUT MY PROJECTS</Button>
                        </Box>

         

                </Grid>
 
            </Container>

        </Paper>
     );
}


export default HeroSection;