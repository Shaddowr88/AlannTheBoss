import React, { Component } from "react";
import IntroPage from "./Component/buldo/introPage";
import Container from "@material-ui/core/Container";
import DEsignPage from "./Component/buldo/DEsignPage";
import ProjectPage from "./Component/buldo/projectPage";
import ToolBarApp from "./Component/ Steering/toolBar";
import $ from "jquery";
import DEMO from "./static/images/HAMONIC.jpg";
import BannerIndex from "./Component/buldo/IndexBanner";
import Hidden from "@material-ui/core/Hidden";
import BottomToolBarApp from "./Component/ Steering/bottumToolBar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


class App extends Component {
    componentDidMount() {
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() < 100) {
                    $(".Welcome").hide();
                    $(".NavName").css("color", "white");
                } else{
                    $(".Welcome").fadeIn( 1000 ).css({background: "#102D40", boxShadow: "-1px 8px 17px 6px rgba(0,0,0,0.28)"});
                    $(".NavName").css("font-weight", "bold");
                }
                if ($(document).scrollTop() > 550) {
                    $(".mydiv2").fadeIn( "slow" );
                } else {
                    $(".mydiv2").fadeOut( "slow" );
                }
                if ($(document).scrollTop() > 1000) {
                    $(".mydiv").show( 1000 );
                } else {
                    $(".mydiv").fadeOut( "slow" );
                }
            });
        });
    }

    render() {
        return (
            <div style={{backgroundColor:"#102D40"}}>
                {/* <span className="Welcome" style={{ fontSize: "4em", position:"absolute"+"bottom" }}>Bienvenue ! </span>
                <Hidden only={['xs']}><ToolBarApp/></Hidden> */}
                <ToolBarApp />
                <div>

                    <BannerIndex/>
                    {/* introduction Component */}
                    {/* Skill component */}
                    <Container  id="section_1"><IntroPage/></Container>

                    <Divider />
                    {/* animate div 01 */}
                    <Container id="section_2"> <Hidden only={'xs'}>
                        <div md={12} xs={4} style={{height: "20em",color:"white",
                            borderRadius:"5px", marginLeft:"1em", marginTop:"1em", backgroundSize:"cover", padding:"3em"}}>
                            <Grid md={12} xs={4}></Grid>

                             <Typography variant="h4"  gutterBottom
                                            style={{fontStyle: "italic", fontWeight:"lighter",paddingTop:"1em"}}>« Les bons  </Typography>
                                <Grid md={12} xs={1}>
                                    <Typography variant="h2" component="h2" > DESIGNS</Typography>
                                </Grid>
                                <Grid md={12} xs={12}>
                                <Typography variant="h4" gutterBottom style={{fontStyle: "italic", fontWeight:"lighter"}}>
                                ne dépendent pas du support que l’on utilise. Pour créer un design de qualité,
                                il faut bien réfléchir à ce que l’on veut faire et au cadre dans lequel cela s’inscrit, avant même de commencer. »
                            </Typography>
                                <Typography> - Susan Kare</Typography>
                            </Grid>
                        </div></Hidden>
                        <Hidden only={['sm', 'lg', 'md']}>  <Typography variant="h2" component="h2" > DESIGNS</Typography> </Hidden>
                        {/*<Link to="/gallery">Visit the Gallery</Link>*/}
                        {/* Design component */}
                        <DEsignPage/>
                    </Container>

                    <br/>
                    <Divider />
                    <Hidden only={['sm', 'lg', 'md']}>
                        <br/> <div className="mydiv" style={{

                        width: "100%",
                        marginTop:"4em",
                        backgroundImage: `url(${DEMO})`,
                        backgroundSize: "cover",
                        height: "20em",
                        borderRadius: "5px"
                    }}>
                    </div>
                    </Hidden>
                    <br/><br/> <br/> <br/> <br/>

                    <Container maxWidth="xl" id="section_3" style={{ color:"white", paddingTop:"5em", }} >
                        <Hidden only={'xs'}>
                        <Grid md={12} xs={4} style={{ height: "20em", borderRadius:"5px", marginLeft:"3em",
                            backgroundSize:"cover"}}>
                            <Grid md={12} xs={4}><Typography variant="h2"> DEVELOPPEMENT</Typography></Grid>
                            <Grid md={10} xs={4}><Typography variant="h4" gutterBottom style={{fontStyle: "italic", fontWeight:"lighter"}}>
                                Mesurer la progression du développement d’un logiciel à l’aune de ses lignes de code revient
                                à mesurer la progression de la construction d’un avion à l’aune de son poids </Typography>
                                <Typography> - Bill Gates</Typography>
                            </Grid>
                        </Grid>
                        </Hidden>
                        <ProjectPage/>
                    </Container>
                    <Container>
                        <Divider />
                        <BottomToolBarApp/>
                    </Container>
                </div>

            </div>
        );
    }
}
export default App;
