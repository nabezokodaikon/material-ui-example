import * as React from "react";
import {
  Button
} from "@material-ui/core"
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import SvgIcon from "@material-ui/core/SvgIcon"
// import { createMuiTheme } from "@material-ui/core";
// import purple from '@material-ui/core/colors/purple';
// import { Theme } from '@material-ui/core/styles/createMuiTheme';
// import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';

import Header from "../components/Header"
import SideBar from "../components/SideBar"

// const theme = createMuiTheme({
  // typography: {
      // useNextVariants: true,
  // },
  // palette: {
    // primary: {
      // light: '#757ce8', // 基本の色よりも明るい色
      // main: '#ff5555', // 基本の色
      // dark: '#002884', // 基本の色よりも暗い色
      // contrastText: '#ff0' // テキストの色
    // },
    // secondary: {
      // light: '#007961',
      // main: '#004336',
      // dark: '#ba000d',
      // contrastText: '#000',
    // },
  // },
// });

// const styles = css `p { color: hotpink }`;

// import styles from "../css/styles";
// const red = css`p { color: hotpink; }`
import layout from "../css/layout";

export default class Hello extends React.Component {

  render() {
    return (
      <div className="root">
        <style jsx>{layout}</style>
        <Header/>
        <SideBar />
        <h1>Hello styled-jsx!</h1>
        <div>
          <Button href="google.com" variant="contained" color="primary">
            Hello Material-UI
          </Button>
          <Button variant="contained" color="primary">
            Hello Material-UI
          </Button>
          <h1>Hello from and !</h1>
          <AccessAlarmIcon />
          <Icon>star</Icon>
          <IconButton aria-label="Delete">
          <SvgIcon>
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
          </SvgIcon>
          </IconButton>
          <p>
            Hello styled-jsx !
          </p>
          <div>
            <p>
              HEllo 2
            </p>
          </div>
        </div>
      </div>
    )
  }
}
