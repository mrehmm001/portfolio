import { ButtonGroup, Chip, Container, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Heading from "./Heading";
import * as React from 'react';
import Card from '@mui/material/Card';
import Zoom from '@mui/material/Zoom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import FolderIcon from '@mui/icons-material/Folder';
const { useEffect, useRef, forwardRef } = React;
const featuredProjects = [
    {
        name:"Dhania (ongoing)",
        date:"2023",
        description:`Dhania is my ongoing project, which I started in 2023. It is a
        RAG (Retrieval Augmented Generation) AI model, designed to
        enhance conversational interactions by providing contextually
        relevant responses based on the input data. Dhania leverages
        a robust stack of cutting-edge technologies, including Next.js,
        Prisma, Langchain, AWS serverless infrastructure, and prompt
        engineering.`,
        github:"",
        liveLink:"",
        techList:["NextJs","Prisma","Clerk","Langchain", "Socketio"],
        imageURL:"assets/dhania.png",
        id:1
    },
    {
        name:"Dissertation: Deep Image Colourisation: comparing AutoEncoders and CGans ",
        date:"2022",
        description:`For my final year dissertation I worked on a research project. This investigation was aimed at analysing deep learning techniques
        used for image colourisation, specifically AutoEncoders and Conditional Adversarial networks.`,
        github:"https://github.com/mrehmm001/Deep-Image-Colourisation-comparing-AutoEncoders-and-Conditional-Adversarial-Networks",
        liveLink:"",
        techList:["TensorFlow","Keras","Python","Scikit-image"],
        imageURL:"assets/dissertation.JPG",
        id:2
    },
    {
        name:"MRI Brain cancer classifier",
        date:"2022",
        description:"Developed a deep learning model capable of identifying brain tumors from MRI images.",
        github:"https://github.com/mrehmm001/MRI-brain-cancer-classifier",
        liveLink:"",
        techList:["TensorFlow","Keras","Python","OpenCV"],
        imageURL:"assets/MRI.jpg",
        id:3
    },
    {
        name:"Portfolio website",
        date:"2022",
        description:"The page you are currently on is used to show my projects, github repository and CV. ",
        github:"https://github.com/mrehmm001/portfolio",
        liveLink:"https://mrehmm001.github.io/portfolio/",
        techList:["React.js","JavaScript","Material-UI"],
        imageURL:"assets/portfolio.JPG",
        id:4
    },
    {
        name:"Handwriting digit and letter classifier",
        date:"2021",
        description:"Developed a deep learning model capable for classifying numbers & letters from handwriting.",
        github:"https://github.com/mrehmm001/Hand-written-digit-and-letter-classifier",
        liveLink:"",
        techList:["TensorFlow","Keras","Python","OpenCV"],
        imageURL:"assets/EMNIST.png",
        id:5
    },
    {
        name:"2 layer neural network",
        date:"2021",
        description:"Developed a 2 layer feed forward neural network capable of peforming complex tasks.",
        github:"https://github.com/mrehmm001/2-layer-Neural-Network-Implementation",
        liveLink:"",
        techList:["MatLab"],
        imageURL:"assets/matlab.JPG",
        id:6
    },
    
]

const otherProjects =
    [  
        {
            name:"Agile Saver",
            date:"2021",
            description:"AgileSaver is my 2nd year project wherein a group of 7, designed, prototyped and implemented a personal budgeting android application that uses machine learning/AI to keep track of expenses learns spending patterns and recommends deviations to the user’s day or routine in order to save them money.",
            github:"https://github.com/mrehmm001/AgileSaver/tree/main",
            liveLink:"",
            techList:["Android Studio","Java","XML","Node.js","Express.js","PostgreSQL"],
            imageURL:"assets/AgileSaver.png",
            id:7
        },
        {
        name:"Game project",
        date:"2019",
        description:"I made a fun 2D game project during my first year of University. I used Javascript with the help of P5JS library to make this. The game has recently been updated to include multiplayer feature, using socket.io!",
        github:"https://github.com/mrehmm001/Game-Project",
        liveLink:"https://game-project.onrender.com/",
        techList:["P5.js","JavaScript","Socket.io"],
        imageURL:"assets/gameProject.png",
        id:8
    }, {
        
        name:"Todo app (Java app)",
        date:"2021",
        description:"Developed a TODO GUI application using Java Swing library. The application is used for organising tasks, remember deadlines & to keep track of progress.",
        github:"https://github.com/mrehmm001/Todo-list",
        liveLink:"",
        techList:["Java","Swing"],
        imageURL:"assets/Todo.png",
        id:9
    },
    {
        name:"Goldories (Web app)",
        date:"2021",
        description:"Goldories is a full stack 2nd-year dynamic web application project used for calculating calories from food.",
        github:"",
        liveLink:"https://www.doc.gold.ac.uk/usr/422/",
        techList:["HTML","CSS","Node.js","Express.js","MongoDB","Bcrypt"],
        imageURL:"assets/Goldories.png",
        id:10
    },
    {
        name:"Data visualisation project",
        date:"2020",
        description:"Developed a Data visualization app which you can visualize several data, such as population map, Solar System, GDP data etc.",
        github:"https://github.com/mrehmm001/Data-visualisation-project",
        liveLink:"",
        techList:["P5.js","JavaScript","HTML","CSS"],
        imageURL:"assets/DataVis.png",
        id:11
    },
    {
        name:"Connect three app",
        date:"2020",
        description:"Developed a fun android app called Connect 3 based off the game, Connect 4 and TicTacToe. Where the goal is to connect 3 in a row to win, you can play this game with a friend.",
        github:"https://github.com/mrehmm001/Connect-Three",
        liveLink:"",
        techList:["Android Studio","Java","XML"],
        imageURL:"assets/connect3.png",
        id:12
    },
]

const styles = {
    container:{
        width:"100%",
        height:"100%",
        zIndex:1,
        position:"relative",
        overflow:"hidden"
        
    },
    cardStyle:{
        display:"flex", 
        position:"relative",
        // minHeight:"300px"
    },

    imageParent:{
        overflow:"hidden",
    },
    imageStyle:{
        objectFit:"cover",
        width:"100%",
        height:"100%",
    },
    cardContent:{flex:1.5,
        marginRight:"auto", 
        padding:"30px",
    }

}

function projectCard({name,date,description,github,liveLink,techList,imageURL,id}){
    return (
        <Box className={`project-${id}`} my={3}>
            <Card sx={{height:{xs:"100%",md:"420px",xl:"340px"},flexDirection:{xs:"column",md:"row-reverse"}}} elevation={3} style={styles.cardStyle}>
                <Box sx={{width:{xs:"100%",md:"40%"},height:{xs:"200px",md:"100%"}}}  style={styles.imageParent}>   
                    <img style={styles.imageStyle} src={require("./"+imageURL)} alt="" />
                </Box>

                <Box style={styles.cardContent}>
                    <Grid style={{height:"100%"}}>
                        <Typography color="primary">Featured project</Typography>
                        <Typography variant="h5">{name}</Typography>
                        <Divider/>
                        <Typography style={{marginTop:"1em"}} color="text.secondary">{description}</Typography>
                        <Box mt={2}>
                            {techList.map(tech=><Chip sx={{marginRight:"1em",marginBottom:"1em"}} variant="outlined" label={tech}/>)}
                        </Box>
                        <Box sx={{position:{md:"absolute",xs:"relative"},
                                 bottom:{md:"30px"}}}>
                            {github && <IconButton href={github} style={{marginRight:"0.5em"}} ><GitHubIcon fontSize="large"/></IconButton>}
                            {liveLink && <IconButton href={liveLink}><LaunchIcon fontSize="large"/></IconButton>}
                        </Box>
                    </Grid>
                </Box>
            </Card>
        </Box>
      );
}

function secondaryProjectCard({name,date,description,github,liveLink,techList,imageURL,id}){

    return (
        <Grid className={`secondary-project`} item xs={1}>
                <Card style={{position:"relative", height:"100%"}} elevation={3}>
                    {/* <Box style={{height:"20em",overflow:"hidden"}}>   
                        <img style={{objectFit:"cover",width:"100%",height:"100%"}}src={require("./"+imageURL)} alt="" />
                    </Box> */}
                    <Box style={{height:"100%", display:"flex",flexDirection:"column"}} p={3}>   

                        <Typography style={{display:"flex",alignItems: 'center',flexWrap: 'wrap',}} variant="h5"><FolderIcon sx={{marginRight:"0.2em"}} fontSize="large" style={{marginBottm:"0px"}}/>{name}</Typography>
                        <Divider/>
                        <Typography style={{marginTop:"1em"}} color="text.secondary">{description}</Typography>
                        <Box mt={2}>
                            {techList.map(tech=><Chip size="small" sx={{marginRight:"1em",marginBottom:"1em"}} variant="outlined" label={tech}/>)}
                        </Box>

                        <Box style={{marginTop:"auto"}}>
                        {github && <IconButton href={github} style={{marginRight:"0.5em"}} ><GitHubIcon fontSize="large"/></IconButton>}
                            {liveLink && <IconButton href={liveLink}><LaunchIcon fontSize="large"/></IconButton>}
                        </Box>
                    </Box>

                </Card>

        </Grid>      
      );
}

function listProjects(){
    return featuredProjects.map((project)=>{
        return (projectCard(project))
    })
}

function listSecondaryProjects(){
    return otherProjects.map((project)=>{
        return (
            secondaryProjectCard(project)
        )
    })

}
function Projects() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const animationSpeed = 0.33;
    useEffect(() => {
        const element = ref.current;
        //Animation for the project cards
        for(let i=1; i<=12; i++){
            gsap.fromTo(element.querySelector(`.project-${i}`),{y:+100}, { y: 0,      
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(`.project-${i}`),
                yoyo: true })
            gsap.fromTo(element.querySelector(`.project-${i}`),{opacity:0},{opacity:1,
                    stagger: animationSpeed,
                    scrollTrigger: element.querySelector(`.project-${i}`)},`-=${animationSpeed}`)
    
        }
        gsap.fromTo(element.querySelectorAll(`.secondary-project`),{y:+100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(`.secondary-project`),
            yoyo: true })
        gsap.fromTo(element.querySelectorAll(`.secondary-project`),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(`.secondary-project`)},`-=${animationSpeed}`)



        //Animation for the heading    
        gsap.fromTo(element.querySelector(".heading-3"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-3")})        
        
        gsap.fromTo(element.querySelector(".heading-4"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-4")}) 
            
        return () => {
            gsap.kill()
            };     
     }, []);
    return ( 
        <Paper className="Projects" style={styles.container} ref={ref}>
            <Container>
                <Box py={10}>
                    <Heading customClass={"heading-3"} heading="PROJECTS"/>                       
                    {listProjects()}
                </Box>
            </Container>
            <Container>
                <Box py={5}>
                    <Heading customClass={"heading-4"} alignMent="center" heading="OTHER PROJECTS"/>  
                    {/* <Typography variant="h5">Other Projects</Typography> */}
                    <Grid container spacing={3} columns={{ xs: 1, sm: 2, md: 3 }}>
                        {listSecondaryProjects()}
                    </Grid>
                </Box>

            </Container>

        </Paper>

     );
}

export default Projects;


