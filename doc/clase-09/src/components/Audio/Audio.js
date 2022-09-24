import React, { Component } from "react";
import audio from "../../assets/audio/wind8.wav";
import './Audio.css';

export default class Audio extends Component {
    render(){
        return(
            <audio className="Audio" controls>
                <source src={ audio }  />
            </audio>
        );
    }
}