import { Button, ButtonGroup, Chip, Container, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Heading from "./Heading";
import * as React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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

const experience=[
    {
        role:"Software Engineer",
        company:"Visa / Pismo",
        date:"Feb 2026 - present",
        description:[
            "Recently accepted a fullstack software engineer role",
            "Contributing to backend development using Golang and GraphQL",
        ]
    },
    {
        role:"Front-End Software Engineer",
        company:"Alma Economics",
        date:"Mar 2024 - Feb 2026",
        description:[
            "Developed and maintained front-end using React and TypeScript",
            "Transitioned to full-stack role, contributing to Django backend development",
            "Led development on several high-impact projects: Cobflow, Evidence Map, and Theory of Change",
            "Revamped company website using WordPress, Elementor, and implemented careers page backend"
    ]
    },
    {
        role:"Software Engineer",
        company:"Imagination Technologies",
        date:"Jul 2022 - Dec 2023",
        description:[
        "Researched, designed, developed and maintained tools for the IDE using TypeScript.",
        "worked in an agile methodology workflow",
        "Understood and found my way around the codebase",
        "Detected problems and provided a solution to them",
        "Learnt new technologies on the go",
        "Addressed review feedback and took careful consideration of design & implementation, ensuring the project meets quality standards.",
        "Worked closely with colleagues such as project managers and Engineers, ensuring effective communication and teamwork"
    ]
    },
    
    
    {
    role:"Software Engineer Intern",
    company:"Imagination Technologies (internship)",
    date:"Jun 2021 - Sep 2021 ",
    description:["I undertook a summer placement as a Software Engineer at Imagination Technologies where I contributed towards the development of an IDE for embedded system developers who wish to develop on the RISC-V architecture.",
    "Researched, designed, developed and maintained GUI extensions written in TypeScript for the IDE.",
    "Addressed review feedbacks and took careful consideration of the feasibility of design & implementation, ensuring the project meets quality standards.",
    "Worked closely with colleagues such as project managers and engineers, ensuring effective communication and teamwork.",
    "Was able to identify problems and proposed solutions for them."]},

    {
    role:"Teaching Assistant",    
    company:"Code Your Future",
    date:"Feb 2021 - Jun 2021 ",
    description:["CodeYourFuture (CYF) is a UK based non-profit organisation that trains refugees and other disadvantaged people to become web developers and helps them to find work in the tech industry.",
    "assisted the lead teacher in teaching students HTML, CSS & JavaScript during several workshops.",
    "volunteered in marking coursework and giving students feedback"]}


]


function Work() {
    const [work,showWork] = React.useState("Alma Economics")
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef();
    const animationSpeed = 0.33;
    useEffect(() => {
        const element = ref.current;
        //Animation for the experience list
        gsap.fromTo(element.querySelector(".experience-list"),{y:+100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".experience-list"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".experience-list"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".experience-list")},`-=${animationSpeed}`)

        //Animation for the experience section
        gsap.fromTo(element.querySelector(".experience"),{y:-100}, { y: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".experience"),
            yoyo: true })
        gsap.fromTo(element.querySelector(".experience"),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(".experience")},`-=${animationSpeed}`)        



        //Animation for the heading    
        gsap.fromTo(element.querySelector(".heading-2"),{x:-100},{x:0,
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(".heading-2")})  
            
        //Animation for the description points
        gsap.fromTo(element.querySelectorAll(`.point`),{x:-100}, { x: 0,      
            stagger: animationSpeed,
            scrollTrigger: element.querySelector(`.point`),
            yoyo: true })
        gsap.fromTo(element.querySelectorAll(`.point`),{opacity:0},{opacity:1,
                stagger: animationSpeed,
                scrollTrigger: element.querySelector(`.point`)},`-=${animationSpeed}`)

        return () => {
            gsap.kill()
            };        

     }, []);
    return ( 
        <Paper className="Experience" style={styles.container} ref={ref}>
            <Container>
                <Heading customClass={"heading-2"} heading="EXPERIENCE" alignMent="right"/>

                <Grid container direction={{xs:"column",md:"row"}}>
                    <Grid className="experience-list" item>
                        <Grid container  direction={{xs:"row",md:"column"}}>
                            {experience.map(x=>{
                                return(
                                    <Grid item>
                                        <Button onClick={()=>showWork(x.company)} style={{
                                            borderRadius:0,
                                            padding:"1em",
                                            borderLeft:work==x.company?"1px solid lightblue":"1px solid gray",
                                            width:"100%",
                                            justifyContent:"start"
                                            
                                        }}>{x.company}</Button>
                                    </Grid>
                                );

                            })}
                        </Grid>    
                     </Grid>

                    <Grid className="experience" flex={1} item>
                        <Paper elevation={3} style={{padding:"1em"}}>
                        {experience.filter(exp=>exp.company==work).map(exp=>{
                            const {role,company,date,description} = exp;
                            return(
                                <Grid container direction="column">
                                    <Grid item>
                                        <Box>
                                            <Typography style={{display:"inline"}} variant="h5">{role}</Typography>
                                            <Typography style={{display:"inline"}} color="primary" variant="h5"> @ {company}</Typography>
                                        </Box>    
                                    </Grid>
                                    <Grid item>
                                        <Typography  color="primary" style={{marginTop:"0.5em"}}>{date}</Typography>
                                    </Grid>
                                    <Grid item style={{marginTop:"1em"}}>
                                        {description.map(desc=>{
                                            return(
                                                <Typography className="point" style={{marginBottom:"1em",display:"flex"}}><ArrowRightIcon color="primary"/>{desc}</Typography>                                            )
                                        })}
                                    </Grid>

                                </Grid>
                            )
                        })} 
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Paper>

     );
}

export default Work;