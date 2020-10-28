import React, { Component } from "react";
import IntroPage from "./Component/buldo/introPage";
import Container from "@material-ui/core/Container";
import ProjectPage from "./Component/buldo/projectPage";
import ToolBarApp from "./Component/ Steering/toolBar";
import $ from "jquery";
import BannerIndex from "./Component/buldo/IndexBanner";
import Hidden from "@material-ui/core/Hidden";
import BottomToolBarApp from "./Component/ Steering/bottumToolBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DEsignPage from "./Component/buldo/DEsignPage";
import INTRO from "./static/images/Banner.png";


class App extends Component {
    componentDidMount() {
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() > 40) {
                    $(".Welcome").fadeIn( 200 ).css({background: "#102D40", boxShadow: "-1px 8px 17px 6px rgba(0,0,0,0.28)"});
                    $(".NavName").css("font-weight", "bold");
                    $(".homeB").css("display", "contents")
                } else{
                    console.log ("scrollTop");
                    $(".Welcome").hide();
                    $(".NavName").css("color", "white");
                    $(".homeB").css("display", "none")
                }
                if ($(document).scrollTop() > 550) {
                    $(".mydiv2").fadeIn( "slow" );
                } else {
                    $(".mydiv2").fadeOut( "slow" );
                }
                if ($(document).scrollTop() > 1890) {
                    $(".mydiv").show( 500 );
                    $(".mydiv").fadeIn( 1000 );
                } {/*else {
                    $(".mydiv").fadeOut( "slow" );
                */}
                if ($(document).scrollTop() < 450) {
                    $(".img").fadeIn( 1500 );
                }else{
                    $(".img").fadeOut( 500 );}

            });
        });
    }
    render() {
        return (
            <div>
                {/* -------------------------------------------------- Nav Component -------------------------------------------------- */}
                <ToolBarApp />
                <div>
                    {/* -------------------------------------------------- introduction Component -------------------------------------------------- */}
                    <BannerIndex/>
                    {/* -------------------------------------------------- Skill component -------------------------------------------------- */}
                    <Container  id="SKILLS" style={{ color:"white", paddingTop:"7em", paddingLeft:"3em" }}>
                        <IntroPage/>
                    </Container>

                    {/* -------------------------------------------------- animate div 01 -------------------------------------------------- */}
                    <Container id="DESIGN">
                        <Hidden only={'xs'}>
                            <div  md={12} xs={4}  style={{height: "20em",color:"white",
                            marginLeft:"1em", marginTop:"5em", paddingTop:"2em", marginBottom:"2em"}}>
                                <Grid md={12} xs={4}></Grid>
                                    <Grid md={12} xs={1}>
                                    <Typography  style={{ fontStyle: "bold", fontSize:"6em"}} > DESIGN </Typography>
                                </Grid>
                                <Grid md={12} xs={12} >
                                    <p style={{fontStyle: "bold", fontWeight:"lighter", fontSize:"2em"}} className="cuttinText">

            Pour créer un design de qualité,il faut bien réfléchir à ce que l’on veut faire et au cadre dans lequel cela s’inscrit, avant même de commencer.
                                    </p>
                                    <p style={{fontStyle: "italic", fontWeight:"lighter", fontSize:"2em"}} className="cuttinText"> - S.K  </p>
                                </Grid>
                            </div>
                        </Hidden>
                    {/*-------------------------------------------------- Design component --------------------------------------------------*/}
                        <DEsignPage/>
                    {/*-------------------------------------------------- End Design component --------------------------------------------------*/}
                    </Container>

                    <br/> <br/><br/> <br/> <br/> <br/>

                    <Container maxWidth="xl" id="DEV" style={{ color:"white", paddingTop:"3em",paddingBottom:"3em" }} >
                        <Grid md={12} xs={12} style={{ borderRadius:"5px",backgroundSize:"cover"}}>
                            <Hidden only={['sm', 'lg', 'md','xl']}>
                            <Grid>
                                <Typography variant="h2" component="h2" > DEV.</Typography>
                            </Grid>
                            </Hidden>

                            <Hidden only={'xs'}>
            {/*  <Grid className="mydiv" style={{display:"none"}} md={10} xs={12} sm={12}>
                                    <p className="cuttinText" style={{color:"white", fontStyle: "bold", fontWeight:"lighter", fontSize:"2em"}}>
                                        Mesurer la progression du </p>
                                        <Typography className="cuttinText" style={{ fontStyle: "bold", fontSize:"6em", top:"30em"}} > DEVELOPPEMENT </Typography>
                                        <p className="cuttinText" style={{color:"white", fontStyle: "italic", fontWeight:"lighter", fontSize:"2em", top:"30em"}}>
                                            d’un logiciel à l’aune de ses lignes de code revient à mesurer la progression de la construction d’un avion à l’aune de son poids
                                        </p>
                                    <p style={{fontStyle: "italic", fontWeight:"lighter", fontSize:"2em"}} className="cuttinText">
                                        - Bill Gates
                                    </p>
                                </Grid>*/}

            <Grid className="mydiv" style={{display:"none", paddingLeft:"6em"}} md={10} xs={12} sm={12}>
        <Typography  style={{ fontStyle: "bold", fontSize:"6em", top:"30em"}} > DEVELOPPEMENT </Typography>
        </Grid>
                            </Hidden>
                        </Grid>
                    </Container>
                    <ProjectPage />

                    <br/><br/> <br/> <br/> <br/><br/><br/> <br/> <br/> <br/>

                    <div id="box" style={{ height:"100rv",backgroundSize: 'cover', opacity: '0.6',
                    marginTop:'10em',filter: 'blur(4px)',
                    backgroundImage: `url(${INTRO})`,
                    backgroundRepeat: 'round',width:'100%', color:'white',}}>
                    </div>
                    <Container maxWidth="xl" id="CONTACT" style={{ color:"white", paddingLeft:"3em", marginTop:"30em" }} >

                        {/* -------------------------------------------------- Footer component -------------------------------------------------- */}
                            <BottomToolBarApp/>
                        {/* -------------------------------------------------- End Footer component -------------------------------------------------- */}

                    </Container>

                </div>
        <div style={{textAlign:"center", fontWeight:"lighter", color:"white"}} >
        <p>Copyright © 2019 - Loic SUNVE</p>
        </div>
            </div>
        );
    }
}
export default App;
