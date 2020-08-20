import React, { useEffect } from "react";
import NavBar from "./Nav";
import { IActivity } from "../Models/typing";
import { GlobalStyle } from "./styles";
import Dashboard from "./Dashboard";
import "./index.css";
import EditContainer from "./EditContainer";
import ActivityCard from "./Card";
import { Activities } from "../api/agent";
import { Dimmer, Loader } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = React.useState<IActivity[]>([]);
  const [selectedActivity, selectActivity] = React.useState<
    IActivity | undefined
  >(undefined);
  const [viewMode, setViewMode] = React.useState<"edit" | "detail" | "none">(
    "none"
  );
  const [isLoadingActivities, setLoadingActivities] = React.useState<boolean>(
    true
  );
  const [isSubmitting, setSubmiting] = React.useState<boolean>(false);
  const [isRemovingId, setRemovingId] = React.useState<string | null>(null);

  useEffect(() => {
    Activities.list().then((resp) => {
      setActivities(resp);
      setLoadingActivities(false);
    });
  }, []);

  const handleRemove = (activity: IActivity) => {
    setRemovingId(activity.id);
    Activities.remove(activity.id).then(() => {
      setActivities(activities.filter((x) => x.id !== activity.id));
      setRemovingId(null);
    });
  };

  const handleUpdate = (activity: IActivity) => {
    setSubmiting(true);
    Activities.update(activity).then(() => {
      setActivities([
        ...activities.map((x) => {
          if (x.id === activity.id) {
            return { ...x, ...activity };
          } else {
            return x;
          }
        }),
      ]);
      setSubmiting(false);
      selectActivity(activity);
      setViewMode("detail");
    });
  };

  const handleCreate = (activity: IActivity) => {
    setSubmiting(true);
    Activities.create(activity).then(() => {
      setActivities([...activities, activity]);
      setSubmiting(false);
      selectActivity(activity);
      setViewMode("detail");
    });
  };

  const handleViewMode = () => {
    switch (viewMode) {
      case "detail":
        return (
          selectedActivity && (
            <ActivityCard
              activity={selectedActivity}
              onEditView={setViewMode}
            />
          )
        );
      case "edit":
        return (
          <EditContainer
            isSubmitting={isSubmitting}
            key={selectedActivity?.id || 0}
            activity={selectedActivity}
            onCancel={() => setViewMode("none")}
            onSubmit={selectedActivity ? handleUpdate : handleCreate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar
        onNewActivity={() => {
          selectActivity(undefined);
          setViewMode("edit");
        }}
      />
      {isLoadingActivities ? (
        <Dimmer active inverted>
          <Loader>Loading Activities...</Loader>
        </Dimmer>
      ) : (
        <>
          <Dashboard
            isRemovingId={isRemovingId}
            onRemove={handleRemove}
            activities={activities}
            onView={(activity: IActivity) => {
              setViewMode("detail");
              selectActivity(activity);
            }}
          />
          {handleViewMode()}
        </>
      )}
    </React.Fragment>
  );
}

export default App;
