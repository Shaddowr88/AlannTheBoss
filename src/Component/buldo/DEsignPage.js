import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardGrid from "../../card";
import Typography from "@material-ui/core/Typography";

class DesignPage extends React.Component {
    render() {
        return <Grid container
                     direction="row-reverse"
                     spacing={4} item xs={12} sm={12} >
            <Grid container sm={6} md={8} justify="flex-start" alignItems="center"
                  style={{paddingLeft: "1em", color: "white", marginLeft:"3em"}}>
                <Grid item xs={12} sm={9} style={{borderBottom: "solid",}}>
                    <h1 style={{fontSize:"4em"}}> Design </h1>
                    <h3> Quam ob rem id primum videamus, si placet, quatenus amor in amicitia progredi deNumne,</h3>
                </Grid>
                <Grid item xs={12} sm={9} md={10} bgcolor="background.paper"
                      color="text.primary"
                      textAlign="left" style={{marginRight: "4em", marginBottom: "1em", }}>
                    <Typography textAlign="left">
                        Graphiste freelance depuis trois ans, je collabore à la création de votre identité de marque
                        et conçois les outils print et digitaux (logo, papeterie, packaging, siteWeb) nécessaires
                        à la communication de vos projets.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={3} md={3} spacing={3} container zIndex="modal"
                  direction="row"
                  justify="center"
                  alignItems="center"
                  style={{ backgroundColor: "#888888", color: "#f5f5f5", padding: "1em",
                      borderRadius: "8px", margingTop: "1em"
                  }}>
                <h1 >Projets récent</h1 ><br/> <br/>
                <CardGrid/>
            </Grid>

        </Grid>

    }

}
export default DesignPage;
