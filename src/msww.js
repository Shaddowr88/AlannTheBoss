import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {useParams, useLocation, BrowserRouter } from "react-router-dom";
import FLORAL from "./static/images/Flora.jpg";
import MSWW01 from "./static/images/msww/Flora.jpg";
import MSWW02 from "./static/images/msww/Captu01.jpg";
import MSWW03 from "./static/images/msww/Captu02.jpeg";
import Bison01 from "./static/images/Bizon/imacbizon.png";
import Bison02 from "./static/images/Bizon/Bizzon.png";
import Bison03 from "./static/images/Bizon/Mokebizoniphone.png";
import Dilce01 from "./static/images/delice/IMG_6098.JPG";
import Dilce02 from "./static/images/delice/IMG_2360.jpg";
import Dilce03 from "./static/images/delice/bc62de11-cac6-4443-984d-cbcf6fdef09a.jpg";
import Lima from "./static/images/Banner02.png";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import WaitIll from "./Component/buldo/waittingComp";
import { useEffect } from 'react';







export default function MswwPage() {
   
    /* start to top page */
    
    const ScrollToTop = ({ children }) => {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return children || null;
      };

/* Data */

    const DATAS = [

        { id: 0,
            title: "MS WOODWORK",
            textes: "Un projet gravé dans le bois",
            texte01: "Inspiré par l’élégance des textures et courbes naturelles du bois.",
        texte010: "Inspiré par les différentes techniques utilisées pour transformer le bois en oeuvre d'art.", 
        title02: "Graver dans le bois et dans nos esprits",
        texte02: "Identité visuelle marquante, à l’image des créations d'un spécialiste dans la conception de meuble sur-mesure",
        title03: "....",
        texte03: " l'identité visuelle de la marque est pensé pour être exploité selon deux types de support. L'artisan à la possibilité d'appliquer les éléments sur des supports en bois, en utilisant la technique de Pirot gravure. Mais aussi, de méthode plus traditionnel, comme l'impression sur papier.",
        color: "DarkOrchid",
        src:FLORAL,
        sample01:MSWW01 ,
        sample02:MSWW02 ,
        sample03:MSWW03 ,
},

    { id: 1,
        title: "BIZON",
        textes: "Plate-forme Web conçu pour la gestion de copropriété",
        label01:" Pour une gestion proactive et en collaboration avec tous les acteurs de la vie d'un copropriété. ",
        texte01: " Une interface simple et esthétique",
        texte010: " Connecté depuis la page de login, l'application mets à disposition deux interfaces de gestion pour les utilisateurs, qu'il soit client ou gestionnaire. Chaque page offre un maximum de lisibilité et un affichage optimal des contenus (photos, graphique, etc...). Cela est rendu possible grâce au moteur de template Blade ",
        title02: "Des technologies fiables et éprouvées",
        texte02: "L'application est conçu à partir du framework Laravel. J'ai utilisé Bootstrap et jQwery pour afficher et animer le front-end . En back-end, la base de données MariaDB, par l'application de la méthode merise. ",
        title03: "Des outils de sécurité performants",
        texte03: "Le back-end est gérés par l'ORM Eloquente. Le middleware, permet la distinction entre les différents utilisateurs, permettant ainsi d'intéragir avec l'application de façon sécurisée. ",
        tdescribe02: "Espace de gestion des contacts. Un Dashboard pour visualiser rapidement des événements et dépenses.\n" +
    " Interfaces Multi compte.",
        color: "DarkOrchid",
        src:Lima,
        sample01:Bison01 ,
        sample02:Bison02 ,
        sample03:Bison03 ,
    },

    { id: 2,
        title: "B4S",
        textes: "Application mobile de gestion de la réputation numérique",
        label01:" label01",
        label02:" label02",
        label03:"label03",
        texte01: "Connexion et interactions aux différents réseaux sociaux . Espace de gestion des contenus . Dashboard pour visualiser les KPI",
        title02: " ……B4S" ,
        texte02: "Gestion des utilisateurs, rôle et autorisation par utilisateurs. Espace de gestion des contacts. Un Dashboard pour visualiser rapidement des événements et dépenses. Interfaces Multi compte",
        title03: "Bizon Un CRM en mode SAAS",
        texte03: "Connexion et interactions aux différents réseaux sociaux . Espace de gestion des contenus. Dashboard pour visualiser les KPI",
        techno02: "Laravel : mySQL",
        color: "DarkOrchid",
        src:Lima,
        sample02:Bison02 ,
        sample03:Bison03 ,
    },

    { id: 3,
        title: " Les Del'île's des doudous ",
        textes: "Une identité élégante et artisanal",
        label01: "Chaleurs et douceurs gourmandes, raconter à travers des différents supports.",
        texte010:"Ce projet a été conçu dans le but que chaque élément contribue à son identité. De la sélection des bouteilles en passant par le façonnage des différents supports à la main. Ce projet contient aussi des packaging événementiels",
            label03:"Aperçu",
        texte01: " Des systèmes de conditionnement moderne et écologique ",
        title02:  " ....",
        title03:  " Chaleurs et douceurs gourmandes, raconter à travers les différents supports. ",
        texte03: " Les Del'île's des doudous a nécessité la création d'une identité visuelle, déclinable sur plusieurs supports de type Print ( Logo, papeterie, etc.) ou Web ( médias sociaux ainsi ). Afin de valoriser les produits, concevoir des packaging moderne ",
        color: "DarkOrchid",
        src:Lima,
        sample00:"John",
        sample01:Dilce01 ,
        sample02:Dilce03 ,
        sample03:Dilce02 ,
        sample05:"Jones"
    },

    ];

   /* function Image(props) {
        return (
            <div>
                <img style={{ width: "100%", height: 400, }} color={image.color} src={image.src}  alt="complex"  />
            </div>
        );
    }

    */

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };



    let { id } = useParams();
    let image = DATAS[parseInt(id, 10)];
    if (!image) return <BrowserRouter>
    <ScrollToTop> <div style={{ height:"80rem", padding:"2em", paddinTop:"50em"}}>

      <Typography className="cuttinText2" 
      style={{  color: "rgba(12,6,6,0.62)",fontSize:"10em",}}> 
      Oups!!! 
      </Typography>
      <p className="cuttinText2" 
      style={{  color: "rgba(12,6,6,0.62)", letterSpacing: ".15em",fontSize:"2em",}}> 
      cette page est en cours de construction 
      </p>
      <WaitIll/>
        </div> </ScrollToTop>
        </BrowserRouter>;


    return (
        <BrowserRouter>
        <ScrollToTop>
        <Grid style={{ paddinTop:"4em",backgroundColor:"#102D40", color:"white"}}>
            <Grid>
                <div>

                    <Grid container spacing={1} xs={12} lg={12} >
                        <Container>
                         <Grid container style={{fontSize:"4em", paddingTop:"1em"}}>  {image.title} </Grid>
                        </Container>
                    </Grid>


                    <Grid md={4} style={{fontSize:"1em",padding:"1em"}} >
                        <a href="/"style={{textDecoration:"none", color: "white", fontSize:"2em"}} >
<ArrowBackIcon style={{color: "white",paddingLeft:"3em"}} /> Back </a>
                        {/*<a href="/" variant="h6" color="inherit" style={{}}>
                            <div  style={{color: "red",}}> HOME</div>
                        </a>*/}
                    </Grid>

                        {/* menus de navigation pour affichage de type medium à large */}

                    <Grid container>
                        <Grid spacing={1} xs={12} sm={3} lg={2} fixed  >

                                <div position="static" color="default" style={{backgroundColor:"none", marginTop:"2em"}}>
                    
                                </div>
                        </Grid>

                           {/* comptenue des rubriques*/}

                        <Grid xs={12} sm={12} lg={10} >
                        <Grid container style={{padding:"1em"}}>
                                    <Grid  container md={11} lg={12} xs={12} >
                                        <h1 style={{ fontStyle: "bold", fontSize:"3em", top:"30em"}}>{image.textes}</h1>
                                    </Grid>
                                    <Grid lg={10}  ><Typography >
                                    {image.texte02}
                                        </Typography></Grid>
                                    
                                    <br/><br/><br/>
                        </Grid>
                                    <Grid container style={{fontSize:"2em"}}>
                                    <Grid container lg={4} style={{padding:"1em"}}>
                                        <Grid lg={12} className="cuttinText1" >{image.texte01}</Grid>
                                        <Grid lg={12}  ><Typography >
                                            {image.texte010}
                                        </Typography></Grid>
                                        </Grid>
                                        <Grid lg={6} className="expo1" style={{backgroundImage: `url(${image.sample01})`, backgroundSize: "cover"}}></Grid>
                                    
                                    </Grid>

                                    <Grid xs={12} sm={4} style={{fontSize:"2em"}}>
                                        
                                    </Grid>

                                    <Grid xs={12} sm={5} lg={12} >
                                            <h1 style={{ fontStyle: "bold", fontSize:"3em", top:"30em",}} >{image.title02}</h1>
                                        </Grid>
                                        
                                        <Grid container style={{fontSize:"2em"}}>
                                        <Grid lg={6} className="expo1" style={{backgroundImage: `url(${image.sample02})`, backgroundSize: "cover"}}></Grid>
                                        <Grid container lg={4} style={{padding:"1em"}}>
                                        <Grid lg={12} className="cuttinText1" >{image.title03}</Grid>
                                        <Grid lg={12}  ><Typography >
                                            {image.texte03}
                                        </Typography></Grid>
                                        </Grid>
                                    </Grid>
                                    
                                   <br/><br/><br/>
{/* 
                                    <Grid container style={{fontSize:"2em"}}>
                                       
                                        <Grid lg={6} className="expo1" style={{backgroundImage: `url(${image.sample03})`, backgroundSize: "cover"}}></Grid>
                                    
                                    </Grid>

                                   
              


                                        <Grid item xs={12} sm={12} container direction="row" spacing={5} style={{marginTop:"5em"}}>
                                            <Grid xs={12} sm={3}className="expo" style={{backgroundImage: `url(${image.sample01})`, backgroundSize: "cover"}}>
                                                <h3> </h3>
                                                <p></p>
                                            </Grid>
                                            <Grid xs={12} sm={3} className="expo"style={{backgroundImage: `url(${image.sample02})`, backgroundSize: "cover"}}>
                                                <h3> </h3>
                                                <p></p>
                                            </Grid>

                                            <Grid xs={12} sm={3}className="expo" style={{backgroundImage: `url(${image.sample03})`, backgroundSize: "cover"}}>
                                                <h3> </h3>
                                                <p></p>
                                            </Grid>

                                            <Grid xs={12} sm={2} className="expo"style={{backgroundImage: `url(${image.sample00})`, backgroundSize: "cover"}}>
                                                <h3> </h3>
                                            </Grid>

                                            <Grid xs={12} sm={3} className="expo" style={{ backgroundImage: `url(${image.sample05})`, backgroundSize: "cover"}}>
                                                <h3> </h3>
                                                <p></p>
                                            </Grid>
                                        </Grid>*/}

                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
        </ScrollToTop>
        </BrowserRouter>
    );}
