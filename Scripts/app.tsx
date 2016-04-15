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

export class Test extends React.Component<{}, { head: string, feet: string, body:string  }> {
    constructor() {
        super();
        this.state = { body:"", feet: "", head: "" };

        //setInterval(async () => {           
        //    var result = await this.load("/api/values");
        //    this.setState({ values: result });

        //}, 1000);
    }
    
    onClick(name: string, index: number) {
        var obj: any = {};

        obj[name] = `rdu-${"feet" === name || "body" === name?"mlp":"pkp"}-${name==="feet"?"shoes":name}-0${index}`;
        this.setState(obj);
    }

    render() {
        var names = ["head", "body", "feet"];

        var list = [];
        for (let name of names) {
            for (var i = 1; i < 7; i++) {
                list.push(<div className={"rdu-wardrobe-item rdu-" + name + "-0" + i} onClick={this.onClick.bind(this, name, i)}></div>);
            }
        }

        var ponnys = ["apj", "fls", "pkp", "tls"];
        var list2 = [];
        for (let name of ponnys) {
            list2.push(
                <div data-pony="tls" className="rdu-runway-pony">
                        <div className={`rdu-${name}-legs`} style={{ opacity: 1 }}></div>
                        <div className={`rdu-${name}-hair`} style={{ opacity: 1 }}></div>
                        <div className={this.state.feet} style={{ opacity: this.state.feet === "" ? 0 : 1 }}></div>
                        <div className={`rdu-${name}-body`} style={{ opacity: 1 }}></div>
                        <div className={this.state.body} style={{ opacity: this.state.body === "" ? 0 : 1 }}></div>
                        <div className={`rdu-${name}-wing`} style={{ opacity: 1 }}></div>
                        <div className="" style={{ opacity: 0 }}></div>
                        <div className={`rdu-${name}-head`} style={{ opacity: 1 }}></div>
                        <div className={this.state.head} style={{ opacity: this.state.head===""?0:1 }}></div>
                        <div className={`rdu-${name}-ear`} style={{ opacity: 1 }}></div>
                        <div className={`rdu-${name}-horn`} style={{ display: "block", opacity: 1 }}></div>
                </div>
            );
        }


        return (
            <div>
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