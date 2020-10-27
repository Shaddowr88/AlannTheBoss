import React from 'react';
import Grid from "@material-ui/core/Grid";

class BottomToolBarApp extends React.Component {
    render() {
        return <div>
            <Grid item xs={12} sm={12} container direction="row" style={{ color:"white", }}>

                <Grid  xs={12} sm={3} style={{padding:"1em", margin:"1em", listStyleType: "disc", borderRadius:"8px"}}>
    <h3 style={{padding:"1em", borderRadius:"8px"}}> À Propos </h3>
                    <ol style={{listStyleType:"circle"}}>
                        <li>Création  logo, cartes de visite</li> <br/>
                        <li>Concept graphique et web design</li><br/>
                        <li>Packaging</li><br/>
                        <li>Templates Web</li><br/>
                    </ol>
                </Grid>
                <Grid xs={12} sm={3} style={{padding:"1em", paddingTop:"6em", margin:"1em", borderRadius:"8px"}}>
                                <ol style={{listStyleType: "circle"}}>
                                    <li>Site vitrine, e-commerce, intranet</li><br/>
                                    <li>Concept et prototype</li><br/>
                                    <li>Language, HTML, CSS, JavaScript,</li><br/>
                                    <li>Mise en place et  gestion de CMS Wordpress, wooCommerce</li><br/>
                                </ol>
                            </Grid>

                <Grid xs={12} sm={2} style={{padding:"1em", margin:"1em", borderRadius:"8px"}}>
    <h3 style={{padding:"1em", borderRadius:"8px"}} > Contact</h3>
                    <ol style={{listStyleType: "circle"}}>
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
