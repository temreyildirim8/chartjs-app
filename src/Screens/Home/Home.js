import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { Line } from "react-chartjs-2";

import * as ROUTES from "../../Constants/Routes";
import {
  getRtActiveUsers,
  getRtDownloads,
  getRtSessionDuration,
  getRtPaidUsers,
  getDailyActiveUsers,
  getDailyDownloads
} from "../../Store/Actions/DashboardActions";
import "./HomeStyles.css";
import Header from "../../Components/Header/Header";

const Home = ({
  isSignedIn,
  activeUsers,
  downloads,
  sessionDuration,
  paidUsers,
  dailyUsersLabels,
  dailyUsersData,
  dailyDownloadsLabels,
  dailyDownloadsData,
  getRtActiveUsers,
  getRtDownloads,
  getRtSessionDuration,
  getRtPaidUsers,
  getDailyActiveUsers,
  getDailyDownloads
}) => {
  const history = useHistory();

  useEffect(() => {
    const isSignedIn = true;
    if (!isSignedIn) {
      history.push(ROUTES.SIGN_IN);
    } else {
      getRtActiveUsers();
      getRtDownloads();
      getRtSessionDuration();
      getRtPaidUsers();
      getDailyActiveUsers();
      getDailyDownloads();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <Header/>
      <div className="home_wrapper">
        <div className="inner_wrapper">
          <div className="top_wrapper">
            <div className="info_bar">
              <div className="info_bar_top">
                <div className="image">
                  <img
                    src={require("../../Assets/Icon/user-circle-solid.svg")}
                    alt=""
                  />
                </div>
                <div className="data">
                  <div className="title">Active Users</div>
                  <div className="number">{activeUsers}</div>
                </div>
              </div>
              <div className="info_bar_bottom">
                <div className="image">
                  <img src={require("../../Assets/Icon/refresh.svg")} alt="" />
                </div>
                <div className="title"> Live user count </div>
              </div>
            </div>
            <div className="info_bar">
              <div className="info_bar_top">
                <div className="image">
                  <img
                    src={require("../../Assets/Icon/download-solid.svg")}
                    alt=""
                  />
                </div>
                <div className="data">
                  <div className="title">Downloads</div>
                  <div className="number">{downloads}</div>
                </div>
              </div>
              <div className="info_bar_bottom">
                <div className="image">
                  <img src={require("../../Assets/Icon/refresh.svg")} alt="" />
                </div>
                <div className="title"> Live user count </div>
              </div>
            </div>
            <div className="info_bar">
              <div className="info_bar_top">
                <div className="image">
                  <img
                    src={require("../../Assets/Icon/eye-solid.svg")}
                    alt=""
                  />
                </div>
                <div className="data">
                  <div className="title">Avg Session Duration</div>
                  <div className="number">{sessionDuration.toFixed(2)} mins</div>
                </div>
              </div>
              <div className="info_bar_bottom">
                <div className="image">
                  <img src={require("../../Assets/Icon/refresh.svg")} alt="" />
                </div>
                <div className="title"> Live user count </div>
              </div>
            </div>
            <div className="info_bar">
              <div className="info_bar_top">
                <div className="image">
                  <img
                    src={require("../../Assets/Icon/download-solid.svg")}
                    alt=""
                  />
                </div>
                <div className="data">
                  <div className="title"> Paid Users </div>
                  <div className="number">{paidUsers}</div>
                </div>
              </div>
              <div className="info_bar_bottom">
                <div className="image">
                  <img src={require("../../Assets/Icon/refresh.svg")} alt="" />
                </div>
                <div className="title"> Live user count </div>
              </div>
            </div>
          </div>
          <div className="charts_wrapper">
            <div className="chart">
              <div className="chart_label">
                <div className="chart_label_img">
                  <img
                    src={require("../../Assets/Icon/cart-arrow-down-solid.svg")}
                    alt=""
                  />
                </div>
                <div className="chart_label_text"> Daily Active Users </div>
              </div>
              <Line
                data={{
                  labels: dailyUsersLabels,
                  datasets: [
                    {
                      label: "Daily Active Users",
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: "rgb(165, 112, 213)",
                      borderColor: "rgba(104, 66, 133, 1)",
                      borderWidth: 2,
                      data: dailyUsersData
                    }
                  ]
                }}
                options={{
                  legend: {
                    display: false
                  },
                  maintainAspectRatio: false
                }}
                height={120}
              />
            </div>
            <div className="chart">
              <div className="chart_label">
                <div className="chart_label_img">
                  <img
                    src={require("../../Assets/Icon/cart-arrow-down-solid.svg")}
                    alt=""
                  />
                </div>
                <div className="chart_label_text"> Daily Installs </div>
              </div>
              <Line
                data={{
                  labels: dailyDownloadsLabels,
                  datasets: [
                    {
                      label: "Daily Downloads",
                      fill: false,
                      lineTension: 0.5,
                      backgroundColor: "rgb(165, 112, 213)",
                      borderColor: "rgba(104, 66, 133, 1)",
                      borderWidth: 2,
                      data: dailyDownloadsData
                    }
                  ]
                }}
                options={{
                  legend: {
                    display: false
                  },
                  maintainAspectRatio: false
                }}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.authReducer.isSignedIn,
  activeUsers: state.dashboardReducer.activeUsers,
  downloads: state.dashboardReducer.downloads,
  sessionDuration: state.dashboardReducer.sessionDuration,
  paidUsers: state.dashboardReducer.paidUsers,
  dailyUsersLabels: state.dashboardReducer.dailyUsersLabels,
  dailyUsersData: state.dashboardReducer.dailyUsersData,
  dailyDownloadsLabels: state.dashboardReducer.dailyDownloadsLabels,
  dailyDownloadsData: state.dashboardReducer.dailyDownloadsData
});

export default connect(mapStateToProps, {
  getRtActiveUsers: getRtActiveUsers,
  getRtDownloads: getRtDownloads,
  getRtSessionDuration: getRtSessionDuration,
  getRtPaidUsers: getRtPaidUsers,
  getDailyActiveUsers: getDailyActiveUsers,
  getDailyDownloads: getDailyDownloads
})(withRouter(Home));
