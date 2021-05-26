import React from 'react';
import Row from '@material-ui/core/Grid';


class Cell extends React.Component {
    render (){
        return(
            <>
            <Row xs={12} sm={12} md={8} style={{padding:"1em",backgroundColor:"#505050",
                    boxShadow: "10px 11px 8px -5px rgba(0,0,0,0.27)"}}>
                    <p>{}</p>
                </Row>
            </>

    );
}

}
export default Cell;