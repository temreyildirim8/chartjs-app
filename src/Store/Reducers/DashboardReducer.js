import * as ActionTypes from "../Actions/ActionTypes";

const initialState = {
  activeUsers: 0,
  downloads: 0,
  sessionDuration: 0,
  paidUsers: 0,
  dailyUsersLabels: [],
  dailyUsersData: [],
  dailyDownloadsLabels: [],
  dailyDownloadsData: []
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RT_ACTIVE_USERS:
      return {
        ...state,
        activeUsers: action.payload.data.payload.activeUsers
      };
    case ActionTypes.RT_DOWNLOADS:
      return {
        ...state,
        downloads: action.payload.data.payload.downloads
      };
    case ActionTypes.RT_PAID_USERS:
      return {
        ...state,
        paidUsers: action.payload.data.payload.paidUsers
      };
    case ActionTypes.RT_SESSION_DURATION:
      return {
        ...state,
        sessionDuration: action.payload.data.payload.avgSessionDuration
      };
    case ActionTypes.DAILY_ACTIVE_USERS:
      const dailyUsersLabelsFirst = Object.keys(
        action.payload.data.payload.data
      );
      const formattedDailyUsersLabels = dailyUsersLabelsFirst.map((data) => {
        const year = data.slice(0, 4);
        const month = data.slice(4, 6);
        const day = data.slice(6, 8);
        return day.concat("-", month, "-", year);
      });
      return {
        ...state,
        dailyUsersLabels: formattedDailyUsersLabels,
        dailyUsersData: Object.values(action.payload.data.payload.data)
      };
    case ActionTypes.DAILY_DOWNLOADS:
        const dailyDownloadsLabelsFirst = Object.keys(
          action.payload.data.payload.data
        );
        const formattedDailyDownloadsLabels = dailyDownloadsLabelsFirst.map((data) => {
          const year = data.slice(0, 4);
          const month = data.slice(4, 6);
          const day = data.slice(6, 8);
          return day.concat("-", month, "-", year);
        });
      return {
        ...state,
        dailyDownloadsLabels: formattedDailyDownloadsLabels,
        dailyDownloadsData: Object.values(action.payload.data.payload.data)
      };
    default:
      return state;
  }
}
