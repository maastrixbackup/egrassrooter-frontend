import React from "react";

const Index = () => {
  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Survey
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Survey List</h4>
            <a href="#" className="btn-event">
              Add New Survey
            </a>
          </div>
          <div className="table-bx">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>Sl No#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Created On</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Add Survey</td>
                  <td>Description</td>
                  <td>17-07-2024</td>
                  <td>
                    <div className="btn-flex">
                      <a href="#" className="btn-view">
                        <i className="fa-solid fa-eye" />
                      </a>
                      <a href="#" className="btn-share">
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                      <a href="#" className="btn-danger">
                        <i className="fa-solid fa-xmark" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Add Survey</td>
                  <td>Description</td>
                  <td>17-07-2024</td>
                  <td>
                    <div className="btn-flex">
                      <a href="#" className="btn-view">
                        <i className="fa-solid fa-eye" />
                      </a>
                      <a href="#" className="btn-share">
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                      <a href="#" className="btn-danger">
                        <i className="fa-solid fa-xmark" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Add Survey</td>
                  <td>Description</td>
                  <td>17-07-2024</td>
                  <td>
                    <div className="btn-flex">
                      <a href="#" className="btn-view">
                        <i className="fa-solid fa-eye" />
                      </a>
                      <a href="#" className="btn-share">
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                      <a href="#" className="btn-danger">
                        <i className="fa-solid fa-xmark" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Add Survey</td>
                  <td>Description</td>
                  <td>17-07-2024</td>
                  <td>
                    <div className="btn-flex">
                      <a href="#" className="btn-view">
                        <i className="fa-solid fa-eye" />
                      </a>
                      <a href="#" className="btn-share">
                        <i className="fa-regular fa-pen-to-square" />
                      </a>
                      <a href="#" className="btn-danger">
                        <i className="fa-solid fa-xmark" />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
