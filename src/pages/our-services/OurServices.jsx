import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/Context";

const OurServices = () => {
  const { servicesList, loading } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      {/* <!----------------OOur Services-START----------------> */}
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
          <form action="service.php">
            <button className="button-reg">See More..</button>
          </form>
        </center>
      </div>
      {/* <!----------------OOur Services-START----------------> */}
    </>
  );
};

export default OurServices;
