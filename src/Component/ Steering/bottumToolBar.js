import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ScrollspyNav from "react-scrollspy-nav";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";


class BottomToolBarApp extends React.Component {
    render() {
        return  <div>
                        <Grid item xs={12} sm={12} container direction="row" justify="center" style={{padding:"3em", color:"white"}}>
                            <Grid  xs={12} sm={3} style={{padding:"1em", margin:"1em",
                                listStyleType: "disc", borderRadius:"8px"}}>
                                <h3> À Propos </h3>
                                <ol style={{listStyleType:"circle"}}>
                                    <li>Création  logo, cartes de visite</li> <br/>
                                    <li>Concept graphique et web design</li><br/>
                                    <li>Packaging</li><br/>
                                    <li>Templates Web</li><br/>
                                </ol>
                            </Grid>

                            <Divider orientation="vertical" flexItem />
                            {/* <Grid xs={12} sm={3} style={{padding:"1em", margin:"1em", borderRadius:"8px"}}>
                                <h3> Dev</h3>
                                <ol style={{listStyleType: "circle"}}>
                                    <li>Site vitrine, e-commerce, intranet</li><br/>
                                    <li>Concept et prototype</li><br/>
                                    <li>Language, HTML, CSS, JavaScript,</li><br/>
                                    <li>Mise en place et  gestion de CMS Wordpress, wooCommerce</li><br/>
                                </ol>
                            </Grid>*/}
                            <Grid xs={12} sm={3} style={{padding:"1em", margin:"1em", borderRadius:"8px"}}>
                                <h3> Contact</h3>
                                <ol style={{listStyleType: "circle"}}>
                                    <li>Tel: 06.52.80.29.30</li><br/>
                                    <li>Mail: LS@gmail.com</li><br/>
                                    <li>LinkDin: ls</li><br/>
                                    <li>Github: ls</li><br/>
                                </ol>
                            </Grid>
                        </Grid>
            </div>
    }
}
export default BottomToolBarApp;
