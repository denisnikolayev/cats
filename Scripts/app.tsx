// http://www.hasbro.com/common/assets/html5/MyLittlePony/core_games/RDU_140514/

import * as React from "react"
import {render} from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute, Redirect } from "react-router"
import {DressingRoom} from "./DressingRoom";
import {Catalog} from "./catalog";
import {ponies} from "./ponies";
import {Choose} from "./choose";

export class Master extends React.Component<{ children: any }, {}> {
    render() {
        return (
            <div>
                <ul id="menu-bar">
                    <li><Link to="/"><span>Каталог</span></Link></li>
                    <li><Link to="/dressing-room"><span>Примерочная</span></Link></li>
                </ul>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

class DressRoomPage extends React.Component<{}, { pony: string }> {
    constructor() {
        super();
        this.state = { pony: "" };
    }

    onSelect(pony:string) {
        this.setState({ pony: pony });
    }

    render() {
        const { pony } = this.state;

        if (pony === "") {
            return <Choose onSelect={this.onSelect.bind(this)} />
        } else {
            return (
                <div>
                    <button style={{position:"absolute"}} onClick={this.onSelect.bind(this, "")}>Horse's house</button>
                    <DressingRoom pony={this.state.pony} />
                </div>
            );
        }
    }
}

class CatalogPage extends React.Component< {}, {}>
{
    render() {
        return <div className="catalog-page"><Catalog /></div>
    }
}

render(
    <Router history={browserHistory}>
        <Route path="/" component={Master}>
            <IndexRoute component={CatalogPage}/>
            <Route path="dressing-room" component={DressRoomPage} />
        </Route>
    </Router>,
    document.getElementById("app")
);