import * as React from "react"
import * as style from "../css/style.css"

interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <>
                <h1 className={style.example}>Hello from and !</h1>
            </>
            )
    }
}
