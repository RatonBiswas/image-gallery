import { useContext } from "react";
import DeleteButton from "../canvas/DeleteButton";
import { ImageGalleryContext } from "../../pages/Home";
const Header = () => {
  const { currentChecked } = useContext(ImageGalleryContext);
  const isAnyImageSelected = currentChecked.length > 0;
  console.log("From Header : ", currentChecked);
  return (
    <div className="border-b-2 mb-8">
      <div className="flex flex-row justify-between items-center px-2 sm:px-3 md:px-4 lg:px-6 pt-6 py-3">
        <div className="text-base font-bold text-gray-900 md:text-lg">
          {currentChecked.length > 0 ? (
            <span className="flex items-center">
              <input
                type="checkbox"
                checked={isAnyImageSelected}
                readOnly
                className="w-5 h-4 mr-2"
              />
              {currentChecked.length}{" "}
              {currentChecked.length > 1 ? "Files" : "File"} Selected
            </span>
          ) : (
            <h1>Gallery</h1>
          )}
        </div>
        {currentChecked.length > 0 && <DeleteButton />}
      </div>
    </div>
  );
};

export default Header;
