/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ImageGalleryContext } from "../../pages/Home";

const Hover = ({ imageNum }) => {
  const { setCurrentImage, currentHover } = useContext(ImageGalleryContext);

  return currentHover === imageNum ? (
    <div
      onClick={() => {
        document.getElementById("my_modal_2").showModal();
        setCurrentImage(imageNum);
      }}
      className="absolute top-0 right-0 left-0 bottom-0 bg-black/[.50] z-10 animate-fade animate-duration-200 animate-ease-linear rounded-md"
    ></div>
  ) : (
    ""
  );
};

export default Hover;
