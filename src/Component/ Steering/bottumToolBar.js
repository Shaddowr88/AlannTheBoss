import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ScrollspyNav from "react-scrollspy-nav";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


class BottomToolBarApp extends React.Component {
    render() {
        return  <div>
                        <Grid item xs={12} sm={12} container direction="row" justify="center" style={{padding:"3em"}}>
                            <Grid  xs={12} sm={3} style={{padding:"1em", margin:"1em",
                                listStyleType: "disc", borderRadius:"8px"}}>
                                <h3> Design</h3>
                                <ol style={{listStyleType:"circle"}}>
                                    <li>Création  logo, cartes de visite</li> <br/>
                                    <li>Concept graphique et web design</li><br/>
                                    <li>Packaging</li><br/>
                                    <li>Templates Web</li><br/>
                                </ol>

                            </Grid>
                            <Grid xs={12} sm={3} style={{padding:"1em", margin:"1em", borderRadius:"8px"}}>
                                <h3> Dev</h3>
                                <ol style={{listStyleType: "circle"}}>
                                    <li>Site vitrine, e-commerce, intranet</li><br/>
                                    <li>Concept et prototype</li><br/>
                                    <li>Language, HTML, CSS, JavaScript,</li><br/>
                                    <li>Mise en place et  gestion de CMS Wordpress, wooCommerce</li><br/>
                                </ol>
                            </Grid>
                            <Grid xs={12} sm={3} style={{padding:"1em", margin:"1em", borderRadius:"8px"}}>
                                <h3> Soft Skill's</h3>
                                <ol style={{listStyleType: "circle"}}>
                                    <li>Créatif</li><br/>
                                    <li>Curiosité intellectuelle</li><br/>
                                    <li>Capacité à résoudre les problèmes</li><br/>
                                    <li>Sens du travail en équipe</li><br/>
                                </ol>
                            </Grid>
                        </Grid>
            </div>
    }
}
export default BottomToolBarApp;
