import React, { Component } from "react";
import video from "../../assets/video/bear.mp4";
import './Video.css';

export default class Video extends Component {
    render(){
        return(
            <video className="Video" autoPlay muted controls loop>
                <source src={video } />
            </video>
        );
    }
}