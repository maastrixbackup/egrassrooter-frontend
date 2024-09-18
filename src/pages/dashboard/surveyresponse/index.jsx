import React from "react";

const Index = () => {
  return (
    <div className="sidebar_sec_rgt">
      <nav aria-label="breadcrumb" className="d-flex align-items-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="user_dashboard.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Give Feedback
          </li>
        </ol>
      </nav>
      <div className="table-bx-main">
        <div className="table-title">
          <h4>Feedback Questions List</h4>
          <a href="#" className="btn-back">
            <i className="fal fa-angle-double-left" />
          </a>
        </div>
        <div className="table-bx">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Sl No#</th>
                <th>Question</th>
                <th>Created On</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>1</td>
                <td>What is the based properties?</td>
                <td>17-07-2024</td>
                <td>
                  <a href="#" className="btn-share">
                    <i className="fa fa-reply" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>What is the based properties?</td>
                <td>17-07-2024</td>
                <td>
                  <a href="#" className="btn-share">
                    <i className="fa fa-reply" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>What is the based properties?</td>
                <td>17-07-2024</td>
                <td>
                  <a href="#" className="btn-share">
                    <i className="fa fa-reply" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>What is the based properties?</td>
                <td>17-07-2024</td>
                <td>
                  <a href="#" className="btn-share">
                    <i className="fa fa-reply" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>What is the based properties?</td>
                <td>17-07-2024</td>
                <td>
                  <a href="#" className="btn-share">
                    <i className="fa fa-reply" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
