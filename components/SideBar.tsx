import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Items = Array.from(Array(20).keys()).map(i => {
  return (
    <ListItem key={i} href="https://www.google.com/" button component="a">
      <ListItemText>{`Item${i + 1}`}</ListItemText>
    </ListItem>
  );
})

export default class SideBar extends React.Component {
  render() {
    return (
      <>
        {Items} 
      </>
    );
  }
}
