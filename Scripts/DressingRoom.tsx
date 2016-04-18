import * as React from "react"
import {items, IItem, ponies} from "./ponies"
import {Catalog} from "./catalog"
import {Pony} from "./pony";

export class DressingRoom extends React.Component<{ pony: string}, { head: string, feet: string, body: string }> {
    constructor() {
        super();
        this.state = { body: "", feet: "", head: "" };
    }

    onClick(item: IItem) {
        var obj: any = {};
        obj[item.partName] = item.className;
        this.setState(obj);
    }

    render() {
        const { feet, head, body } = this.state;
        const { pony } = this.props;

        return (
            <div className="back">
                <div className="items">
                    <Catalog onClick={this.onClick.bind(this)} />
                </div>
                <Pony name={pony} feet={feet} head={head} body={body} />
            </div>
        );
    }
}