import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import CardDev from "../../cardDev";
import ILLUS2 from "../../static/images/illustration02.png";
import Hidden from "@material-ui/core/Hidden";


class ProjectPage extends React.Component {
    render() {
        return <Container direction="row" >

            <div>
                <Hidden only={['xs']}>
                    <div className="myimg" style={{position:"relative", width:"4em", border:"black",}}>
                    <img  src={ILLUS2} alt="" style={{position:"absolute",
                        filter: "blur(5px)","height": "26em", marginTop:"3em",top: "2em", left:"11em" }}/>
                    <img  src={ILLUS2} alt="" style={{position:"absolute",
                        height:"26em", marginTop:"3em",top: "2em", left:"10em" }} />
                </div>
                </Hidden >
                <Hidden only={['xl','md','lg','sm', 'xs']}>
                    <div style={{position:"relative", width:"4em", border:"black",}}>
                        <img  src={ILLUS2} alt="" style={{position:"absolute",
                            filter: "blur(5px)","height": "15em", marginTop:"3em",bottom: "15px", left:"6em"  }}/>
                        <img  src={ILLUS2} alt="" style={{position:"absolute",
                            height:"15em", marginTop:"3em",bottom: "1em", left:"7em" }} />
                    </div>
                </Hidden >

            </div>
            <Grid container spacing={2} >
                <Grid  xs={12} sm={12} lg={5} style={{paddingRight:"10em"}} >
                    <h3>
                        Je participe à la création de votre projet numérique.
                        Qu’il s’agisse d’un site vitrine, e-commerce ou une application ios/android
                    </h3>
                </Grid>
                <Grid className="mydiv" item xs={12} sm={6} md={3} lg={3} spacing={3} container zIndex="modal"
                          direction="row"
                          justify="center"
                          alignItems="center"
                          style={{ backgroundColor: "#F27127", color: "#f5f5f5", padding: "1em",
                              borderRadius: "8px", marginTop:"1em"}}>
                    <CardDev/>
                </Grid>
            </Grid>
        </Container>
    }
}
export default ProjectPage;
