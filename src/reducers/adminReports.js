import {
  ADMIN_REPORTS,
  ADMIN_FORM,
  ADMIN_POINTS,
  UPDATE_REPORT,
  CLUBS_REPORTING,
  ADMIN_PDF,
  SELECTED_MONTH,
  ADMIN_REPORTS_LOADING
} from "../constants/actionTypes";

const adminReportReducer = (
  state = { adminReports: [], adminPoints: [] ,clubReporting:[], reportsPdf:"",selectedMonth:"",adminReportLoading:false},
  action
) => {
  switch (action.type) {
    case ADMIN_REPORTS:
      const reports = action.payload.map((event) => ({
        ...event,
        count: event.multiple,
        selected: false,
      }));

      return { ...state, adminReports: reports };

    case ADMIN_PDF:
      return {...state,reportsPdf:action.payload};
    
    case SELECTED_MONTH:
      return {...state,selectedMonth:action.payload}

    case UPDATE_REPORT:
      const { name, id, count, selected } = action.payload;
      if (name === "counter") {
        const updatedReports = state.adminReports.map((report) =>
          report.id === id ? { ...report, count } : report
        );
        return { ...state, adminReports: updatedReports };
      }
      if (name === "checkbox") {
        const updatedReports = state.adminReports.map((report) =>
          report.id === id ? { ...report, selected: !report.selected } : report
        );
        return { ...state, adminReports: updatedReports };
      }
      return state;

    case ADMIN_POINTS:
      return { ...state, adminPoints: action.payload };
    
    case CLUBS_REPORTING:
      return {...state,clubReporting:action.payload};

    case ADMIN_REPORTS_LOADING:
      return {...state,adminReportLoading:action.payload}
    default:
      return state;
  }
};

export default adminReportReducer;
