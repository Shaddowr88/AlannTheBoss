import React from 'react';
import Grid from '@material-ui/core/Grid';
import BannerIll from "../Banners/bannerIllus";

import Row from '@material-ui/core/Grid';


const BannerIndex =()=>( 
    <>
        <Grid>
            <Grid md={8} xs={4}>
                <div style={{paddingLeft: "5em"}}>
                    <Grid container spacing={1} xs={12} lg={12}>  
                         <Row item lg={2} xs={2} style={{fontSize: "50vw", 
                                                     paddinTop: "1em", 
                                                     marginTop: "50px", 
                                                     color: "white"}}>
                            </Row>
                            <Row item lg={6} xs={12} style={{fontSize: "9vw",
                                                             paddinTop: "1em", 
                                                             marginTop: "50px", 
                                                             color: "white"}}>
                                 Loic SUNVÉ
                            </Row>
                            <Row  item lg={4} xs={12} style={{fontSize: "4vw", 
                                                               color: "white",
                                                               marginTop: "10vw",
                                                               paddinTop: "50px"}}>
                                <span > DESIGN & DEVELOPPEMENT WEB </span>
                            </Row>
                    </Grid>
                </div>
            </Grid>
          {/*   <Grid item md={4} xs={2} style={{}}>
                    <div style={{position:"relative"}}> </div>
                    <BannerIll/>
</Grid> */}
        </Grid>
    </>
)

export default BannerIndex;
