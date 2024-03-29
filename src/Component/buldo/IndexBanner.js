import React from 'react';
import Grid from '@material-ui/core/Grid';
import INTRO from "../../static/images/Banner.png";
import Hidden from "@material-ui/core/Hidden";
import BannerIll from "../Banners/bannerIllus";

    class   BannerIndex extends React.Component {
        render() {
            return <div style={{"height": "50em", justifyContent: "center", paddingBottom:"2em"}}>
                <Grid>

                <Grid md={8} xs={4}>
                    <div style={{paddingLeft: "5em"}}>
                        <Grid container spacing={1} xs={12} lg={12}>
                            
                            {/* Desktop version*/}

                            <Hidden only={['xs','sm']}>
                                 <Grid item lg={5} xs={2} style={{fontSize: "9em", paddinTop: "1em", marginTop: "50px", color: "white"}}>
                                      Loic <span >SUNVÉ</span> <br/>
                                 </Grid>
                                <Grid  item lg={10} xs={12} style={{fontSize: "4em", color: "white"}}>
                                    <span> DESIGN & DEVELOPPEMENT WEB </span>
                                 </Grid>
                             </Hidden>
                             
                             {/* Mobile version*/}

                             <Hidden only={['xl','md','lg']}>
                                 <Grid item lg={5} xs={2}
                                    style={{fontSize: "6em", paddinTop: "2em", marginTop: "1em", color: "white", lineHeight: "inherit"}}>
                                    Loic <span >SUNVÉ</span> <br/>
                                    </Grid>
                                    <Grid item lg={5} xs={12} style={{fontSize: "2em", color: "white", zIndex:"7000000000"}}>
                                        <span style={{color: "white"}}> DESIGN & DEVELOPPEMENT WEB </span>
                                      </Grid>
                            </Hidden>
                         </Grid>
                    </div>
                </Grid>
                    <Grid item md={4} xs={2} style={{}}>
                        
                        {/* Desktop version*/}

                        <Hidden only={['xs']}>
                            <div style={{position:"relative"}}> </div>
                            <BannerIll/>
                        </Hidden>

                        {/* Mobile version*/}

                        <Hidden only={['xl','md','lg', 'sm']}>
                            <div style={{position:"relative", width:"3em", border:"black",}}>
                                <img className="img" src={INTRO} alt="" style={{position:"absolute",
                                    filter: "blur(4px)","height": "10em", marginTop:"2em",top: "-1em", left:"2em" }}/>
                                <img className="img" src={INTRO} alt="" style={{position:"absolute",
                                    height:"10em", marginTop:"2em",top: "-1em", left:"2em" }} />
                            </div>
                        </Hidden>
                    </Grid>

                </Grid>
            </div>
        }
    }
export default BannerIndex;
