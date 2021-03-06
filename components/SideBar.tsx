import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const Items = Array.from(Array(20).keys()).map(i => {
  return (
    <>
      <ListItem key={i} href="https://www.google.com/" button component="a">
        <ListItemText>{`Item${i + 1}`}</ListItemText>
      </ListItem>
      <Divider />
    </>
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
