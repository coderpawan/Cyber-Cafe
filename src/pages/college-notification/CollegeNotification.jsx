import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { DataContext } from "../../context/Context";
import { useContext } from "react";

const CollegeNotification = () => {
  const { latestJobList, resultList, admitCardList, loading } =
    useContext(DataContext);

  if (loading) return <p>Loading Government Jobs...</p>;
  return (
    <>
      {/* <!----------------College-Notifications-START----------------> */}
      <div>
        <div>
          <center>
            <h1 className="color-line">College Notifcations</h1>
          </center>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-md-4">
              <h4 className="tbl-h">Result</h4>
              <div className="b">
                {latestJobList.map((job, index) => (
                  <div className="jobs" key={index}>
                    <FaArrowRightLong className="arrow" />
                    <a
                      href={job._fieldsProto?.Link?.stringValue || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="job-text text-gray-800"
                    >
                      {job._fieldsProto?.Name?.stringValue}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4 col-sep">
              <h4 className="tbl-h">Admit Card</h4>
              <div className="b">
                {resultList.map((job, index) => (
                  <div className="jobs" key={index}>
                    <FaArrowRightLong className="arrow" />
                    <a
                      href={job._fieldsProto?.Link?.stringValue || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="job-text"
                    >
                      {job._fieldsProto?.Name?.stringValue}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 col-sep">
              <h4 className="tbl-h">Exam Forms</h4>
              <div className="b">
                {admitCardList.map((job, index) => (
                  <div className="jobs" key={index}>
                    <FaArrowRightLong className="arrow" />
                    <a
                      href={job._fieldsProto?.Link?.stringValue || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="job-text"
                    >
                      {job._fieldsProto?.Name?.stringValue}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!----------------College-Notifications-END----------------> */}
    </>
  );
};

export default CollegeNotification;
