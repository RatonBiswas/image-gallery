/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ImageGalleryContext } from "../../pages/Home";
import Checker from "../../utils/Checker";

const ImageCheckbox = ({ imageNum }) => {
  const { setCurrentChecked, currentChecked, currentHover } =
    useContext(ImageGalleryContext);

  if (
    currentChecked.includes(Number(imageNum)) ||
    Number(currentHover) === Number(imageNum)
  ) {
    return (
      <input
        onChange={(e) => {
          Checker(e, currentChecked, setCurrentChecked);
        }}
        value={Number(imageNum)}
        type="checkbox"
        checked={currentChecked.includes(Number(imageNum)) ? "checked" : ""}
        className="checkbox animate-fade animate-duration-200 animate-ease-linear checkbox-info absolute top-2 left-2 z-20"
      />
    );
  } else return null;
};

export default ImageCheckbox;
