import React from 'react';
import Grid from '@material-ui/core/Grid';
import Row from '@material-ui/core/Grid';


const IntroPage =()=>(
<>
<Grid container spacing={2} item xs={12} sm={12}>
            <Grid item xs={12} sm={12} container
                  direction="row" >
                <Grid item xs={12} sm={7} style={{borderBottom:"solid"}}>
                
                    <h2>
                        À votre service
                    </h2>
                </Grid>
                
            </Grid>
            <Grid item xs={12} sm={12} container direction="row">
                  <Row xs={12} sm={12} md={8} style={{padding:"1em",backgroundColor:"#505050",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h3>SOFT SKILL'S</h3>

                    <ol style={{listStyleType: "circle"}}>
                        <li>Créatif</li><br/>
                        <li>Curiosité intellectuelle</li><br/>
                        <li>Capacité à résoudre les problèmes</li><br/>
                        <li>Sens du travail en équipe</li><br/>
                        <li>Esprit critique</li><br/>
                        <li>Bon communicant</li><br/>
                    </ol>
                </Row>
                <Row xs={12} sm={12} md={3} style={{padding:"1em",backgroundColor:"#F2A922",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h1>SKILL'S</h1>
                </Row> 
                <Row xs={12} sm={12} md={3} style={{padding:"1em",backgroundColor:"#F2A922",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                   <h1>DEVELOPPEMENT</h1>
                </Row>
                <Row xs={12} sm={12} md={8} style={{padding:"1em",backgroundColor:"#505050",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h1>DESIGNdistrib</h1>

                    <ol style={{listStyleType: "circle"}}>
                        <li>Créatif</li><br/>
                        <li>Curiosité intellectuelle</li><br/>
                        <li>Capacité à résoudre les problèmes</li><br/>
                        <li>Sens du travail en équipe</li><br/>
                        <li>Esprit critique</li><br/>
                        <li>Bon communicant</li><br/>
                    </ol>

                </Row>
                <Row xs={12} sm={12} md={8} style={{padding:"1em",backgroundColor:"#505050",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h1>DESIGNdes</h1>

                    <ol style={{listStyleType: "circle"}}>
                        <li>Créatif</li><br/>
                        <li>Curiosité intellectuelle</li><br/>
                        <li>Capacité à résoudre les problèmes</li><br/>
                        <li>Sens du travail en équipe</li><br/>
                        <li>Esprit critique</li><br/>
                        <li>Bon communicant</li><br/>
                    </ol>

                </Row>
                <Row xs={12} sm={12} md={3} style={{padding:"1em",backgroundColor:"#F2A922",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h1>DESIGN</h1>
                </Row>
                <Row xs={12} sm={12} md={11} style={{padding:"1em",backgroundColor:"#505050",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h3>SOFT SKILL'S</h3>

                    <ol style={{listStyleType: "circle"}}>
                        <li>Créatif</li><br/>
                        <li>Curiosité intellectuelle</li><br/>
                        <li>Capacité à résoudre les problèmes</li><br/>
                        <li>Sens du travail en équipe</li><br/>
                        <li>Esprit critique</li><br/>
                        <li>Bon communicant</li><br/>
                    </ol>
                </Row>
            </Grid>
            </Grid>
        </>
)
export default IntroPage;
