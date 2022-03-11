import { Container, Grid,Button,Box,IconButton,Drawer,List,ListItem,Paper, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';

const styles = {
    navBar:{
        position:"absolute",
        zIndex:3,
        width:"100%",
        margin:"0px",
        padding:"20px",
        transition: "background-color 500ms linear"

    },
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


    function NavButton({width,click,linkName}){
        return(
            <Grid item style={{width:width}}>
                <Button style={{width:width}} onClick={()=>handleNavClick(linkName)} variant={linkName=="CV"?"outlined":"text"}>{linkName}</Button>
            </Grid>
        )
    }

    const [state,setState] = useState(false)
    const [background,setBackground]=useState("transparent")
    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position<10){
            setBackground("transparent")
        }else{
            setBackground("primary")
        }
    };

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

        <Box className="nav" color="red" style={styles.navBar}>
            {/* For larger screens */}
            <Container sx={{ display: { xs: 'none', md: 'block' } }}>
                <Grid container justifyContent="space-between" >
                    {navlinks.map(link=><NavButton linkName={link}/>)}    
                </Grid>
            </Container>

            {/* For Smaller Screens */}
            <Container sx={{ display: { xs: 'block', md: 'none' } }}>
                <IconButton onClick={()=>toggelDrawer(true)} style={styles.menuIconButton}>
                    <MenuIcon style={styles.menuIcon}/>                    
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

        </Box> 
     );
}

export default Navbar;