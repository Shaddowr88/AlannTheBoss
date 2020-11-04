import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ScrollspyNav from "react-scrollspy-nav";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import '../../App.css'





class ToolBarApp extends React.Component {
    render() {
        return <ScrollspyNav zIndex="tooltip"
            scrollTargetIds={["section_1", "section_2", "section_3", "section_4"]}
            activeNavClass="is-active" >
            <div className="navBar" >
                <div className="Welcome" ></div>
                <Toolbar zIndex="tooltip" className="navBar"  >
                    <Typography className={ScrollspyNav.root}>
                        <Button href="/" variant="h6" color="inherit" >
                            <ArrowUpwardOutlinedIcon style={{color: "white", display: "none"}} className="homeB" />
                        </Button>
                        <Button style={{color: "white",}}
                                href="#section_1" color="inherit" variant="h6" className="NavName">
                            SKILL
                        </Button>
                        <Button style={{color: "white",}} href="#section_2" color="inherit" variant="h6" className="NavName">
                            DESIGN
                        </Button>
                        <Button style={{color: "white",}} href="#section_3" color="inherit" variant="h6" className="NavName">
                            <Hidden only={['sm', 'lg', 'md','xl']}>  DEV</Hidden> <Hidden only={'xs'}>  DEVELOPPEMENT</Hidden>
                        </Button>
                        <Hidden only={['lg', 'md','xl']}>
                            <Button  style={{color: "white", marginLeft:"7em"}} href="#section_4" color="inherit" variant="h6" className="NavName">
                        <InfoOutlinedIcon style={{color: "white",}} />
                        </Button>
                        </Hidden>
                        <Button  style={{color: "white",marginLeft:"14rem", }} href="#section_4" color="inherit" variant="h6" className="navright">
                             <Hidden only={['sm','xs']}> <InfoOutlinedIcon style={{color: "white",}} /> </Hidden>
                        </Button>
                    </Typography>
                </Toolbar>
            </div>
        </ScrollspyNav>
    }
}
export default ToolBarApp;


