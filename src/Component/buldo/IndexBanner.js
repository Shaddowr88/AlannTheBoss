import React from 'react';
import Grid from '@material-ui/core/Grid';
import INTRO from "../../static/images/notebook-1280538_1920.jpg";

    class   BannerIndex extends React.Component {
        render() {
            return <div style={{"height": "50em", justifyContent: "center", backgroundImage: `url(${INTRO})`,}}>
                    <div style={{paddingLeft: "2em"}}>
                        <Grid container spacing={1} xs={12} lg={12} p={9} justify="flex-start" alignItems="flex-end">
                            <Grid container lg={5} xs={14} alignItems="flex-end"
                                  style={{fontSize: "9em", paddinTop: "2em", marginTop: "1em", textShadow: "5px 0 5px #E0EAFC"}}>
                                Hello <span style={{color: "red"}}>!</span> I am Loic
                            </Grid>
                            {/*   <Grid container lg={6} xs={12} justify="flex-start" alignItems="flex-end" style={{fontSize:"2em", marginBottom:"6em",}}>
                        Design graphique <br/>Développement Web et WebApp
                        <br/>Votre projet de A à Z
                    </Grid>*/}
                        </Grid>
                    </div>
                </div>
        }
    }
export default BannerIndex;
