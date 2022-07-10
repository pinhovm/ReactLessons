import React from "react";
import './style.css'
const GreyImg = (props) => {
    return (
        <img className={props.gray ? 'gray-img' : 'colored-img'} src={props.img_url}></img>
    )
}

export default GreyImg;