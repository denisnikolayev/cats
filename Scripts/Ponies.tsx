export interface IPony {
    feet: string;
    body: string;
    head: string;
    name:string
}


var names = ["head", "body", "feet"];

enum ItemType {
    head,
    body,
    feet
}

var itemIndexes: number[] = [0, 1, 2];

var itemNames: { [id: number]: string } = {};
itemNames[ItemType.head] = "head";
itemNames[ItemType.body] = "body";
itemNames[ItemType.feet] = "feet";



export interface IItem {
    className: string;
    type: ItemType;
    itemClassName: string;
    partName:string;
};

var className = (name:string, index:number)=> `rdu-${"feet" === name || "body" === name ? "mlp" : "pkp"}-${name === "feet" ? "shoes" : name}-0${index}`

export var items:IItem[] = [];
for (let type of itemIndexes) {
    for (var i = 1; i < 7; i++) {
        items.push({
            itemClassName: "rdu-wardrobe-item rdu-" + itemNames[type] + "-0" + i,
            partName: itemNames[type],
            type: type,
            className: className(itemNames[type], i)
        })
    }
}


export const ponies = ["apj", "fls", "pkp", "tls"]


/*
<div className="pony">
        <Layer name={`rdu-${props.name}-legs`} />
        <Layer name={`rdu-${props.name}-hair`} />
        <Layer name={props.feet} />
        <Layer name={`rdu-${props.name}-body`} />
        <Layer name={props.body} />
        <Layer name={`rdu-${props.name}-wing`} />
        <Layer name="" />
        <Layer name={`rdu-${props.name}-head`} />
        <Layer name={props.head} />
        <Layer name={`rdu-${props.name}-ear`} />
        <Layer name={`rdu-${props.name}-horn`} />
    </div>
*/