import * as React from "react"
import {items, IItem, ponies} from "./ponies"
import {Pony} from "./pony";

export class Choose extends React.Component<{onSelect:(pony:string)=>void}, {pony:string}> {
    onSelect(pony: string) {
        if (this.props.onSelect !== undefined) {
            this.props.onSelect(pony);
        }
    }

    item(pony: string) {
        return (
            <div className="chooseItem">
                <Pony name={pony} />
                <button onClick={this.onSelect.bind(this, pony)}>Select</button>
            </div>
        );
    }

    render() {
        return (
            <div className="choose">
                {ponies.map(pony=>this.item(pony))}
            </div>
        );
    }
}