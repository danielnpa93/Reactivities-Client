import React from "react";
import { Header, NavContainer } from "./style";
import logo from "../../assets/logo.png";
import { Button, List, Image, Icon } from "semantic-ui-react";
import { NavProps } from ".";

export default function NavBar({
  layout_toogle_activity_container,
  activity_select,
}: NavProps) {
  return (
    <Header>
      <NavContainer>
        <List className="custom-list" horizontal inverted>
          <List.Item as="a">
            <Image src={logo} size="mini" />

            <List.Content style={{ verticalAlign: "0.01em" }}>
              <List.Header>Reactivities</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as="a" className="custom-hover">
                Activities
              </List.Header>
            </List.Content>
          </List.Item>
        </List>

        <Button
          style={{ marginLeft: "auto" }}
          onClick={() => {
            layout_toogle_activity_container({ activityContainer: "edit" });
            activity_select({});
          }}
          color="green"
        >
          <span className="full-text">Add New Activity</span>
          <Icon
            className="short-text"
            name="plus"
            style={{ margin: "0" }}
            title="add new activity"
          />
        </Button>
      </NavContainer>
    </Header>
  );
}
