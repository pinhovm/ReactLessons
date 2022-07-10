import React, { Fragment } from "react";
import GrayImg from "../shared/gray-img";
const Planet = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>{props.description}</h4>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;