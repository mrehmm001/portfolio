import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./NavBar";
import Projects from "./Projects";
import Work from "./Work";
import { gsap, Power2 } from "gsap";
import React, { useState } from "react";

const { useEffect, useRef, forwardRef } = React;

const useStyles = makeStyles({
  container:{
    position:"relative"
  }
})

const darkTheme = createTheme({
  palette:{
    mode:"dark"
  }
})

function App() {
  const animationFinished = ()=>{
    document.body.style.overflow = ""
  }
  document.body.style.overflow = "hidden"
  const ref = useRef();

  let handleNavClick=(link)=>{ 
    const element = ref.current;
    switch(link){
      case "HOME":
        element.querySelector(".Home").scrollIntoView({ behavior: 'smooth', block: 'start' })
        break;
      case "ABOUT ME":
        element.querySelector(".About").scrollIntoView({ behavior: 'smooth', block: 'start' })
        break;
      case "EXPERIENCE":
        element.querySelector(".Experience").scrollIntoView({ behavior: 'smooth', block: 'start' })
        break;
      case "PROJECTS":
        element.querySelector(".Projects").scrollIntoView({ behavior: 'smooth', block: 'start' })
        break;
      case "CONTACT":
        element.querySelector(".Contact").scrollIntoView({ behavior: 'smooth', block: 'start' })
        break;  
      case "CV":
        break;
      default:
        break            
    }
  
  }
  const animationSpeed = 0.4;
  useEffect(() => {
      const element = ref.current;

      element.querySelector(".Home").scrollIntoView()

      //Animation for the heading    
      gsap.fromTo(element.querySelectorAll(".heading"),{x:-100},{x:0,
          stagger: animationSpeed,
          scrollTrigger: element.querySelectorAll(".heading")})   
          
      gsap.fromTo(element.querySelector(".hello"),1,{opacity:0,filter: "blur(8px)"},{opacity:1,filter: "blur(0px)"})
      gsap.fromTo(element.querySelector(".im"),1,{opacity:0,filter: "blur(8px)"},{opacity:1,filter: "blur(0px)"},"-="+animationSpeed)
      gsap.fromTo(element.querySelector(".fullname"),1,{opacity:0,filter: "blur(8px)"},{opacity:1,filter: "blur(0px)"},"-="+animationSpeed)
      gsap.fromTo(element.querySelector(".firstname"),1,{y:-50,opacity:0,filter: "blur(8px)"},{y:0,opacity:1,filter: "blur(0px)"},"-="+animationSpeed)
      gsap.fromTo(element.querySelector(".resume"),1,{opacity:0,filter: "blur(8px)"},{opacity:1,filter: "blur(0px)"},"-="+animationSpeed)
      gsap.fromTo(element.querySelector(".links"),1,{opacity:0,filter: "blur(8px)"},{opacity:1,filter: "blur(0px)"},"-="+animationSpeed)
      gsap.fromTo(element.querySelector(".button"),1,{opacity:0,filter: "blur(8px)"},{opacity:1,filter: "blur(0px)"},"-="+animationSpeed)
      gsap.fromTo(element.querySelector(".overlay"),1,{filter: "opacity(100%)",zoom:"1.5"},{filter: "opacity(60%)",zoom:"1",ease:Power2.easeInOut},"-="+animationSpeed)
      gsap.fromTo(element.querySelector(".background"),1,{width:"150%"},{width:"100%",ease:Power2.easeInOut},"-=1")
      gsap.fromTo(element.querySelector(".nav"),1,{opacity:0,y: -100},{opacity:1,y: 0, onComplete: animationFinished },"-=1");
      
      return () => {
        gsap.kill()
      };
    
   }, []);


  
    

  const styles = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={styles.container} ref={ref}>
        <Navbar handleNavClick={handleNavClick}/>
        <HeroSection/>
          <AboutMe/>
          <Work/>
          <Projects/>
          <Contact/>
          <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
