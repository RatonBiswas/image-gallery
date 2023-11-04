import { useContext } from "react";
import { ImageGalleryContext } from "../../pages/Home";
import DeleteImageFromMedia from "../../utils/DeleteImageFromMedia";

const DeleteButton = () => {
  const { imageIndex, setCurrentChecked, currentChecked, setImageIndex } =
    useContext(ImageGalleryContext);

  return (
    // <button className="btn btn-sm sm:btn-md btn-primary hover:btn-error">
    //   <span className="hidden sm:block text-red-600"> Delete files</span>
    // </button>
    <button
      onClick={() =>
        DeleteImageFromMedia(
          imageIndex,
          currentChecked,
          setImageIndex,
          setCurrentChecked,
        )
      }
      type="button"
      className="md:absolute top-8 right-80 font-medium inline-flex text-red-500 hover:underline"
    >
      Delete {currentChecked.length > 1 ? "files" : "file"}
    </button>
  );
};

export default DeleteButton;
