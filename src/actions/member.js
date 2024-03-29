import {
    CLIENT_MSG,MEMBER_PROFILE,AUTH,CLUB_MEMBERS,MEMBER_DIRECTORY,BUSINESS_DIRECTORY,ALL_MEMBERS
  } from "../constants/actionTypes";
  import * as api from "../api";

export const updateMember = (formData,navigate) => async (dispatch) => {
    try {
      const { data, status } = await api.updateMember(formData);
      dispatch({
        type: CLIENT_MSG,
        message: { info: data.successMessage, status },
      });
      dispatch({ type: AUTH, payload: data });
      navigate("/dashboard/app")
    } catch (error) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: error.response.data?.message,
          status: error.response.status,
        },
      });
      console.log(error);
    }
  };

  export const memberProfile = () => async (dispatch) => {
    try {
      const { data} = await api.memberProfile();
       dispatch({type:MEMBER_PROFILE,payload:data[0]})
    } catch (error) {
      dispatch({
        type: CLIENT_MSG,
        message: {
          info: error.response.data?.message,
          status: error.response.status,
        },
      });
      console.log(error);
    }
  };

  export const getClubMembers = () => async (dispatch) => {
    try {
      const { data} = await api.getClubMembers();
       dispatch({type:CLUB_MEMBERS,payload:data})
    } catch (error) {
      console.log(error);
    }
  };

  export const allMembers = (clubid) => async (dispatch) => {
    try {
      const { data} = await api.getAllmembers(clubid);
       dispatch({type:ALL_MEMBERS,payload:data})
    } catch (error) {
      console.log(error);
    }
  };

  export const getMembers = (page=1,searchQuery="") => async (dispatch) => {
    try {

      const { data, status } = await api.memberDirectory(page,searchQuery);
      dispatch({type:MEMBER_DIRECTORY,payload:data})
     console.log(data);
     
    }  catch (error) {
      console.log(error);
    }

};

// export const getBuisnessMembers = () => async (dispatch) => {
//   try {

//     const { data, status } = await api.buisnessDirectory();
//     dispatch({type:BUSINESS_DIRECTORY,payload:data});
//     console.log(data);
   
//   }  catch (error) {
//     console.log(error);
//   }

// };