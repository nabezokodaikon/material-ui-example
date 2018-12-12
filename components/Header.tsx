import * as React from "react";
import AppBar from '@material-ui/core/AppBar';

export default class Header extends React.Component {

  render() {
    return (
      <AppBar position="sticky">
        <h1>Material-UI Example</h1>
      </AppBar>
    );
  }
}
