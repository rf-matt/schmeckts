'use strict'; // 
const ReactElement = React.createElement;

export default class Button extends React.Component {

    render() {
        return ReactElement(
            'button',
            { },
            'Click'
        );
    }
}

const domContainer = document.getElementById("myApp");
ReactDOM.render(ReactElement(Button) , domContainer);