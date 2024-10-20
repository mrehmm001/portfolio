import { Container, Grid,Button,Box,IconButton,Drawer,List,ListItem,Paper, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';

const styles = {
    menuIcon:{
        fontSize:"2.5em"
    },
    menuIconButton:{
        float:"right",
    }
}


const navlinks=["HOME","ABOUT ME","EXPERIENCE","PROJECTS","CONTACT","CV"]

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


function Navbar({width,handleNavClick}) {
    const [state,setState] = useState(false)
    const [navState,setNavState]=useState({background:"transparent",padding:"15px"})
    const [mobileNavState,setMobileNavState] = useState("")

    function NavButton({width,click,linkName}){
        return(
            <Grid item style={{width:width}}>
                <Button style={{width:width}} onClick={()=>{setState(false);setMobileNavState(linkName); handleNavClick(linkName)}} variant={linkName=="CV"?"outlined":"text"}>{linkName}</Button>
            </Grid>
        )
    }

    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position<10){
            setNavState({background:"transparent",padding:"15px"})
        }else{
            setNavState({background:"",padding:"8px",top:navState.top})
        }
    };

    useEffect(() => {
        console.log("test")
        handleNavClick(mobileNavState)
    },[state]); 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    const toggelDrawer=(open)=>{
        setState(open)
    }

    return (

        <Paper elevation={navState.background!="transparent"? 2 : 0} className="nav" sx={{
            position:"fixed",
            zIndex:3,
            background:navState.background,
            width:"100%",
            margin:"0px",
            padding:navState.padding,
            transition: "all 200ms linear"
    
        }}>
            {/* For larger screens */}
            <Container sx={{ display: { xs: 'none', md: 'block' } }}>
                <Grid container justifyContent="space-between" >
                    {navlinks.map(link=><NavButton linkName={link}/>)}    
                </Grid>
            </Container>

            {/* For Smaller Screens */}
            <Container sx={{ display: { xs: 'block', md: 'none' } }}>
                <IconButton onClick={()=>toggelDrawer(true)} style={styles.menuIconButton}>
                    <MenuIcon fontSize="medium"/>                    
                </IconButton>
                <Drawer 
                      sx={{ display: { xs: 'block', md: "none" } }}
                      anchor="right"
                      open={state}>

                    <DrawerHeader style={{width:"50vw"}}>
                        <IconButton onClick={()=>toggelDrawer(false)}>
                            <ClearIcon fontSize="large" />
                        </IconButton>
                    </DrawerHeader> 
                    <Divider/>
                    <Box style={{display:"flex",height:"50%",marginTop:"auto",marginBottom:"auto",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <List style={{display:"flex",height:"100%",flexDirection:"column",justifyContent:"space-between"}}>
                            {navlinks.map(link=><ListItem ><NavButton width="100%" linkName={link}/></ListItem>)}
                        </List>
                    </Box>

                </Drawer>
                
            </Container>

        </Paper> 
     );
}

export default Navbar;