import React from 'react';
import { Container, Typography, Button, Grid} from "@material-ui/core";

const Footer = () => {
    const isEmpty = true;
    
    const EmptyCard = ( ) => (
        <Typography variant="subtitle1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, possimus? Dolorem nobis ipsum tempora explicabo possimus aliquam beatae ab culpa ratione perferendis ea harum tempore voluptate, voluptatibus eaque, unde veniam.</Typography>
    )

    const FilledCart = ( ) => (
        <> 
            <Grid Container spacing ={3}>
                
            </Grid>
        </>
    )
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3"> </Typography>
            {isEmpty ? <EmptyCard/> : <FilledCart/>}
        </Container>
    )
}

export default Footer;
