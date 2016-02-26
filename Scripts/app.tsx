import * as React from "react"
import {render} from "react-dom";
import * as $ from 'jquery';

export class App extends React.Component<{message:string}, { values: number[], sums:number[] }> {
    constructor() {
        super();
        this.state = { values: [], sums: [] };

        //setInterval(async () => {           
        //    var result = await this.load("/api/values");
        //    this.setState({ values: result });

        //}, 1000);
    }   

    get<T>(url:string) {
        return new Promise<T>((rs, rj) => $.getJSON(url).then(rs).fail(rj))
    }

    async onClick() {
        let result = await this.get<number[]>("/api/values");
        let sums = await Promise.all(result.map(item=> this.get<number>(`/api/values/${item}`)));
        this.setState({ values: result, sums: sums });
    }

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>{this.props.message}</h1>
                {this.state.values.map((item) => <p key={item}>{item}</p>) }      
                <h2>Sums: {this.state.sums.join(", ")}</h2>
                <input type="button" value="test" onClick={this.onClick.bind(this)} />        
            </div>
        );
    }
}

render(<App message="hello3" />, document.getElementById("app"));