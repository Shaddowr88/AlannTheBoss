import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import CardDev from "../ Steering/cardDev";
import ILLUS2 from "../../static/images/illustration02.png";
import Hidden from "@material-ui/core/Hidden";
import BannerIll02 from "../Banners/bannerIllus02";

class ProjectPage extends React.Component {
    render() {
        return <Container direction="row" >
            <div>
                <Hidden only={['xs']}>
                    <div style={{position:"relative", width:"4em",}}>
                        <BannerIll02/>
                    </div>
                </Hidden >

                <Hidden only={['xl','md','lg','sm', 'xs']}>
                    <div style={{position:"relative", width:"4em", border:"black",}}>
                        <img  src={ILLUS2} alt="" style={{position:"absolute",
                            filter: "blur(5px)","height": "15em",bottom: "15px", left:"6em"  }}/>
                        <img  src={ILLUS2} alt="" style={{position:"absolute",
                            height:"15em", bottom: "1em", left:"7em" }} />
                    </div>
                </Hidden >
            </div>

            <Grid container spacing={2} style={{paddingLeft:"4em" }} >

                <Grid >
                    <Grid className="mydiv" item xs={12} sm={6} md={3}  spacing={3} direction="row"
                          style={{  color: "#f5f5f5",
                              borderRadius: "8px", position:"absolute", right:"3em"}}>
    <h3 style={{ padding:'2em'}} >
        Je participe à la création de votre projet numérique.
            Qu’il s’agisse d’un site vitrine, e-commerce ou une application ios/android
        </h3>
                        <CardDev/>
                    </Grid>

                    <Grid className="mydiv" item  spacing={3}

                          style={{  color: "#f5f5f5", padding: "2em", borderRadius: "8px",}}>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    }
}
export default ProjectPage;
