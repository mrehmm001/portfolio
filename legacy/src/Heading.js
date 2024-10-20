import { Divider, Typography } from "@mui/material";
const styles = {
    heading:{
        fontWeight:500,
    }
}


function Heading({customClass,heading, alignMent="left",variant="h4"}) {
    return (
        <div>
            <Divider className={customClass}  textAlign={alignMent} style={{"marginBottom":"3em"}}>           
                <Typography  style={styles.heading} variant={variant}>{heading}</Typography>
            </Divider>

        </div>     

     );
}

export default Heading;