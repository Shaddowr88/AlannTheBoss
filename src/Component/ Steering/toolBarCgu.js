import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

import '../../App.css'





class ToolBarCgu extends React.Component {
    render() {
        return <div style={{color: "white", paddingTop:"1em"}}>
            <Link to={{ pathname:`/`,}} ><Button> <HomeIcon style={{color: "white", position:"fixed" }} /> </Button></Link>
        </div>
    }
}
export default ToolBarCgu;


