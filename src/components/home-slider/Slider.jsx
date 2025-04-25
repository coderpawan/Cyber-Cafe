import { React, useContext } from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./slider.css";
import { DataContext } from "../../context/Context";

const Slider = () => {
  const { sliderList, loading } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  return (
    <div className="wid">
      <CCarousel controls indicators>
        {sliderList.map((data, index) => (
          <CCarouselItem slider-img key={index}>
            <CImage
              className="d-block w-100 slider-img"
              src={data._fieldsProto?.Image?.stringValue}
              alt="slide 1"
            />
            <CCarouselCaption className="cap">
              <h5>{data._fieldsProto?.Label?.stringValue}</h5>
              <p>{data._fieldsProto?.Detail?.stringValue}</p>
            </CCarouselCaption>
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
};

export default Slider;
