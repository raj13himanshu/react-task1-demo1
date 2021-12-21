import React from "react";
import "./style.css";



const Header = () => {
  return (
    <>
      <section>
        <div className="container-fluid mx-auto">
          <div className="row">
            <div className="col mx-auto">
              <button className="btn bg-color1 text-black font-weight-bolder   ">
                Overall Attendance &nbsp; &#160;{" "}
                <span className="green">80%</span>
              </button>
            </div>
            <div className="col btn mx-2">
              <button className="btn bg-color1 text-black font-weight-bolder">
                Avg. Test score &nbsp; &#160;
                <span className="orn">40%</span>
              </button>
            </div>
            <div className="col btn mx-2">
              <button className="btn bg-color1 text-black font-weight-bolder">
                Assignment to check &nbsp; &#160;
                <span className="orn">3</span>
              </button>
            </div>
            <div className="col btn mx-2">
              <button className="btn bg-color1 text-black font-weight-bolder">
                Course progress &nbsp; &#160; <span className="orn">39%</span>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col mx-1">
              <h6 className="font-weight-bold my-3 mb-2">
                Pending at your desk
              </h6>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-10 col-md-3 col-12  ">
              <section>
                <div className="container-fluid border bg-color1 mx-1 my-2 border5">
                  <div className="row">
                    <div className="col">
                      <div className="row text-black">
                        <h5>
                          Last minute revision - Light & sound Post your comment
                        </h5>
                        <div>
                          <span className="color:#FF0000">
                            Physics class 6B *
                          </span>
                          <span className="orn">2/6 submitted</span>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row text-black">
                        <h5>
                          Grade Assignments - Light & sound Post your comment
                        </h5>
                        <div>
                          <span className="color:#FF0000">
                            Physics class 6B *
                          </span>
                          <span className="orn">2/6 submitted</span>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row text-black">
                        <h5>
                          Grade Test - Light & sound Post your comment
                        </h5>
                        <div>
                          <span className="color:#FF0000">
                            Physics class 6B *
                          </span>
                          <span className="orn">2/6 submitted</span>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row text-black">
                        <h5>
                          Grade Quiz - Light & sound Post your comment
                        </h5>
                        <div>
                          <span className="color:#FF0000">
                            Physics class 6B *
                          </span>
                          <span className="orn">2/6 submitted</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="col-lg-2 col-md col-12 ">
              <section>
                <h6 className="font-weight-bold my-0  mb-0 pd-2">
                  Time Table &#160; &#160; &#160; &#160; View more
                </h6>
                <div className="row box4 ">
                  <div className="row box2 text-white vl ">
                    <h6>Class 11A - Chemistry</h6>
                    <p className="orn"> in 30 mins - 6c3d / 1PM</p>
                  </div>
                </div>
                <br></br>
                <h6 className="font-weight-bold my-2">Student Overview</h6>
                <div className="row box3 font-weight-bolder text-black     ">
                  <h6 className="font-weight-bold my-2">TOP PERFORMER</h6>
                  <p>Himanshu Raj &#160; &#160; Marks</p>
                  <p>Himanshu Raj &#160; &#160; Marks</p>
                  <p>Himanshu Raj &#160; &#160; Marks</p>
                  <hr></hr>
                 
                </div>{" "}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
