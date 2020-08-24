import React, { useEffect } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity, EditableActivity } from "../../Models/types";
import { EditContainerProps } from "./index";

const options = [
  { key: 1, value: "culture", text: "Culture" },
  { key: 2, value: "drinks", text: "Drinks" },
  { key: 3, value: "film", text: "Film" },
  { key: 4, value: "food", text: "Food" },
  { key: 5, value: "music", text: "Music" },
  { key: 6, value: "travel", text: "Travel" },
  { key: 7, value: "others", text: "Others" },
];

export default function Edit(props: EditContainerProps) {
  const {
    isSubmmiting,
    currentActivity,
    activity_create_async_request,
    activity_update_async_request,
    onCancel,
  } = props || {};

  const [activityState, setActivity] = React.useState<EditableActivity>({});

  const handleChangeActivity = (
    property: "date" | "venue" | "title" | "description" | "category",
    value: any
  ) => {
    let newActivity = activityState ? { ...activityState } : {};
    setActivity({ ...newActivity, [property]: value });
  };

  const formatDate = (isoDate?: string) => {
    return isoDate?.slice(0, 16);
  };

  const handleSubmmit = () => {
    if (currentActivity) {
      return activity_update_async_request({
        ...activityState,
        id: currentActivity.id,
      });
    }
    activity_create_async_request(activityState);
    return;
  };

  return (
    <div style={{ gridArea: "details" }}>
      <Segment style={{ margin: "20px" }} clearing>
        <Form>
          <Form.Input
            placeholder="Title"
            fluid
            value={activityState?.title}
            defaultValue={currentActivity?.title}
            onChange={(e) => handleChangeActivity("title", e.target.value)}
          />
          <Form.TextArea
            placeholder="Description"
            defaultValue={currentActivity?.description}
            value={activityState?.description}
            onChange={(e) =>
              handleChangeActivity("description", e.currentTarget.value)
            }
          />
          <Form.Dropdown
            fluid
            placeholder="Category"
            options={options}
            selection
            defaultValue={currentActivity?.category}
            value={activityState?.category}
            onChange={(e, { value }) => handleChangeActivity("category", value)}
          />
          <Form.Input
            fluid
            placeholder="Date"
            type="datetime-local"
            defaultValue={formatDate(currentActivity?.date)}
            value={formatDate(activityState?.date)}
            onChange={(e) => handleChangeActivity("date", e.target.value)}
          />
          <Form.Input
            fluid
            placeholder="Venue"
            defaultValue={currentActivity?.venue}
            value={activityState?.venue}
            onChange={(e) => handleChangeActivity("venue", e.target.value)}
          />
          <Button
            loading={isSubmmiting}
            primary
            floated="right"
            onClick={handleSubmmit}
          >
            Submit
          </Button>
          <Button floated="right" onClick={onCancel}>
            Cancel
          </Button>
        </Form>
      </Segment>
    </div>
  );
}
