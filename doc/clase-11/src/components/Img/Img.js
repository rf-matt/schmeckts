import React from 'react';
import {imagenes} from "../data.js";
import "./Img.css";

export default function Lista(props) {
    const ilustr = imagenes.filter(imagen =>
        imagen.type === 'ilustr'
    );
    const listItems = ilustr.map(imagen =>
        <div className='ImgContainer'>
            <li>
                <img
                    src={imagen.url}
                    alt={imagen.name}
                    width={props.width}
                />
            </li>
        </div>

    );
    return <ul>{listItems}</ul>;
}

Lista.defaultProps = {
    width: 250
}
