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
import {Link} from "react-router-dom";


class App extends Component {
    
    componentDidMount() {
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() > 40) {
                    $(".Welcome").fadeIn( 600 ).css({background: "#102D40", boxShadow: "-1px 8px 17px 6px rgba(0,0,0,0.28)"});
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
                if ($(document).scrollTop() > 1900) {
                   /*  $(".mydiv").show( 500 );*/
                    $(".mydiv").fadeIn( 1000 );
                } /*else {
                    $(".mydiv").fadeOut( "slow" );
                */
                if ($(document).scrollTop() < 450) {
                    $(".img").fadeIn( 1500 );
                }else{
                    $(".img").fadeOut( 500 );}

            });
        });
    }
    render() {
        return (
            <>
                {/* -------------------------------------------------- Nav Component -------------------------------------------------- */}
                <ToolBarApp />
                <div style={{color:"white", paddingTop:"15vw", paddingLeft:"3em" }}>
                    {/* -------------------------------------------------- introduction Component -------------------------------------------------- */}
                    <BannerIndex/>
                    {/* -------------------------------------------------- Skill component -------------------------------------------------- */}
                    <Container  id="section_1" style={{color:"white", paddingTop:"10vw", paddingLeft:"3em" }}>
                    <IntroPage/>
                    </Container>

                    {/* -------------------------------------------------- animate div 01 -------------------------------------------------- */}
                    <Container id="section_2">
                    {/*-------------------------------------------------- End Design component --------------------------------------------------*/}
                    </Container>
                    <Container maxWidth="xl" id="section_3" style={{ color:"white"}} >
                    </Container>
                    <br/><br/> <br/> <br/> <br/><br/><br/> <br/> <br/> <br/>
                        
                    <Container maxWidth="xl" id="section_4" style={{ color:"white", paddingLeft:"3em", marginTop:"30em" }} >

                        {/* -------------------------------------------------- Footer component -------------------------------------------------- */}
                            <BottomToolBarApp/>
                        {/* -------------------------------------------------- End Footer component -------------------------------------------------- */}

                    </Container>

                </div>
                <div style={{textAlign:"center"}} >
                <Link to={{ pathname:`/CGU`,}} style={{textDecoration:"none", fontWeight:"bold", color:"white"}} > <p  >Copyright © 2019 - Loic SUNVE - Tous droits réservés </p>
                </Link>
                </div>
            </>
        );
    }
}
export default App;