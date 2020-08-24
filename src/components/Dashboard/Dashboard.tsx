import React from "react";
import { List, Segment, Divider, Button, Label, Icon } from "semantic-ui-react";
import { dateStringFormat } from "../../Utils/dateStringFormat";
import { DashboardProps } from ".";

export default function Dashboard({
  activities,
  activity_select,
  activity_remove_async_request,
  removingId,
  layout_toogle_activity_container,
}: DashboardProps) {
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
                    loading={ac.id === removingId}
                    icon
                    onClick={() =>
                      activity_remove_async_request({ activityId: ac.id })
                    }
                  >
                    <Icon name="trash alternate outline" />
                  </Button>
                  <Button
                    onClick={() => {
                      activity_select({ activityId: ac.id });
                      layout_toogle_activity_container({
                        activityContainer: "details",
                      });
                    }}
                    primary
                  >
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
