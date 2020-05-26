import React from 'react';
import Grid from '@material-ui/core/Grid';


class IntroPage extends React.Component {
    render (){
        return <Grid container spacing={2} item xs={12} sm={12}>
            <Grid item xs={12} sm={12} container
                  direction="row" style={{padding:'20px', paddingTop:"3em", color: "white"}}>
                <Grid item xs={12} sm={7} style={{borderBottom:"solid"}}>
                    <h1 style={{fontSize:"4em"}}> SKILL's </h1>
                    <h2>
                        Des compétences à votre service
                    </h2>
                </Grid>

                <Grid item xs={12} sm={7} >
                    <p>
                        Quam ob rem id primum videamus, si placet, quatenus amor in amicitia
                        progredi debeat. Numne, si Coriolanus habuit amicos, ferre contra patriam
                        arma illi cum Coriolano debuerunt? num Vecellinum amici regnum adpetentem,
                        num Maelium debuerunt iuvare?

                        Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii
                        montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus
                        Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae
                        coniunxit.

                    </p>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} container direction="row">
                <Grid  xs={12} sm={3} style={{padding:"1em",backgroundColor:"#F2A922", margin:"1em",
                    listStyleType: "disc", borderRadius:"8px", boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h3>DESIGN</h3>

                    <ol style={{listStyleType:"circle"}}>
                        <li>Création  logo, cartes de visite</li> <br/>
                        <li>Concept graphique et web design</li><br/>
                        <li>Packaging</li><br/>
                        <li>Templates Web</li><br/>
                        <li>Plaquettes publicitaires</li><br/>
                        <li>Newsletters</li><br/>
                    </ol>

                </Grid>
                <Grid xs={12} sm={4} style={{padding:"1em", backgroundColor:"#F27127", margin:"1em", borderRadius:"8px",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <h3>DEV</h3>

                    <ol style={{listStyleType: "circle"}}>
                        <li>Site vitrine, e-commerce, intranet</li><br/>
                        <li>Concept et prototype</li><br/>
                        <li>Language, HTML, CSS, JavaScript,</li><br/>
                        <li>Mise en place et  gestion de CMS Wordpress, wooCommerce</li><br/>
                        <li>RÉFÉRENCEMENT NATUREL SEO</li><br/>
                        <li>React, ReactNative, AngularJS, Ionic, Laravel, Symphony</li><br/>
                        <li>Applications  cross-plateforme iOs et Android</li><br/>
                        <li>SQL, PHP, NodeJS, Ajax</li><br/>
                        <li>Application des bonne pratique du web</li><br/>
                    </ol>
                </Grid>
                <Grid xs={12} sm={3} style={{padding:"1em",backgroundColor:"#F2A922", margin:"1em", borderRadius:"8px",
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

                </Grid>
            </Grid>

        </Grid>
    }
}
export default IntroPage;
