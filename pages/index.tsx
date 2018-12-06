import * as React from "react"
import Button from "@material-ui/core/Button"
import * as style from "../css/style.css"

interface HelloProps { compiler: string; framework: string; }

export default class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <>
                <Button variant="contained" color="primary">
                    Hello Material-UI
                </Button>
                <img src="/static/twitter_shiba.png" />
                <h1 className={style.example}>Hello from and !</h1>
            </>
            )
    }
}
