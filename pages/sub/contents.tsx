import * as React from "react";

interface ContentsProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class SubContents extends React.Component<ContentsProps, {}> {
    render() {
        return <h1>Hello from sub Contents!</h1>;
    }
}
