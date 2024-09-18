import React from "react";

const ListMember = () => {
  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Member
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Member List</h4>
            <a href="#" className="btn-back">
              <i className="fa-solid fa-plus" />
            </a>
          </div>
          <div className="table-filter-bx">
            <div className="form-group">
              <select name id className="form-select">
                <option>--Select Role Type--</option>
                <option>Campaign Admin</option>
                <option>Campaign Admin</option>
                <option>Campaign Admin</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Address"
              />
            </div>
            <div className="btn-flex">
              <a href="#" className="btn-filter">
                Filter
              </a>
              <a href="#" className="btn-reset">
                Reset
              </a>
            </div>
          </div>
          <div className="table-bx">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>Sl No#</th>
                  <th>Role Type</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email Id</th>
                  <th>State</th>
                  <th>Address</th>
                  <th>Created On</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Polling Agents</td>
                  <td>test</td>
                  <td>8787254654</td>
                  <td>test@gmail.com</td>
                  <td>ghjgh</td>
                  <td>hgjhjkhk</td>
                  <td>26-07-2024</td>
                  <td>
                    <div className="btn-flex">
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
                  <td>Polling Agents</td>
                  <td>test</td>
                  <td>8787254654</td>
                  <td>test@gmail.com</td>
                  <td>ghjgh</td>
                  <td>hgjhjkhk</td>
                  <td>26-07-2024</td>
                  <td>
                    <div className="btn-flex">
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
                  <td>Polling Agents</td>
                  <td>test</td>
                  <td>8787254654</td>
                  <td>test@gmail.com</td>
                  <td>ghjgh</td>
                  <td>hgjhjkhk</td>
                  <td>26-07-2024</td>
                  <td>
                    <div className="btn-flex">
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
                  <td>Polling Agents</td>
                  <td>test</td>
                  <td>8787254654</td>
                  <td>test@gmail.com</td>
                  <td>ghjgh</td>
                  <td>hgjhjkhk</td>
                  <td>26-07-2024</td>
                  <td>
                    <div className="btn-flex">
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

export default ListMember;
