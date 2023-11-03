/* eslint-disable react/prop-types */
import { forwardRef, useContext } from "react";
import { ImageGalleryContext } from "../../pages/Home";
import CreateMediaCanvasSource from "../../utils/CreateMediaCanvasSource";
import ImageCheckbox from "./ImageCheckbox";
import Hover from "./Hover";

const ImageContainer = forwardRef(
  ({ imageNum, index, style, ...props }, ref) => {
    const { currentChecked, setCurrentHover } = useContext(ImageGalleryContext);

    //For transition and transform style that coming from dnd kit
    const inlineStyles = {
      ...style,
    };

    return (
      <div
        className={` ${
          index === 0
            ? "col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 xl:w-[24.9rem]"
            : "col-span-1 w-40 min-[375px]:w-52 sm:w-fit xl:w-48"
        }
      relative flex justify-center rounded-lg border-2 m-auto mt-4 sm:mt-0 shadow-lg border-gray-300 bg-cover bg-center origin-top-left`}
        onMouseEnter={() => setCurrentHover(imageNum)}
        onMouseLeave={() => setCurrentHover(-1)}
        ref={ref}
        style={inlineStyles}
        {...props}
      >
        {/*Visible checkBox when hover in the images */}
        <ImageCheckbox imageNum={imageNum} />

        {/*Visible Hover when cursor movement into images */}
        <Hover imageNum={imageNum} />

        {/* reducing the opacity when the image is marked */}
        <img
          className={`bg-white rounded-md ${
            currentChecked.includes(Number(imageNum)) ? "opacity-50" : ""
          } h-fit object-cover transition-all duration-300  ${
            index === 0 ? "xl:h-[24.9rem]" : "h-full w-full xl:w-full"
          } origin-top-left`}
          src={CreateMediaCanvasSource(Number(imageNum))}
          alt="image"
        />
      </div>
    );
  },
);

export default ImageContainer;

ImageContainer.displayName = "Image";
