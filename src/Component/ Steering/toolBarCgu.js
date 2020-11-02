import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ScrollspyNav from "react-scrollspy-nav";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import '../../App.css'





class ToolBarCgu extends React.Component {
    render() {
        return <div style={{color: "white", paddingTop:"1em"}}>
            
            <Link to={{ pathname:`/`,}} ><Button> <HomeIcon style={{color: "white", position:"fixed" }} /> </Button></Link>

        </div>
    }
}
export default ToolBarCgu;


