import * as React from "react"
import {items, IItem, ponies} from "./ponies"

export const Catalog = (props: { onClick?: (item: IItem) => void }) => {
    const rows = items.map(item =>
        <div
        className={item.itemClassName}
        onClick={ () => props.onClick != undefined ? props.onClick(item) : null} />
    );

    return <div> {rows} </div>;
};