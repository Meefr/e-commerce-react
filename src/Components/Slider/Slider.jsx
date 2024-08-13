import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/open-animation";

const Slider = ({ product }) =>
  product ? (
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      {product.images.map((img) => (
        <div data-src={img} />
      ))}
    </AwesomeSlider>
  ) : (
    <></>
  );
export default Slider;
