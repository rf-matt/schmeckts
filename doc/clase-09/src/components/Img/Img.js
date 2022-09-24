import React, { Component } from "react";
import img from "../../assets/img/9ab.jpg";
import "./Img.css";

export default class Img extends Component {
    render() {
        return (
                <div className="ImgContainer">
                    <img src={img} width={200} alt="Kitten in a bowl"></img>
                </div>
        );
    }
}