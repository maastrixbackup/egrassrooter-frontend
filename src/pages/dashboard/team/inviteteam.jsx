import React from 'react'

const TeamAdd = () => {
  return (
    <>
      <div className="sidebar_sec_rgt">
        <nav aria-label="breadcrumb" className="d-flex align-items-start">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="user_dashboard.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Invite Team
            </li>
          </ol>
        </nav>
        <div className="table-bx-main">
          <div className="table-title">
            <h4>Invite Team</h4>
            <a href="#" className="btn-back">
              <i className="fal fa-angle-double-left" />
            </a>
          </div>
          <div className="table-bx">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Email Id</th>
                  <th>Role</th>
                </tr>
                <tr>
                  <td>
                    <div className="tb-form-check">
                      <input type="checkbox" id="test" />
                      <label htmlFor="test">Test</label>
                    </div>
                  </td>
                  <td>78459651265</td>
                  <td>test@gmail.com</td>
                  <td>Polling Agents</td>
                </tr>
                <tr>
                  <td>
                    <div className="tb-form-check">
                      <input type="checkbox" id="test2" />
                      <label htmlFor="test2">Test</label>
                    </div>
                  </td>
                  <td>78459651265</td>
                  <td>test@gmail.com</td>
                  <td>Polling Agents</td>
                </tr>
                <tr>
                  <td>
                    <div className="tb-form-check">
                      <input type="checkbox" id="test3" />
                      <label htmlFor="test3">Test</label>
                    </div>
                  </td>
                  <td>78459651265</td>
                  <td>test@gmail.com</td>
                  <td>Polling Agents</td>
                </tr>
                <tr>
                  <td>
                    <div className="tb-form-check">
                      <input type="checkbox" id="test4" />
                      <label htmlFor="test4">Test</label>
                    </div>
                  </td>
                  <td>78459651265</td>
                  <td>test@gmail.com</td>
                  <td>Polling Agents</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-btn">
            <a href="#" className="btn-event">
              Invite Team
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamAdd
