import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import '../../App.css'

class CardContent extends React.Component{
    
    render(){
        return( 
        <>
               {/*  <Grid item>
                        <Grid item>
                            <div className={{ width: '3vw', height: '3vw', marginTop: '1vw', }} >
                                <Link
                                    style={{textDecoration: "none", color:"white"}}
                                    key={this.props.proj.id} to={{ pathname:`/ProjetMsw/${this.props.proj.id}`,}}>
                                    <img color={this.props.color} src={this.props.src} style={{margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%', }} alt="complex"  />
                                </Link>
                            </div>
                        </Grid>
                        <Grid item xs={9} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Link
                                        style={{textDecoration: "none", color:"white"}}
                                        key={this.props.proj.id}
                                        to={{ pathname:`/ProjetMsw/${this.pros.proj.id}`,}}>
                                        <Typography gutterBottom variant="subtitle1" >
                                            {this.props.proj.title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom style={{marginBottom:"2em"}} >
                                        {this.props.proj.textes}
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
               </Grid>      */}       
        </>


        )
    }
}

export default CardContent
