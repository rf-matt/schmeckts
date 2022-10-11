import React from "react";
import './Video.css';

export default function Video(props) {
    return (
        <video
            className="Video"
            controls={props.controls}
            muted={props.muted} 
        >
            <source src={props.video} />
        </video>
        );
}

Video.defaultProps = {
    controls: true,
    muted: true,
}

