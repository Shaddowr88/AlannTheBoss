import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import CardDev from "../../cardDev";
import Hidden from "@material-ui/core/Hidden";
import DEMO from "../../static/images/HAMONIC.jpg";

class ProjectPage extends React.Component {
    render() {
        return <Container direction="row" >
            <Hidden only={['xs']}>
                <div className="mydiv" style={{
                    float: "right", width: "40%", backgroundImage: `url(${DEMO})`,
                    backgroundSize: "cover", height: "20em", borderRadius: "5px"
                }}>
                </div>
            </Hidden>
            <Grid spacing={2} >
                <Grid item xs={12} sm={6} >
                <h1 style={{fontSize:"3em",fontStyle: "bold"}}> Liste de techno </h1>
                <h3>Je participe à la création de votre projet numérique.
                    Qu’il s’agisse d’un site vitrine, e-commerce ou une application ios/android
                </h3>
            </Grid>
                 <Grid item xs={12} sm={6}><CardDev/></Grid>
            </Grid>

        </Container>
    }
}
export default ProjectPage;
