import { useContext } from "react";
import { ImageGalleryContext } from "../../pages/Home";
import DeleteImageFromMedia from "../../utils/DeleteImageFromMedia";
import { toast } from "react-toastify";


const DeleteButton = () => {
  const { imageIndex, setCurrentChecked, currentChecked, setImageIndex } =
    useContext(ImageGalleryContext);

  return (
    // <button className="btn btn-sm sm:btn-md btn-primary hover:btn-error">
    //   <span className="hidden sm:block text-red-600"> Delete files</span>
    // </button>
    <div>
      <button
        onClick={() =>{
          DeleteImageFromMedia(
            imageIndex,
            currentChecked,
            setImageIndex,
            setCurrentChecked,
          )
          // toast.success(`Deleted ${imageIndex} ${currentChecked.length > 1 ? "images" : "image"} Successfully`)
          toast.success(
            `Deleted ${currentChecked.length} ${
              currentChecked.length === 1 ? 'image' : 'images' 
            } Successfully`
          )
          setCurrentChecked([])
        }
        }
        type="button"
        className="font-medium inline-flex items-center text-red-500 hover:underline focus:ring-2 focus:outline-none focus:ring-red-300 text-center rounded-md ring-offset-2"
        //className="md:absolute top-8 right-80 font-medium inline-flex text-red-500 hover:underline"
      >
        Delete {currentChecked.length > 1 ? "files" : "file"}
      </button>
    </div>
  );
};

export default DeleteButton;
