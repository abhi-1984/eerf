import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageLighbox({ image, alt = "" }) {
  return (
    <Zoom>
      <img className="rounded-lg" alt={alt} src={image} width="500" />
    </Zoom>
  );
}
