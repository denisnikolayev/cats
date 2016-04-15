import * as React from "react"
import {render} from "react-dom";
import * as $ from 'jquery';
import { Router, Route, Link, browserHistory, IndexRoute, Redirect } from "react-router" 

export class Master extends React.Component<{ children: any }, {}> {
    render() {
        return (
            <div>
                <div>
                    <ul id="menu-bar">
                        <li className="active">
                            <Link to="catalog">
                                <span>Каталог</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="basket">
                                <span>Корзина</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="dressing-room">
                                <span>Примерочная</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="foto">
                                <span>Фото</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export class Test extends React.Component<{message:string}, { values: number[], sums:any[] }> {
    constructor() {
        super();
        this.state = { values: [], sums: [] };

        //setInterval(async () => {           
        //    var result = await this.load("/api/values");
        //    this.setState({ values: result });

        //}, 1000);
    }   

    get<T>(url:string) {
        return new Promise<T>((rs, rj) => $.getJSON(url).then(rs).fail(rj));
    }

    async onClick() {
        let result = await this.get<number[]>("/api/values");
        let sums = await Promise.all(result.map(item=> this.get<number>(`/api/values/${item}`)));
        console.log(sums);
        this.setState({ values: result, sums: sums });
    }

    render() {
        var names = ["head", "body", "feet"];

        var list = [];
        for (let name of names) {
            for (var i = 1; i < 7; i++) {
                list.push(<div className={"rdu-wardrobe-item rdu-" + name + "-0" + i}></div>);
            }
        }

        var ponnys = ["apj", "fls", "pkp", "tls"];
        var list2 = [];
        for (let name of ponnys) {
            list2.push(
                <div data-pony="tls" className="rdu-runway-pony">
                        <div id="rdu-pony-legs" className={`rdu-${name}-legs`} style={{ opacity: 1 }}></div>
                        <div id="rdu-pony-hair" className={`rdu-${name}-hair`} style={{ opacity: 1 }}></div>
                        <div id="rdu-costume-shoes" className="" style={{ opacity: 0 }}></div>
                        <div id="rdu-pony-body" className={`rdu-${name}-body`} style={{ opacity: 1 }}></div>
                        <div id="rdu-costume-body" className="" style={{ opacity: 0 }}></div>
                        <div id="rdu-pony-wing" className={`rdu-${name}-wing`} style={{ opacity: 1 }}></div>
                        <div id="rdu-costume-head-back" className="" style={{ opacity: 0 }}></div>
                        <div id="rdu-pony-head" className={`rdu-${name}-head`} style={{ opacity: 1 }}></div>
                        <div id="rdu-costume-head" className="" style={{ opacity: 0 }}></div>
                        <div id="rdu-pony-ear" className={`rdu-${name}-ear`} style={{ opacity: 1 }}></div>
                        <div id="rdu-pony-horn" className={`rdu-${name}-horn`} style={{ display: "block", opacity: 1 }}></div>
                </div>
            );
        }


        return (
            <div>
                <h1 style={{ color: "red" }}>{this.props.message}</h1>
                {this.state.values.map((item) => <p key={item}>{item}</p>) }      
                <h2>Sums: {this.state.sums.join(", ")}</h2>
                <input type="button" value="test" onClick={this.onClick.bind(this) } />    
                <div>
                 {list}
                </div>
                {list2}
            </div>
        );
    }
}

class NotFound extends React.Component<{}, {}> {
    render() {
        return <div className="test">This path does not exists</div>;
    }
}

render(
    <Router history={browserHistory}>
        <Route path="/" component={Master}>
            <IndexRoute component={Test}/>
            <Redirect from="catalog" to="/" />
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
    document.getElementById("app")
);