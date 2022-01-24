import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const AboutUs = () => {
    const classes = useStyles();
    return(
        <>
            <div className={classes.root}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={6}>
                            <img src="https://cpimg.tistatic.com//85410/9/template_photo_5.jpg" alt="Puthu" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.title} variant="h6">
                            Raghuvir Packaging has been a committed company of Packaging Solutions since recent inception in Rajkot, Gujarat, India. With an aim to deliver perfect solutions to our esteemed patrons, we have grown as a noted manufacturer and supplier. Our range comprises Corrugated Box, Corrugated Packaging Boxes, Cardboard Packing Boxes, Corrugated Sheet, Liners Box, Duplex Box, Color Box and Cartons. Being a family owned business since various generation following repeat customs, we have been satisfying a large clientele in the market. We have been operating under the proprietorship of Mr. Pritesh Mashru and in assistance with Mr. Kishor Mashru, the company has earned a pronounced name. They have trained a team of skilled personnel who ensure bulk quantity productions within least time frames.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default AboutUs;