import * as React from "react"
import * as ReactDom from "react-dom";

export class App extends React.Component<any,any> {
    render():any {
        return <h1>hello</h1>;
    }
}

ReactDom.render(React.createElement(App), document.getElementById("app"));