import React from "react";
import { Header, NavContainer } from "./style";
import logo from "../../assets/logo.png";
import { Button, List, Image, Icon } from "semantic-ui-react";

interface IProps {
  onNewActivity(): void;
}

export default function NavBar({ onNewActivity }: IProps) {
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
          onClick={onNewActivity}
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
