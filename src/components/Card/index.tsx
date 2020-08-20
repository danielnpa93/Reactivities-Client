import React from "react";
import culture from "../../assets/culture.jpg";
import drinks from "../../assets/drinks.jpg";
import film from "../../assets/film.jpg";
import food from "../../assets/food.jpg";
import music from "../../assets/music.jpg";
import travel from "../../assets/travel.jpg";
import { Card, Image, Button } from "semantic-ui-react";
import { IActivity } from "../../Models/typing";
import { dateStringFormat } from "../../Utils/dateStringFormat";

interface IProps {
  activity: IActivity;
  onEditView(value: "edit" | "none"): void;
}

export default function ActivityCard({ activity, onEditView }: IProps) {
  const getImage = (type: string) => {
    switch (type) {
      case "culture":
        return culture;
      case "drinks":
        return drinks;
      case "film":
        return film;
      case "food":
        return food;
      case "music":
        return music;
      case "travel":
        return travel;
      default:
        return null;
    }
  };

  return (
    <div style={{ gridArea: "details" }}>
      <Card style={{ margin: "20px" }}>
        <Image src={getImage(activity.category)} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>{dateStringFormat(activity.date)}</Card.Meta>
          <Card.Description>{activity.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic onClick={() => onEditView("none")} color="grey">
              Cancel
            </Button>
            <Button onClick={() => onEditView("edit")} basic color="blue">
              Edit
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
