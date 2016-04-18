import * as React from "react"

const Layer = (props: { name: string }) => <div className={props.name} style={{ opacity: props.name === "" ? 0 : 1 }} />;

export const Pony = ( props: { name: string, head?: string, body?: string, feet?: string } ) =>
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
    </div>;
