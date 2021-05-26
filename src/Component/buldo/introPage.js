import React from 'react';
import Grid from '@material-ui/core/Grid';
import Row from '@material-ui/core/Grid';
import CardDev from "../ Steering/cardDev";
import CardGrid from "../ Steering/card";

const IntroPage =()=>(
    <>
        <Grid container spacing={2} item xs={12} sm={12}>
            <Grid item xs={12} sm={12} container
                    direction="row" >
                <Grid item xs={12} sm={7} style={{borderBottom:"solid"}}>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} container direction="row">
                <Row xs={12} sm={12} md={3} style={{padding:"1em"}}>
                </Row> 
                    <Row xs={12} sm={12} md={8} style={{padding:"1em",backgroundColor:"#F2A922",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                        <h2>
                        À votre service
                    </h2>
                    <p> J'interviens dans la création de votre <strong>identité de marque</strong>. Ensemble nous collaborons, 
                    afin de mettre en mouvement votre vision et lui apporter une <strong>personnalité unique</strong>. 
                    Ce travail de profondeur permettra de définir les outils print et digitaux<strong> (logo, papeterie, packaging, siteWeb)</strong> de votre entité.  
                    </p>
                </Row>
                
                <Row xs={12} sm={12} md={3} style={{padding:"1em",backgroundColor:"#F2A922",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h1>DEVELOPPEMENT</h1>
                    <Grid ></Grid>
                </Row>
                <Grid xs={12} sm={12} md={8} style={{padding:"1em"}}>
                        <Grid></Grid>
                        <Grid></Grid>
                        
                        <p style={{fontStyle: "bold", fontWeight:"lighter", fontSize:"2em"}} className="cuttinText">
                                        Pour créer un design de qualité,il faut bien réfléchir à ce que l’on veut faire et au cadre dans lequel cela s’inscrit, avant même de commencer.
                        </p>
                        <p style={{fontStyle: "italic", fontWeight:"lighter", fontSize:"2em"}} className="cuttinText"> - S.K  </p>
                        <CardDev/>
                </Grid>
                
                <Row xs={12} sm={12} md={3} style={{padding:"1em"}}>
                    <h1>DESIGN</h1>
                    
                </Row>
                <Row xs={12} sm={12} md={8} style={{padding:"1em",backgroundColor:"#F2A922",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                        <p style={{fontStyle: "bold", fontWeight:"lighter", fontSize:"2em"}} className="cuttinText">
                            Pour créer un design de qualité,il faut bien réfléchir à ce que l’on veut faire et au cadre dans lequel cela s’inscrit, avant même de commencer.
                        </p>
                        <p style={{fontStyle: "italic", fontWeight:"lighter", fontSize:"2em"}} className="cuttinText"> - S.K</p>
                    <CardGrid/>
                </Row>
            </Grid>
        </Grid>
    </>
)
export default IntroPage;
