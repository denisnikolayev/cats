import * as React from "react"
import {render} from "react-dom";

export class App extends React.Component<{}, {}> {
    render() {
        return <h1>hello9</h1>;
    }
}

render(<App />, document.getElementById("app"));