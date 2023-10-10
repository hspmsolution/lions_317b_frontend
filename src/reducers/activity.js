import {
  ACTIVITY_CATEGORY,
  ACTIVITY_SUBTYPE,
  ACTIVITY_TYPE,
  ACTIVITY_PLACEHOLDER,
  REPORTED_ACTIVITY,
  CLUB_DIRECTORS,
  DELETE_ACTIVITY,
  ACTIVITY_LOADING,
  ACTIVITY_FILTER,
  RESET_FILTER,
  PROJECT_DETAILS,
  DELETE_PROJECT,
  ALL_AWARDS
} from "../constants/actionTypes";

const filters = {
  club:"",
  type:"",
  from:"",
  to:"",
  page:1
}

const activityReducer = (
  state = {
    type: [],
    subType: [],
    category: [],
    reportedActivity: [],
    placeHolder: "",
    club_directors: [],
    isLoading: false,
    projects: [],
    about:"",
    activityFilter:filters,
    awards:[]
  },
  action
) => {
  switch (action.type) {
    case CLUB_DIRECTORS:
      return { ...state, club_directors: action.payload };
    case ACTIVITY_TYPE:
      return { ...state, type: action.payload };

    case ACTIVITY_SUBTYPE:
      return { ...state, subType: action.payload };

    case ACTIVITY_CATEGORY:
      return { ...state, category: action.payload };

    case ACTIVITY_PLACEHOLDER:
      return { ...state, placeHolder: action.payload };

    case REPORTED_ACTIVITY:
      return { ...state, reportedActivity: action.payload };

    case DELETE_ACTIVITY:
      return {
        ...state,
        reportedActivity: state.reportedActivity.filter(
          (activity) => activity.activityId !== action.payload
        ),
      };

    case ACTIVITY_LOADING:
      return { ...state, isLoading: action.payload };

    case ACTIVITY_FILTER:
      const {name,value} = action.payload;
      return { ...state, activityFilter:{...state.activityFilter,[name]: value} };
    
    case RESET_FILTER:
      return { ...state, activityFilter:filters };
    
    case PROJECT_DETAILS:
      return { ...state, projects: action.payload?.projects, about:action.payload?.about };
    
    case DELETE_PROJECT:
      return { ...state, projects: state.projects.filter(project=>project.id!==action.payload) };
    
    case ALL_AWARDS:
      return { ...state, awards: action.payload };
    default:
      return state;
  }
};

export default activityReducer;
