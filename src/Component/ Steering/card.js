import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import delilce from "../../static/images/delice/delilces.png";
import MSWW from "../../static/images/msww/msww.png";
import '../../App.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        maxWidth: 600,
        alignContent: 'center',

    },

    image: {
        width: 50,
        height: 50,
        marginTop: 10,
    },

    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const IMAGES = [
    { id: 0, title: "MS WOODWORK",textes: "Artisan Menuisier", color: "DarkOrchid", src:MSWW },
    { id: 3, title: "DEL'ILE'S DES DOUDOUS", textes: "Événementiel", color: "Tomato", src:delilce },
];


export default function CardDev() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            {IMAGES.map(i => (
            <Grid container spacing={2} className="script-car-box"
                  style={{marginBottom: "2em"}} >
                <Grid item xs={3}>
                    <div className={classes.image} >
                        <Link
                            style={{textDecoration: "none", color:"white"}}
                            key={i.id} to={{ pathname:`/ProjetMsw/${i.id}`,}}>
                            <img color={i.color} src={i.src} className={classes.img} alt="complex"  />
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={9} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Link
                                style={{textDecoration: "none", color:"white"}}
                                key={i.id}
                                to={{ pathname:`/ProjetMsw/${i.id}`,}}>
                                <Typography gutterBottom variant="subtitle1" >
                                    {i.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{marginBottom:"2em"}} >
                                 {i.textes}
                                </Typography>
                             </Link>
                        </Grid>
                    </Grid>
                </Grid>
             </Grid>
           ))}
        </div>
    );
}
