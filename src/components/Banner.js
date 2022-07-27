import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Corousal from './Corousal';

const useStyles = makeStyles(() => ({
    back:{
        backgroundImage: 'url(./banner2.jpg)',
    },
    bannerContent:{
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline:{
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    }
}));

const Banner = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.back}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                    <Typography varient='h2' style={{ fontWeight: "bolder", marginBottom: 15, fontFamily: "Montserrat", fontSize: 50 }}>
                    Coin Hunter
                </Typography>

                  <Typography varient= "subtitle2" style={{color: "darkgrey", textTransform: "capitalize"}}>
                      Get all the Info regarding your favorite Crypto Currency
                </Typography>
            </div>
            <Corousal/>
        </Container>
    </div>
  )
}

export default Banner