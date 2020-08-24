import React from "react";
import culture from "../../assets/culture.jpg";
import drinks from "../../assets/drinks.jpg";
import film from "../../assets/film.jpg";
import food from "../../assets/food.jpg";
import music from "../../assets/music.jpg";
import travel from "../../assets/travel.jpg";
import { Card, Image, Button } from "semantic-ui-react";
import { IActivity } from "../../Models/types";
import { dateStringFormat } from "../../Utils/dateStringFormat";
import { CardProps } from ".";

export default function ActivityCard({
  currentActivity,
  layout_toogle_activity_container,
}: CardProps) {
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
        <Image
          src={currentActivity && getImage(currentActivity.category)}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{currentActivity?.title}</Card.Header>
          <Card.Meta>
            {currentActivity && dateStringFormat(currentActivity.date)}
          </Card.Meta>
          <Card.Description>{currentActivity?.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button
              basic
              onClick={() =>
                layout_toogle_activity_container({ activityContainer: "none" })
              }
              color="grey"
            >
              Cancel
            </Button>
            <Button
              onClick={() =>
                layout_toogle_activity_container({ activityContainer: "edit" })
              }
              basic
              color="blue"
            >
              Edit
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
