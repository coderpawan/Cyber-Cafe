import React, { useContext, useState } from "react";
import "./home.css";
import Slider from "../../components/home-slider/Slider";
import { FaArrowRightLong } from "react-icons/fa6";
import { DataContext } from "../../context/Context";
import AdmissionForm from "../../components/admission-form/AdmissionForm";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    latestJobList,
    resultList,
    admitCardList,
    servicesList,
    governmentJobsList,
    admissionList,
    loading,
  } = useContext(DataContext);
  const [openForm, setOpenForm] = useState(false);

  if (loading) return <p>Loading...</p>;

  function handleOpenForm() {
    setOpenForm(!openForm);
  }

  function onClose() {
    setOpenForm(false);
  }
  return (
    <>
      <div className="slider-bg">
        <Slider />
      </div>
      <center>
        <h1 className="color-line">Welcome To SK-Cyber</h1>
      </center>
      {/* ---------- Admission START--------------- */}
      {admissionList.map((data,index)=>(
        <div className="container-fluid" key={index}>
        <div className="row cl-blue">
          <div className="col-md-5">
            <div className="cp-img-cont">
              <img className="cpimg" src={data._fieldsProto?.Image?.stringValue} alt="" />
            </div>
          </div>

          <div className="col-md-7">
            <div className="cpct">
              <h2 className="cpct-h">● {data._fieldsProto?.Title?.stringValue}</h2>
              <p className="cpct-p">
              {data._fieldsProto?.Detail?.stringValue}
              </p>
            </div>
            <center>
              <button className="button-reg" onClick={handleOpenForm}>
                <a>Get Admission</a>
              </button>
            </center>
          </div>
          <hr />
        </div>
      </div>
      ))}

      {openForm && <AdmissionForm onClose={onClose} />}

      {/* ---------- Admission END--------------- */}

      {/* <!----------------GOVT-JOB-START-----------------> */}
      <div>
        <center>
          <h1 className="color-line">Government - Jobs</h1>
        </center>
      </div>
      <div className="container">
        <table>
          <tr>
            {governmentJobsList.map((data, index) => (
              <td key={index} className="table-dt">
                <a href={data._fieldsProto?.Link?.stringValue}>
                  {data._fieldsProto?.Exam?.stringValue}
                </a>
              </td>
            ))}
          </tr>
        </table>
      </div>
      
      <br />
      {/* <!----------------GOVT-JOB-END-----------------> */}

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
              {resultList.map((data, index) => (
                <div key={index} className="jobs">
                  <FaArrowRightLong className="arrow" />
                  <a
                    target="blank"
                    href={data._fieldsProto?.Link?.stringValue}
                    className="job-text"
                  >
                    {data._fieldsProto?.Name?.stringValue}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4 col-sep">
            <h4 className="tbl-h">Admit Card</h4>
            <div className="b">
            {admitCardList.map((data, index) => (
                  <div key={index} className="jobs">
                    <FaArrowRightLong className="arrow" />
                    <a
                      target="blank"
                      href={data._fieldsProto?.Link?.stringValue}
                      className="job-text"
                    >
                      {data._fieldsProto?.Name?.stringValue}
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-md-4 col-sep">
            <h4 className="tbl-h">Latest Jobs</h4>
            <div className="b">
            {latestJobList.map((data, index) => (
                  <div key={index} className="jobs">
                    <FaArrowRightLong className="arrow" />
                    <a
                      target="blank"
                      href={data._fieldsProto?.Link?.stringValue}
                      className="job-text"
                    >
                      {data._fieldsProto?.Name?.stringValue}
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {/* <hr style="height: 2px; color: black; background-color: gray;"> */}
        <center>
          <Link to="/college-notification">
            <button className="button-reg">See More..</button>
          </Link>
        </center>
      </div>
      </div>
      {/* <!----------------College-Notifications-END----------------> */}

      {/* <!----------------Our Services-START----------------> */}
      <div>
        <div>
          <center>
            <h1 className="color-line">Our Services</h1>
          </center>
        </div>
        <div className="container-fluid bg-bl">
          <div className="row">
            {/* <!------row start-------> */}

            {servicesList.map((data, index) => (
              <div className="col-md-3" key={index}>
                <center>
                  <img
                    src={data._fieldsProto?.Image?.stringValue}
                    className="svc grow-shadow"
                  />
                  <h5 className="tex">{data._fieldsProto?.Name?.stringValue}</h5>
                </center>
              </div>
            ))}
          </div>
          <br />
          {/* <!-----------------row end -------> */}
        </div>

        <hr />
        <center>
          <Link to="/our-services">
            <button className="button-reg">See More..</button>
          </Link>
        </center>
      </div>
      {/* <!----------------OOur Services-START----------------> */}
    </>
  );
};

export default Home;
