import React from "react";
import {
  Segment,
  Input,
  TextArea,
  Form,
  Button,
  Select,
  Dropdown,
} from "semantic-ui-react";
import { IActivity } from "../../Models/typing";

const options = [
  { key: 1, value: "culture", text: "Culture" },
  { key: 2, value: "drinks", text: "Drinks" },
  { key: 3, value: "film", text: "Film" },
  { key: 4, value: "food", text: "Food" },
  { key: 5, value: "music", text: "Music" },
  { key: 6, value: "travel", text: "Travel" },
  { key: 7, value: "others", text: "Others" },
];

interface IProps {
  activity?: IActivity;
  isSubmitting: boolean;
  onCancel(): void;
  onSubmit(activity: IActivity): void;
}

interface IActivityNullable {
  title?: string;
  description?: string;
  category?: string;
  date?: string;
  venue?: string;
}

export default function EdittContainer({
  onCancel,
  onSubmit,
  isSubmitting,
  activity,
}: IProps) {
  const [activityState, setActivity] = React.useState<
    IActivityNullable | undefined
  >(activity);

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

  return (
    <div style={{ gridArea: "details" }}>
      <Segment style={{ margin: "20px" }} clearing>
        <Input
          fluid
          placeholder="Title"
          value={activityState?.title}
          onChange={(e) => handleChangeActivity("title", e.target.value)}
        />
        <br />
        <Form>
          <TextArea
            placeholder="Description"
            value={activityState?.description}
            onChange={(e) =>
              handleChangeActivity("description", e.currentTarget.value)
            }
          />
        </Form>
        <br />
        <Dropdown
          fluid
          placeholder="Category"
          options={options}
          selection
          value={activityState?.category}
          //  onChange={(e) => handleChangeActivity("title", e)}
          onChange={(e, { value }) => handleChangeActivity("category", value)}
        />
        <br />
        <Input
          fluid
          placeholder="Date"
          type="datetime-local"
          value={formatDate(activityState?.date)} //{"2020-08-19T18:14"} //{activityState?.date}
          onChange={(e) => handleChangeActivity("date", e.target.value)}
        />
        <br />
        <Input
          fluid
          placeholder="Venue"
          value={activityState?.venue}
          onChange={(e) => handleChangeActivity("venue", e.target.value)}
        />
        <br />
        <Button
          loading={isSubmitting}
          primary
          floated="right"
          onClick={() => onSubmit(activityState as IActivity)}
        >
          Submit
        </Button>
        <Button floated="right" onClick={onCancel}>
          Cancel
        </Button>
      </Segment>
    </div>
  );
}
