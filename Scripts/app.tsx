import * as React from "react"
import {render} from "react-dom";
import * as $ from 'jquery';

export class App extends React.Component<{message:string}, { values: string[] }> {
    constructor() {
        super();
        this.state = { values: [] };

        setInterval(async () => {           
            var result = await this.load("/api/values");
            this.setState({ values: result });
                        
        }, 1000);
    }   

    load(url:string) {
        return new Promise<string[]>((rs, rj) => $.getJSON(url).then(rs).fail(rj))
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>{this.props.message}</h1>
                {this.state.values.map((item) => <p>{item}</p>) }                
            </div>
        );
    }
}

render(<App message="hello3" />, document.getElementById("app"));