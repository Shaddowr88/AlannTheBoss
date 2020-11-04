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
            textes: "Menuisier Spécialiste dans la création et l'agencement de meubles sur-mesure. ",
            texte01: " Inspiré par l’élégance des texture et courbe naturel du bois.",
    label01:" ",
        label02:"Design",
        label03:"Aperçu",
        title02: "Graver dans le bois et dans nos esprits",
    texte02: "Identité visuelle marquante, a l’image des créations de ce spécialiste dans l'agencement et la conception de meuble sur-mesure\n" +
    "    de fonctionnalité Gestion des utilisateurs, rôle et autorisation par utilisateur.",
        tdescribe02: "",
        techno02: "",
        color: "DarkOrchid",
        src:FLORAL,
        sample00:"John",
        sample01:MSWW01 ,
        sample02:MSWW02 ,
        sample03:MSWW03 ,
        sample05:"Jones",
},

    { id: 1,
        title: "BIZON",
        textes: "La gestion de copropriétés sur 365° en toute sérenité",
        label01:" Pour une gestion proactive et en collaboration avec tous les acteurs de la vie d'un copropriété. ",
        label02:" DEv",
        label03:"aperçus",
        texte01: " tous seul ont vas plus vite, ensembles va plus loin !! ",
        texte010: " Bizon a pour objectif de permettre aux propriétaires et gestionnaire d’administrer en toute efficience, une copropriété. En répartissant les  actions de gestion au travers d’une plateforme, les acteurs interne et externe a la copropriété communique  afin d’agir au plus vites ",
        title02: "Des technologies fiables et éprouvé",
            texte02: "L'application est conçu à partir du Framework Laravel. J'ai utilisé Bootstrap et jQwery en front-end . En back-end, la base de données MariaDB, Conçu à partir de la méthode merise. ",
        title03: "Bizon Un CRM en mode SAAS",
        texte03: "Le CRM bizon , est un gestionnaire de biens immobiliers qui permet de bénéficier de fonctionnalité Gestion des utilisateurs, rôle et autorisation par utilisateur.",
        tdescribe02: "Espace de gestion des contacts. Un Dashboard pour visualiser rapidement des événements et dépenses.\n" +
    "        Interfaces Multi compte.",
        techno02: "Laravel : mySQL",
        color: "DarkOrchid",
        src:Lima,
        sample00:"John",
        sample01:Bison01 ,
        sample02:Bison02 ,
        sample03:Bison03 ,
        sample05:"Jones"
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
        sample00:"John" ,
        sample02:Bison02 ,
        sample03:Bison03 ,
        sample05: "Jones"
    },

    { id: 3,
        title: " Les Del'ile's des doudous ",
        textes: "Plonger au cœur de la gastronomie antillaise",
        label01: "Chaleurs et douceurs gourmandes, raconter à travers des différents supports.",
        label02:"Design",
            label03:"Aperçu",
        texte01: " La mise en valeur des origines ethniques des produits. Et de mettre en place des systèmes de conditionnement moderne et écologique ",
        title02:  " Mettre les petits plats dans les grands écrin ",
        texte02: " Les Del'ile's des doudous a nécessité la création d'une identité visuelle, déclinable sur plusieurs supports de type Print ( Logo, papeterie, etc.) ou Web ( médias sociaux ainsi ). Et fin de valoriser les produits, concevoir des packagings moderne ",
        techno02: ".",
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
    if (!image) return <div style={{ height:"80rem", padding:"2em", paddinTop:"50em"}}>
      <Typography className="cuttinText2" 
      style={{  color: "rgba(12,6,6,0.62)",fontSize:"10em",}}> 
      Oups!!! 
      </Typography>
      <p className="cuttinText2" 
      style={{  color: "rgba(12,6,6,0.62)", letterSpacing: ".15em",fontSize:"2em",}}> 
      cette page est en cours de construction 
      </p>
      <WaitIll/>
        </div>;


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

                        <Grid xs={12} sm={12} lg={10}>
                                    <Grid  container md={11} lg={12} xs={12} >
                                        <h1 className="cuttinText1" style={{ fontStyle: "bold", fontSize:"3em", top:"30em"}}>{image.textes}</h1>
                                    </Grid>
                                    
                                    <Typography> {image.texte02} </Typography><br/><br/><br/>

                                    <Grid container style={{fontSize:"2em"}}>
                                        <Grid lg={5} >{image.texte01}</Grid>
                                        <Grid lg={6} className="expo1" style={{backgroundImage: `url(${image.sample01})`, backgroundSize: "cover"}}></Grid>
                                    
                                    </Grid>

                                    <Grid xs={12} sm={8} style={{fontSize:"2em"}}>
                                        <Typography>
                                            {image.texte010}
                                        </Typography>
                                    </Grid>

                                    <Grid xs={12} sm={5} lg={12} >
                                            <h1 className="cuttinText1" style={{ fontStyle: "bold", fontSize:"3em", top:"30em"}} >{image.title02}</h1>
                                        </Grid>
                                        
                                        <Grid container style={{fontSize:"2em"}}>
                                        <Grid lg={6} className="expo1" style={{backgroundImage: `url(${image.sample01})`, backgroundSize: "cover"}}></Grid>
                                        <Grid lg={5} ><Typography>
                                                {image.texte02}
                                            </Typography>
                                            </Grid>
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
                                        </Grid>

                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
        </ScrollToTop>
        </BrowserRouter>
    );}
