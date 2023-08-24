import * as api from "../api";

import { ZONE_DATA, REGION_DATA,CLUBS_DATA,CLUB_DETAILS} from "../constants/actionTypes";


export const clubsData = () => async (dispatch) => {
  try {
    const { data } = await api.clubsData();
    dispatch({ type: CLUBS_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const clubDetails = () => async (dispatch) => {
  try {
    const { data } = await api.clubDetails();
    dispatch({ type: CLUB_DETAILS , payload: data });
  } catch (error) {
    dispatch({ type: CLUB_DETAILS , payload: [] });
    console.log(error);
  }
};

export const getZone = () => async (dispatch) => {
  try {
    const { data } = await api.getZone();
    dispatch({ type: ZONE_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getRegion = () => async (dispatch) => {
  try {
    const { data } = await api.getRegion();
    dispatch({ type: REGION_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

