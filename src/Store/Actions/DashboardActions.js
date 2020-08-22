import axios from "axios";
import {
  RT_ACTIVE_USERS,
  RT_DOWNLOADS,
  RT_PAID_USERS,
  RT_SESSION_DURATION,
  DAILY_ACTIVE_USERS,
  DAILY_DOWNLOADS
} from "./ActionTypes";

import { baseUrl } from "../../Constants/Constants";

// This page will be handled to make generic actions for those below similar actions
const rtActiveUsersSuccess = result => ({
  type: RT_ACTIVE_USERS,
  payload: result
});

const rtDownloadsSuccess = result => ({
  type: RT_DOWNLOADS,
  payload: result
});

const rtSessionDurationSuccess = result => ({
  type: RT_SESSION_DURATION,
  payload: result
});

const rtPaidUsersSuccess = result => ({
  type: RT_PAID_USERS,
  payload: result
});

const dailyActiveUsersSuccess = result => ({
  type: DAILY_ACTIVE_USERS,
  payload: result
});

const dailyDownloadsSuccess = result => ({
  type: DAILY_DOWNLOADS,
  payload: result
});

export const getRtActiveUsers = () => {
  return dispatch => {
    axios
      .get(
        baseUrl + "rt/activeUsers"
      )
      .then(result => {
        dispatch(rtActiveUsersSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getRtDownloads = () => {
  return dispatch => {
    axios
      .get(baseUrl + "rt/downloads")
      .then(result => {
        dispatch(rtDownloadsSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getRtSessionDuration = () => {
  return dispatch => {
    axios
      .get(
        baseUrl + "rt/sessionDuration"
      )
      .then(result => {
        dispatch(rtSessionDurationSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getRtPaidUsers = () => {
  return dispatch => {
    axios
      .get(baseUrl + "rt/paidUsers")
      .then(result => {
        dispatch(rtPaidUsersSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getDailyActiveUsers = () => {
  return dispatch => {
    axios
      .get(
        baseUrl + "daily/activeUsers"
      )
      .then(result => {
        dispatch(dailyActiveUsersSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getDailyDownloads = () => {
  return dispatch => {
    axios
      .get(
        baseUrl + "daily/downloads"
      )
      .then(result => {
        dispatch(dailyDownloadsSuccess(result));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
