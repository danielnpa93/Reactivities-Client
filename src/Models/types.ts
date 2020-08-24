export interface IActivityRepository {
  data: IActivity[];
  currentActivityId?: string;
  error: boolean;
  isLoading: boolean;
  isSubmmiting: boolean;
  removingId?: string;
}

export interface ILayout {
  activityContainer: activityContainer;
}

export interface IActivity {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  city: string;
  venue: string;
}

export interface EditableActivity {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  date?: string;
  city?: string;
  venue?: string;
}

export type activityContainer = "edit" | "details" | "none";
