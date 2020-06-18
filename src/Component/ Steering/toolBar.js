import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ScrollspyNav from "react-scrollspy-nav";
import Button from "@material-ui/core/Button";
import SvgIcon from '@material-ui/core/SvgIcon';
import Hidden from "@material-ui/core/Hidden";




class ToolBarApp extends React.Component {
    render() {
        return <ScrollspyNav zIndex="tooltip"
            scrollTargetIds={["section_1", "section_2", "section_3"]}
            activeNavClass="is-active" >
            <div style={{position: "fixed", width: "100%", zIndex: 10000}}>
                <div className="Welcome" style={{position: "fixed", width: "100%", height: "4em",color: "white",}}></div>
                <Toolbar zIndex="tooltip">
                    <Typography className={ScrollspyNav.root}>
                        <Button href="/" variant="h6" color="inherit">
                            <HomeIcon style={{color: "white",}} />
                        </Button>
                        <Button style={{color: "white",}} href="#section_1" color="inherit" variant="h6" className="NavName">
                            SKILLS
                        </Button>

                        <Button style={{color: "white",}} href="#section_2" color="inherit" variant="h6" className="NavName">
                            DESIGN
                        </Button>
                        <Button style={{color: "white",}} href="#section_3" color="inherit" variant="h6" className="NavName">
                            <Hidden only={['sm', 'lg', 'md','xl']}>  DEV</Hidden> <Hidden only={'xs'}>  DEVELOPPEMENT</Hidden>
                        </Button>
                    </Typography>
                </Toolbar>

            </div>

        </ScrollspyNav>
    }
}
export default ToolBarApp;

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
