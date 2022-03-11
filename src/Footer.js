import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
const styles = {
    container:{
        width:"100%",
        height:"100%",
        zIndex:1,
        position:"relative",
        overflow:"hidden"
        
    },

}

function Footer() {
    return ( 
        <Paper style={styles.container}>
            <Container>
                <Box p={2}>
                 <Typography style={{textAlign:"center"}} color="textSecondary">@2022 Muneeb Rehman</Typography>
                </Box>

            </Container>
        </Paper>
     );
}

export default Footer;