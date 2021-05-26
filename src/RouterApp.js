import React from "react";
import {BrowserRouter as Router, Switch, Route, useLocation,} from "react-router-dom";
import App from "./App";
import Cgu from "./Component/buldo/cgu";
import MswwPage from "./msww";
import indexData from "./Component/data/datas";

export default function ModalGalleryExample() {
    return (
        <Router>
            <ModalSwitch />
        </Router>
    );
}

function ModalSwitch() {
    let location = useLocation();
    let background = location.state && location.state.background;
    return (
        <div>
            <Switch location={background || location}>
                <Route exact path="/" render={(props)=> <App {...props} projs={indexData}/>}/>
                <Route path="/ProjetMsw/:id" children={<MswwPage />} />
                <Route path="/CGU" children={<Cgu/>} />
                <Route exact path="/link" render={() => (window.location = "www.linkedin.com/in/loicsun")} />
            </Switch>
            {/*{background && <Route path="/img/:id" children={<Modal />} />}*/}
        </div>
    );
}
