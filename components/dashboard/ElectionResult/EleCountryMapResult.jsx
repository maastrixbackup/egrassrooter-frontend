import React from "react";

const EleCountryMapResult = () => {
  return (
    <>
       <div className="ele-graph-bx">
                  <div className="el-gh-slec">
                    <select className="form-select">
                      <option>OSUN</option>
                      <option>IMO</option>
                      <option>KADUNA</option>
                      <option>KANO</option>
                    </select>
                  </div>
                  <div className="el-gh-slec-data">
                    <ul>
                      <li>
                        <p>Accredited votes:</p>
                        <p>732984</p>
                      </li>
                      <li>
                        <p>Total valid votes:</p>
                        <p>714682</p>
                      </li>
                    </ul>
                    <div className="el-gh-data-table">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <th>Parties</th>
                            <th>Votes</th>
                            <th>%</th>
                          </tr>
                          <tr>
                            <td>Peoples Democratic Party</td>
                            <td>337377</td>
                            <td>47.21%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
    </>
  );
};

export default EleCountryMapResult;
