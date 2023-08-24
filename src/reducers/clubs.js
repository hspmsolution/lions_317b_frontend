import { REGION_DATA, ZONE_DATA ,CLUBS_DATA,CLUB_DETAILS} from "../constants/actionTypes";

const clubsReducer = (state = { zone: [], region: [] ,clubsData:[], clubDetails:{pst:[],club:{}}}, action) => {
  switch (action.type) {
    case ZONE_DATA:
      return { ...state, zone: action.payload };

    case REGION_DATA:
      return { ...state, region: action.payload };
    
    case CLUBS_DATA:
      return {...state,clubsData:action.payload};

    case CLUB_DETAILS:
      return {...state,clubDetails:action.payload};
    default:
      return state;
  }
};

export default clubsReducer;
