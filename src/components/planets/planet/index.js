import React, { Fragment } from "react";
import GreyImg from "../../../grey-img/gray-img";
import DescriptionWithLink from "../shared/descriptionWithLink";
const Planet = (props) => {
    let title;
    if(props.title_with_underline){
        title = <h3><u>{props.title_with_underline}</u></h3>;
    }else{
        title = <h3>{props.title}</h3>;
    }

    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            {title}
            <GreyImg img_url={props.img_url} gray={props.gray} />
            <DescriptionWithLink description={props.description} link={props.link} />
            <hr></hr>
        </div>
    )
}

export default Planet;