import React from "react";
import './Audio.css';

export default function Audio(props) {
        return (
            <audio
                className="Audio"
                controls={props.controls}
                muted={props.muted}
            >
                <source src={ props.audio } />
            </audio>
        );
}

Audio.defaultProps = {
    controls: true,
    muted: false
}