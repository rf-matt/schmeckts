import React from "react";
import "./Img.css";

export default function Img(props) {
    return (
            <div className="ImgContainer">
                <img
                    src={props.image}
                    width={props.size}
                    alt="Kitten in a bowl">
                </img>
            </div>
        );
}

Img.defaultProps = {
    size: 200
}