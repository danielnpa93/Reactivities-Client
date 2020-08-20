import React from "react";
import { IActivity } from "../../Models/typing";
import {
  List,
  Grid,
  Container,
  Segment,
  Divider,
  Button,
  Label,
  Icon,
} from "semantic-ui-react";

import { dateStringFormat } from "../../Utils/dateStringFormat";

interface IProps {
  activities: IActivity[];
  isRemovingId: string | null;
  onRemove(activity: IActivity): void;
  onView(activity: IActivity): void;
}

export default function Dashboard({
  activities,
  isRemovingId,
  onView,
  onRemove,
}: IProps) {
  return (
    <div style={{ gridArea: "dashboard", margin: "0" }}>
      <Segment style={{ margin: "20px" }}>
        <List>
          {activities.map((ac) => (
            <>
              <List.Item>
                <List.Header>{ac.title}</List.Header>
                <List.Description>{dateStringFormat(ac.date)}</List.Description>
                <List.Content style={{ margin: "10px 0px" }}>
                  <List.Item>{ac.description}</List.Item>
                  <List.Item> {ac.category}</List.Item>
                  <List.Item> {ac.city}</List.Item>
                </List.Content>

                <List.Content floated="left">
                  <Label basic>{ac.category}</Label>
                </List.Content>
                <List.Content floated="right">
                  <Button
                    basic
                    color="red"
                    loading={ac.id === isRemovingId}
                    icon
                    onClick={() => onRemove(ac)}
                  >
                    <Icon name="trash alternate outline" />
                  </Button>
                  <Button onClick={() => onView(ac)} primary>
                    View
                  </Button>
                </List.Content>
              </List.Item>
              <Divider />
            </>
          ))}
        </List>
      </Segment>
    </div>
  );
}
