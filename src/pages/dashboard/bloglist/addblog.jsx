import React from 'react'

const addblog = () => {
  return (
    <>
    <div className="sidebar_sec_rgt">
      <nav aria-label="breadcrumb" className="d-flex align-items-start">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Blog</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Category
          </li>
        </ol>
      </nav>
      <div className="table-bx-main">
        <div className="table-title">
          <h4>Add Category</h4>
          <a href="#" className="btn-back">
            <i className="fal fa-angle-double-left" />
          </a>
        </div>
        <div className="event-form">
          <div className="row">
            <div className="col-lg-6">
              <div className="survet-img">
                <img src="/images/survey2.jpg" alt />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor>
                      Title <span>*</span>
                      <i className="fa-solid fa-circle-info" />
                    </label>
                    <input type="text" placeholder className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor>
                      Slug Name <span>*</span>
                      <i className="fa-solid fa-circle-info" />
                    </label>
                    <input type="text" placeholder className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor>
                      Image <span>*</span>
                      <i className="fa-solid fa-circle-info" />
                    </label>
                    <div className="file-upload">
                      <div className="file-select">
                        <div className="file-select-button" id="fileName">
                          Choose File
                        </div>
                        <div className="file-select-name" id="noFile">
                          No file chosen...
                        </div>
                        <input
                          type="file"
                          name="chooseFile"
                          id="chooseFile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <label htmlFor>
                      Status <span>*</span>
                      <i className="fa-solid fa-circle-info" />
                    </label>
                    <select name id className="form-select">
                      <option>Slect Status</option>
                      <option>Publish</option>
                      <option>Unpublish</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor>
                      Description <span>*</span>
                      <i className="fa-solid fa-circle-info" />
                    </label>
                    <textarea
                      name
                      id
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-end">
                  <a href="#" className="btn-event">
                    Create
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default addblog
