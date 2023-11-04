import { useContext } from "react";
import DeleteButton from "../canvas/DeleteButton";
import { ImageGalleryContext } from "../../pages/Home";
const Header = () => {
  const { currentChecked } = useContext(ImageGalleryContext);
  const isAnyImageSelected = currentChecked.length > 0;
  console.log('From Header : ', currentChecked);
  return (
    <div className="border-b-2 mb-8">
      <div className="flex flex-row justify-between items-center px-2 sm:px-3 md:px-4 lg:px-6 pt-6 py-3">
        <div className="text-base font-bold md:text-lg">
          {currentChecked.length > 0 ? (
            <h1 className="flex items-center">
              <input
                type="checkbox"
                checked={isAnyImageSelected}
                readOnly
                className="w-5 h-4 mr-2"
              />
              {currentChecked.length}{" "}
              {currentChecked.length > 1 ? "Files" : "File"} Selected
            </h1>
          ) : (
            <h1>Gallery</h1>
          )}
        </div>
      </div>
      {isAnyImageSelected && (
        <DeleteButton/>
        // <button
        //   onClick={DeleteButton}
        //   type="button"
        //   className="md:absolute top-8 right-80 font-medium inline-flex text-red-500 hover:underline"
        // >
        //   Delete {currentChecked.length > 1 ? "files" : "file"}
        // </button>
      )}
    </div>
  );
};

export default Header;
